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


@Component({
	selector: 'app-gaussian-viewer',
	standalone: true,
	imports: [View3DComponent, PickerComponent, StatusBarComponent],
	templateUrl: './gaussian-viewer.component.html',
	styleUrls: ['./gaussian-viewer.component.scss']
})
export class GaussianViewerComponent {
	currentPath: string | null = null;
	onPick(path: string) { this.currentPath = path; }
}
