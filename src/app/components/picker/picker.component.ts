/*
	picker.component.ts
	-------------------

	Component for picking point cloud files.
*/

// Angular Imports
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
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
export class PickerComponent implements OnInit {

	@Output() modelSelected = new EventEmitter<Pointcloud>();

	constructor(public pcs: PointcloudsService) {}

	/**
	 * Lifecycle hook called after component initialization.
	 */
	ngOnInit() {

		if (this.pcs.list.length > 0) {
			const firstModel = this.pcs.list[0];

			// Defer to next microtask to avoid ExpressionChangedAfterItHasBeenCheckedError
			setTimeout(() => {
				// console.log('[Picker] Auto-loading first model:', firstModel.name);
				this.modelSelected.emit(firstModel);
			});
		}
	}


	/**
	 * Handles selection of a point cloud model.
	 */
	onSelect(model: Pointcloud) {
		// console.log('[Picker] Selected:', model);
		this.modelSelected.emit(model);
	}


	/**
	 * Handles selection change event from the UI.
	 * 
	 * @param event {Event} The selection change event.
	 * @returns 
	 */
	onSelectByEvent(event: Event) {

		const select = event.target as HTMLSelectElement;

		// gtfo if no select
		if (!select)
			return;

		const index = select.selectedIndex;
		const model = this.pcs.list[index];
		this.onSelect(model);
	}
}