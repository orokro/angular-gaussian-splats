/*
	about.view.ts
	-------------

	Shows the About Page for our Application.
*/

// Angular Imports
import { Component } from '@angular/core';

// Component Imports
import { InfoBoxComponent } from '../../components/info-box/info-box.component';


@Component({
	selector: 'app-about-view',
	standalone: true,
	imports: [InfoBoxComponent],
	templateUrl: './about.view.html',
	styleUrl: './about.view.scss'
})
export class AboutViewComponent {
	links = {
		dev: [
			{ label: 'Website', href: 'http://gmiller.net' },
			{ label: 'GitHub', href: 'https://github.com/orokro' },
		],
		project: [
			{ label: 'Project GitHub', href: 'https://github.com/orokro/angular-gaussian-splats' }
		]
	};
}
