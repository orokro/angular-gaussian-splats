/*
	app.routes.ts
	-------------

	Sets up our SPA Routes.
*/

// Angular Imports
import { Routes } from '@angular/router';

// Component Imports
import { ViewerViewComponent } from './views/viewer/viewer.view';
import { AboutViewComponent } from './views/about/about.view';

// export our routes
export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'viewer' },
	{ path: 'viewer', component: ViewerViewComponent, title: 'Viewer' },
	{ path: 'about', component: AboutViewComponent, title: 'About' },
	{ path: '**', redirectTo: 'viewer' }
];
