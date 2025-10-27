/*
	view3d.component.ts
	-------------------

	Set's up ThreeJS & renders PLY point clouds.
*/

// Angular Imports
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

// Library Imports
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';


@Component({
	selector: 'app-view3d',
	standalone: true,
	templateUrl: './view3d.component.html',
	styleUrl: './view3d.component.scss'
})
export class View3DComponent implements AfterViewInit, OnDestroy {

	@ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
	@Input() plyPath: string | null = null;

	private renderer!: THREE.WebGLRenderer;
	private scene = new THREE.Scene();
	private camera = new THREE.PerspectiveCamera(60, 1, 0.01, 1000);
	private controls!: InstanceType<typeof OrbitControls>;
	private frameId: number | null = null;
	private currentPoints: THREE.Points | null = null;

	/**
	 * Lifecycle hook called after the component's view has been fully initialized.
	 */
	ngAfterViewInit(): void {

		const canvas = this.canvasRef.nativeElement;

		this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		this.scene.background = new THREE.Color(0x0b0d12);

		this.camera.position.set(0.7, 0.7, 0.7);
		this.controls = new OrbitControls(this.camera, canvas);
		this.controls.enableDamping = true;

		this.controls.target.set(0, 0, 0);
		this.camera.lookAt(0, 0, 0);

		const light = new THREE.AmbientLight(0xffffff, 0.6);
		this.scene.add(light);

		// Directional light for better shading
		const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
		dirLight.position.set(2, 4, 3);
		this.scene.add(dirLight);

		// --- DEBUG CUBE -----------------------------------------------------
		// Adds a simple gray cube to verify that rendering & camera controls
		// are working before loading any PLY content.
		const debugGeometry = new THREE.BoxGeometry(1, 1, 1);
		const debugMaterial = new THREE.MeshStandardMaterial({
			color: 0x777777,
			metalness: 0.3,
			roughness: 0.7
		});
		const debugCube = new THREE.Mesh(debugGeometry, debugMaterial);
		this.scene.add(debugCube);
		// --------------------------------------------------------------------

		this.handleResize();
		window.addEventListener('resize', this.handleResize);
		this.animate();
	}


	/**
	 * Lifecycle hook called when the component is about to be destroyed.
	 */
	ngOnDestroy(): void {

		window.removeEventListener('resize', this.handleResize);

		if (this.frameId !== null)
			cancelAnimationFrame(this.frameId);

		this.renderer?.dispose();
	}


	/**
	 * Lifecycle hook called when any data-bound input properties change.
	 * 
	 * @returns A promise that resolves when the component's input properties change.
	 */
	async ngOnChanges(): Promise<void> {

		if (!this.plyPath)
			return;

		await this.loadPly(this.plyPath);
	}


	/**
	 * Loads a RealityScan / Gaussian point cloud PLY and adds it to the scene.
	 * 
	 * @param path - The path to the PLY file to be loaded.
	 */
	private loadPly = async (path: string) => {

		console.log('[PLY] Manually loading binary point cloud:', path);

		// Fetch raw binary data instead of using PLYLoader
		const res = await fetch(path);
		const buffer = await res.arrayBuffer();
		const data = new DataView(buffer);

		// --- Read header as ASCII safely ---
		const headerBuffer = buffer.slice(0, Math.min(buffer.byteLength, 20000));
		const headerText = new TextDecoder("ascii").decode(headerBuffer);

		const headerEndIndex = headerText.indexOf("end_header");
		if (headerEndIndex === -1) {
			console.error("[PLY] Could not find 'end_header' in header!");
			console.log("[PLY] Header preview (first 3000 chars):\n", headerText.slice(0, 3000));
			return;
		}

		const cleanHeader = headerText.slice(0, headerEndIndex + "end_header".length);
		console.log("---------- HEADER TEXT ----------");
		console.log(cleanHeader);
		console.log("---------- END HEADER ----------");

		// Now extract vertex count
		const match = cleanHeader.match(/element\s+vertex\s+(\d+)/);
		if (!match) {
			console.error("[PLY] No vertex count found in header!");
			return;
		}
		const vertexCount = parseInt(match[1]);
		console.log("[PLY] vertex count:", vertexCount);
		
		// Find start of binary data
		const headerLength = headerText.indexOf('end_header') + 'end_header'.length;
		const start = headerLength + 1; // skip newline

		// Each vertex = 39 floats (3 pos + 3 dc + 33 rest)
		const floatsPerVertex = 39;
		const stride = floatsPerVertex * 4;

		const positions = new Float32Array(vertexCount * 3);
		const colors = new Float32Array(vertexCount * 3);

		let offset = start;
		for (let i = 0; i < vertexCount; i++) {
			const x = data.getFloat32(offset + 0, true);
			const y = data.getFloat32(offset + 4, true);
			const z = data.getFloat32(offset + 8, true);
			const dc0 = data.getFloat32(offset + 12, true);
			const dc1 = data.getFloat32(offset + 16, true);
			const dc2 = data.getFloat32(offset + 20, true);
			offset += stride;

			positions[i * 3 + 0] = x;
			positions[i * 3 + 1] = y;
			positions[i * 3 + 2] = z;

			// RealityScan DC values are small (~ -0.5 to 0.5). Convert to visible color.
			colors[i * 3 + 0] = THREE.MathUtils.clamp(dc0 + 0.5, 0, 1);
			colors[i * 3 + 1] = THREE.MathUtils.clamp(dc1 + 0.5, 0, 1);
			colors[i * 3 + 2] = THREE.MathUtils.clamp(dc2 + 0.5, 0, 1);
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
		geometry.computeBoundingBox();
		geometry.center();

		const material = new THREE.PointsMaterial({
			size: 0.015,
			sizeAttenuation: true,
			vertexColors: true
		});

		const points = new THREE.Points(geometry, material);

		if (this.currentPoints) {
			this.scene.remove(this.currentPoints);
			(this.currentPoints.material as any).dispose?.();
			this.currentPoints.geometry.dispose();
		}

		this.currentPoints = points;
		this.scene.add(points);

		if (geometry.boundingBox) {
			const bb = geometry.boundingBox;
			const size = new THREE.Vector3().subVectors(bb.max!, bb.min!).length();
			const dist = size * 0.8;
			this.camera.position.set(dist, dist, dist);
			this.controls.target.set(0, 0, 0);
			this.camera.lookAt(0, 0, 0);
			this.controls.update();
		}

		console.log('[PLY] Added', vertexCount, 'points to scene.');
	};





	/**
	 * Handles window resize events to adjust the camera and renderer size.
	 */
	private handleResize = () => {

		const el = this.canvasRef.nativeElement.parentElement as HTMLElement;
		const { clientWidth: w, clientHeight: h } = el;

		this.camera.aspect = w / h;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(w, h, false);
	};


	/**
	 * Animation loop to render the scene.
	 */
	private animate = () => {

		this.frameId = requestAnimationFrame(this.animate);
		this.controls.update();
		this.renderer.render(this.scene, this.camera);
	};
}
