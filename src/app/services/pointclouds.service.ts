/*
	pointclouds.service.ts
	----------------------

	Service providing available point cloud files.
*/

// Angular Imports
import { Injectable } from '@angular/core';

// Define Pointcloud interface
export interface Pointcloud {
	name: string;
	path: string;
	transform: {
		position: { x: number; y: number; z: number };
		rotation: { x: number; y: number; z: number };
		scale: { x: number; y: number; z: number };
	};
}

@Injectable({ providedIn: 'root' })
export class PointcloudsService {

	public readonly list: Pointcloud[] = [		
		{
			name: 'Queens Roof',
			path: '/assets/pointclouds/sample2.ply',
			transform: {
				position: { x: 672, y: 317, z: 11 },
				rotation: { x: 0, y: Math.PI / 2, z: 0 },
				scale: { x: 20, y: 20, z: 20 }
			}
		},
		{
			name: 'Cactus',
			path: '/assets/pointclouds/sample1.ply',
			transform: {
				position: { x: 0, y: -0.3, z: 0 },
				rotation: { x: Math.PI, y: Math.PI, z: 0 },
				scale: { x: 1, y: 1, z: 1 }
			}
		},
	];
}