/*
	view3d.component.ts
	-------------------

	Component for rendering 3D point clouds using Three.js.
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

	// start with WebGL; we can swap to WebGPU later
	private renderer!: THREE.WebGLRenderer;
	private scene = new THREE.Scene();
	private camera = new THREE.PerspectiveCamera(60, 1, 0.01, 1000);
	private controls!: OrbitControls;
	private frameId: number | null = null;
	private currentPoints: THREE.Points | null = null;


	/**
	 * Lifecycle hook called after the view has been initialized.
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

		this.onResize();
		window.addEventListener('resize', this.onResize);
		this.animate();
	}


	/**
	 * Lifecycle hook called when the component is destroyed.
	 */
	ngOnDestroy(): void {

		window.removeEventListener('resize', this.onResize);

		if (this.frameId !== null)
			cancelAnimationFrame(this.frameId);

		this.renderer?.dispose();
	}


	/**
	 * Lifecycle hook called when input properties change.
	 */
	async ngOnChanges(): Promise<void> {

		if (!this.plyPath)
			return;
		await this.loadPly(this.plyPath);
	}


	/**
	 * Loads a PLY file and adds it to the scene.
	 * 
	 * @param path Path to the PLY file to load.
	 */
	private loadPly = async (path: string) => {

		const loader = new PLYLoader();

		loader.load(path, geometry => {
			geometry.computeBoundingBox();
			geometry.center();


			const material = new THREE.PointsMaterial({ size: 0.01, sizeAttenuation: true, vertexColors: true });
			const points = new THREE.Points(geometry, material);


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
	 * Handles window resize events to adjust the renderer and camera.
	 */
	private onResize = () => {

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
