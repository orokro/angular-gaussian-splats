/*
	app.component.ts
	----------------

	Root Component for our Application.
*/

// Angular Imports
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Component Imports
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderBarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent { }
