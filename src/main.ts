/*
	main.ts
	-------

	JavaScript entry point for the application.
*/

// Angular Imports
import { bootstrapApplication } from '@angular/platform-browser';

// Component Imports
import { AppComponent } from './app/app.component';

// App Config Imports
import { appConfig } from './app/app.config';

// bootstrap the application (i.e. mount it to the DOM)
bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
