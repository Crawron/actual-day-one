import { Cube } from './Cube'
import { Vector3, Mesh } from 'three';


export class Grid {
    cubes = new Array

    constructor(widthRadius: number, heightRadius: number) {
        for (let i = -heightRadius; i < heightRadius; i++) {
            for (let j = -widthRadius; j < widthRadius; j++) {
                const position = new Vector3(j * 3, 0, i * 3)
                const offset = position.distanceTo(new Vector3) * 15
                const cube = new Cube(position, offset)
                
                this.cubes.push(cube)
            }
        }
    }

    get meshes(): Array<Mesh> {
        const meshes = new Array

        this.cubes.forEach(cube => {
            meshes.push(cube.mesh)
        })

        return meshes
    }

    update(t: number) {
        this.cubes.forEach(cube => cube.update(t))
    }
 }