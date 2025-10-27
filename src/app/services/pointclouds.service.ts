/*
	pointclouds.service.ts
	----------------------

	Service providing available point cloud files.
*/

// Angular Imports
import { Injectable } from '@angular/core';

// Ply Item Interface
export interface PlyItem { label: string; path: string; }


@Injectable({ providedIn: 'root' })
export class PointcloudsService {
	readonly items: PlyItem[] = [
		{ label: 'Sample 1', path: 'assets/pointclouds/sample1.ply' },
		{ label: 'Sample 2', path: 'assets/pointclouds/sample2.ply' }
	];
}
