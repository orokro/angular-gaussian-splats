/*
	header-bar.component.ts
	-----------------------

	Header Bar Component for our Application.
*/

// Angular Imports
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
	selector: 'app-header-bar',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './header-bar.component.html',
	styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent { }
