/*
	info-box-component.ts
	---------------------

	Component for displaying an informational box.
*/

// Angular Imports
import { Component, Input } from '@angular/core';


@Component({
	selector: 'app-info-box',
	standalone: true,
	templateUrl: './info-box.component.html',
	styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {
	@Input() title = '';
}
