/*
	picker.component.ts
	-------------------

	Component for picking point cloud files.
*/

// Angular Imports
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForOf } from '@angular/common';

// Service Imports
import { PointcloudsService } from '../../services/pointclouds.service';

@Component({
	selector: 'app-picker',
	standalone: true,
	imports: [NgForOf],
	templateUrl: './picker.component.html',
	styleUrl: './picker.component.scss'
})
export class PickerComponent {

	@Output() pick = new EventEmitter<string>();

	constructor(public pcs: PointcloudsService) { }
	
	onChange(e: Event) {
		const sel = e.target as HTMLSelectElement;
		if (sel?.value) this.pick.emit(sel.value);
	}
}
