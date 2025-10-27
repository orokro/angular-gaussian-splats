/*
	view3d.component.ts
	-------------------

	Set's up ThreeJS & renders PLY point clouds.

	NOTE: all the ThreeJS code + state lives in this component.
	THEREFORE: we should probably move this out into a service / module later.
*/

// Angular Imports
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

// App
import { Pointcloud } from '../../services/pointclouds.service';

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
	@Input() showDebugCube: boolean = false;
	@Input() model: any | null = null;

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

		const light = new THREE.AmbientLight(0xffffff, 0.6);
		this.scene.add(light);

		// Directional light for better shading
		const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
		dirLight.position.set(2, 4, 3);
		this.scene.add(dirLight);

		// --- DEBUG CUBE -----------------------------------------------------
		if (this.showDebugCube) {
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
		}
		// --------------------------------------------------------------------

		this.handleResize();
		window.addEventListener('resize', this.handleResize);
		this.animate();

		// set up keyboard controls
		window.addEventListener('keydown', this.handleKey);
	}


	/**
	 * Lifecycle hook called when the component is about to be destroyed.
	 */
	ngOnDestroy(): void {

		// clean up window events
		window.removeEventListener('keydown', this.handleKey);
		window.removeEventListener('resize', this.handleResize);

		// kill animation frame loop
		if (this.frameId !== null)
			cancelAnimationFrame(this.frameId);

		// clean up threeJS
		this.renderer?.dispose();
	}


	/**
	 * Lifecycle hook called when any data-bound input properties change.
	 * 
	 * @returns A promise that resolves when the component's input properties change.
	 */
	async ngOnChanges(): Promise<void> {

		if (!this.model)
			return;

		const { path, transform } = this.model;
		await this.loadPly(path, transform);
	}


	/**
	 * Loads a PLY file and adds it to the scene.
	 * 
	 * @param path - The path to the PLY file to be loaded.
	 */
	private loadPly = async (path: string, transform?: any) => {

		console.log('[PLY] Loading with transform:', transform);

		const loader = new PLYLoader();

		loader.load(path, (geometry: THREE.BufferGeometry) => {
			geometry.computeBoundingBox();
			geometry.center();

			// Check for color data
			const hasColors = geometry.hasAttribute('color');
			console.log('[PLY] Has vertex colors:', hasColors);

			let material: THREE.PointsMaterial;

			if (hasColors) {
				material = new THREE.PointsMaterial({
					size: 0.01,
					sizeAttenuation: true,
					vertexColors: true
				});
			} else {
				// Fallback gray-white color if no vertex colors
				material = new THREE.PointsMaterial({
					size: 0.01,
					sizeAttenuation: true,
					color: 0xdddddd
				});
			}

			const points = new THREE.Points(geometry, material);

			if (transform) {
				points.position.set(
					transform.position.x,
					transform.position.y,
					transform.position.z
				);
				points.rotation.set(
					transform.rotation.x,
					transform.rotation.y,
					transform.rotation.z
				);
				points.scale.set(
					transform.scale.x,
					transform.scale.y,
					transform.scale.z
				);
			}

			if (this.currentPoints) {
				this.scene.remove(this.currentPoints);
				(this.currentPoints.material as any).dispose?.();
				this.currentPoints.geometry.dispose();
			}

			this.currentPoints = points;
			this.scene.add(points);

			// frame the object
			if (geometry.boundingBox) {
				const bb = geometry.boundingBox;
				const size = new THREE.Vector3().subVectors(bb.max!, bb.min!).length();
				const dist = size * 0.8;
				this.camera.position.set(dist, dist, dist);
				this.controls.update();
			}
		});
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


	/**
	 * Keyboard controls for debugging transforms.
	 *  W/S → Move forward/backward (Z)
	 *  A/D → Move left/right (X)
	 *  Q/E → Move down/up (Y)
	 *  R/F → Scale up/down
	 *  Arrow keys → Rotate (Left/Right = Yaw, Up/Down = Pitch)
	 *  P → Print current transform to console
	 */
	private handleKey = (event: KeyboardEvent) => {

		if (!this.currentPoints) return;

		const stepMultiplier = event.shiftKey ? 15 : 1;

		const obj = this.currentPoints;
		const step = 0.1 * stepMultiplier;
		const scaleStep = 0.05;
		const rotStep = 0.05;

		switch (event.key.toLowerCase()) {
			// Translation
			case 'w': obj.position.z -= step; break;
			case 's': obj.position.z += step; break;
			case 'a': obj.position.x -= step; break;
			case 'd': obj.position.x += step; break;
			case 'q': obj.position.y -= step; break;
			case 'e': obj.position.y += step; break;

			// Scaling
			case 'r': obj.scale.multiplyScalar(1 + scaleStep); break;
			case 'f': obj.scale.multiplyScalar(1 - scaleStep); break;

			// Rotation
			case 'arrowleft': obj.rotation.y += rotStep; break;
			case 'arrowright': obj.rotation.y -= rotStep; break;
			case 'arrowup': obj.rotation.x += rotStep; break;
			case 'arrowdown': obj.rotation.x -= rotStep; break;

			// use numpad for roll
			case '4': obj.rotation.z += rotStep; break;
			case '6': obj.rotation.z -= rotStep; break;
			
			// Print
			case 'p':
				console.log('[Transform]',
					{
						position: obj.position.clone(),
						rotation: obj.rotation.clone(),
						scale: obj.scale.clone()
					}
				);
				break;
		}
	};

}
