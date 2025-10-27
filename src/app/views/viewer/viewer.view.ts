/*
	viewer.vis.ts
	-------------

	Page to show the 3D Gaussian Viewer.
*/

// Angular Imports
import { Component } from '@angular/core';

// Component Imports
import { GaussianViewerComponent } from '../../features/gaussian-viewer/gaussian-viewer.component';


@Component({
	selector: 'app-viewer-view',
	standalone: true,
	imports: [GaussianViewerComponent],
	templateUrl: './viewer.view.html',
	styleUrl: './viewer.view.scss'
})
export class ViewerViewComponent { }
