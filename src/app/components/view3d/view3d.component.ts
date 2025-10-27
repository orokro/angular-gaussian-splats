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

	// grab ref to the canvas so we can use it for our vanilla ThreeJS renderer target
	@ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

	// props
	@Input() plyPath: string | null = null;
	@Input() showDebugCube: boolean = false;
	@Input() model: any | null = null;

	// ThreeJS variables
	private renderer!: THREE.WebGLRenderer;
	private scene = new THREE.Scene();
	private camera = new THREE.PerspectiveCamera(60, 1, 0.01, 10000);
	private controls!: InstanceType<typeof OrbitControls>;
	private frameId: number | null = null;
	private currentPoints: THREE.Points | null = null;


	/**
	 * Lifecycle hook called after the component's view has been fully initialized.
	 */
	ngAfterViewInit(): void {

		// set up ThreeJS
		this.initThree();
		
		// resize once on start up & kick off animation 
		this.handleResize();
		this.animate();

		// set up window listeners
		this.addListeners();
	}


	/**
	 * Initializes the ThreeJS scene, camera, renderer, and controls.
	 */
	initThree(): void {

		// get our canvas ref & build our ThreeJS renderer
		const canvas = this.canvasRef.nativeElement;
		this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		this.scene.background = new THREE.Color(0x0b0d12);

		// set up a camera with basic orbit controls
		this.camera.position.set(0.7, 0.7, 0.7);
		this.controls = new OrbitControls(this.camera, canvas);
		this.controls.enableDamping = true;

		// add some lights in case we need to render objects (i.e. debug cube)
		const light = new THREE.AmbientLight(0xffffff, 1.6);
		this.scene.add(light);

		// Directional light for better shading
		const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
		dirLight.position.set(2, 4, 3);
		this.scene.add(dirLight);

		// if we have the debug cube prop, add a debug cube
		// (used to test rendering without having to load a PLY file)
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
	}


	/**
	 * Adds event listeners for window resize and keyboard input.
	 */
	addListeners(): void {
		window.addEventListener('resize', this.handleResize.bind(this));
		window.addEventListener('keydown', this.handleKey.bind(this));
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

		// if we don't have a model to to load, exit
		if (!this.model)
			return;

		// break out the path to the PLY file & it's default xforms
		const { path, transform } = this.model;

		// load the PLY file
		await this.loadPly(path, transform);
	}


	/**
	 * Loads a PLY file and adds it to the scene.
	 * 
	 * @param path - The path to the PLY file to be loaded.
	 */
	private loadPly = async (path: string, transform?: any) => {

		// for debug, make sure we got good data`
		// console.log('[PLY] Loading with transform:', transform);

		// load the file
		const loader = new PLYLoader();
		loader.load(path, (geometry: THREE.BufferGeometry) => {

			// get the geometry centered
			geometry.computeBoundingBox();
			geometry.center();

			// Check for color data (not all PLYs will have per vertex colors)
			const hasColors = geometry.hasAttribute('color');
			// console.log('[PLY] Has vertex colors:', hasColors);

			// initial material, but we can change based on if we have colors
			let material: THREE.PointsMaterial;

			if (hasColors) {
				material = new THREE.PointsMaterial({
					size: 1.01,
					sizeAttenuation: true,
					vertexColors: true
				});

			// Fallback gray-white color if no vertex colors
			} else {
				
				material = new THREE.PointsMaterial({
					size: 0.01,
					sizeAttenuation: true,
					color: 0xdddddd
				});
			}

			// create the points object
			const points = new THREE.Points(geometry, material);

			// apply supplied initial transform if any
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

			// clear out any existing points from the scene
			if (this.currentPoints) {

				this.scene.remove(this.currentPoints);
				(this.currentPoints.material as any).dispose?.();
				this.currentPoints.geometry.dispose();
			}

			// add the new points to the scene
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

		// measure our canvas parent element
		const el = this.canvasRef.nativeElement.parentElement as HTMLElement;
		const { clientWidth: w, clientHeight: h } = el;

		// update camera & renderer
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

		// GTFO if nothing is on screen
		if (!this.currentPoints)
			return;

		// determine step size (larger if shift is held)
		const stepMultiplier = event.shiftKey ? 100 : 10;
		const obj = this.currentPoints;
		const step = 0.1 * stepMultiplier;
		const scaleStep = 0.05;
		const rotStep = 0.05;

		// handle spceific keys
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
