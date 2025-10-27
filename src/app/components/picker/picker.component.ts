/*
	picker.component.ts
	-------------------

	Component for picking point cloud files.
*/

// Angular Imports
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForOf } from '@angular/common';

// Service Imports
import { PointcloudsService, Pointcloud } from '../../services/pointclouds.service';

@Component({
	selector: 'app-picker',
	standalone: true,
	imports: [NgForOf],
	templateUrl: './picker.component.html',
	styleUrls: ['./picker.component.scss']
})
export class PickerComponent {

	@Output() modelSelected = new EventEmitter<Pointcloud>();

	constructor(public pcs: PointcloudsService) {}

	onSelect(model: Pointcloud) {
		console.log('[Picker] Selected:', model.name);
		this.modelSelected.emit(model);
	}

	onSelectByEvent(event: Event) {
		const select = event.target as HTMLSelectElement;
		if (!select) return;
		const index = select.selectedIndex;
		const model = this.pcs.list[index];
		this.onSelect(model);
	}
}

