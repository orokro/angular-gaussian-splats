/*
	app.config.ts
	-------------

	Sets up our Application Configuration.
*/

// Angular Imports
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

// Route Imports
import { routes } from './app.routes';

// export our application config
export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }))
	]
};
