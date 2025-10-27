/*
	gaussian-viewer.component.ts
	----------------------------

	Component for displaying Gaussian files.
*/

// Angular Imports
import { Component } from '@angular/core';

// Component Imports
import { View3DComponent } from '../../components/view3d/view3d.component';
import { PickerComponent } from '../../components/picker/picker.component';
import { StatusBarComponent } from '../../components/status-bar/status-bar.component';

// Service Imports
import { Pointcloud } from '../../services/pointclouds.service';


@Component({
	selector: 'app-gaussian-viewer',
	standalone: true,
	imports: [PickerComponent, View3DComponent, StatusBarComponent],
	templateUrl: './gaussian-viewer.component.html',
	styleUrls: ['./gaussian-viewer.component.scss']
})
export class GaussianViewerComponent {

	currentModel: Pointcloud | null = null;

	onModelSelected(model: Pointcloud) {
		this.currentModel = model;
	}
}