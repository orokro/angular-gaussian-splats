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
		// {
		// 	name: 'Queens Roof',
		// 	path: '/assets/pointclouds/sample2.ply',
		// 	transform: {
		// 		position: { x: 1118, y: 1174, z: 596 },
		// 		rotation: { x: -2.1, y: -0.5, z: 0.55 },
		// 		scale: { x: 18.67, y: 18.67, z: 18.67 }
		// 	}
		// },
		{
			name: 'Queens Roof',
			path: '/assets/pointclouds/sample2.ply',
			transform: {
				// position: { x: -520, y: 820, z: -1150 },
				position: { x: -810, y: 640, z: -1460 },
				rotation: { x: Math.PI/2, y: Math.PI, z: 0 },
				scale: { x: 37, y: 37, z: 37 }
			}
		},
		{
			name: 'Cactus',
			path: '/assets/pointclouds/sample1.ply',
			transform: {
				position: { x: -0.2, y: 1.1, z: 0.3 },
				rotation: { x: Math.PI, y: 2.6915926535897947, z: 0 },
				scale: { x: 1, y: 1, z: 1 }
			}
		},
	];
}