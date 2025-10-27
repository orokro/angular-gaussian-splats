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

        const light = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(light);

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
	 * Loads a PLY file and adds it to the scene.
	 * 
	 * @param path - The path to the PLY file to be loaded.
	 */
    private loadPly = async (path: string) => {

        const loader = new PLYLoader();

        loader.load(path, (geometry: THREE.BufferGeometry) => {
            geometry.computeBoundingBox();
            geometry.center();

            const material = new THREE.PointsMaterial({
                size: 0.01,
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
}
