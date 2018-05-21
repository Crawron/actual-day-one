import { BoxBufferGeometry, Mesh, MeshLambertMaterial } from 'three'


export class Cube {
    mesh: Mesh

    constructor() {
        const geometry = new BoxBufferGeometry(1,1,1)
        const material = new MeshLambertMaterial({ color: "red" })
        this.mesh = new Mesh(geometry, material)
    }

    update() {
        
    }
}