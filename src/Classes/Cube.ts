import { BoxBufferGeometry, Mesh, MeshLambertMaterial } from 'three'


export class Cube {
    mesh: Mesh

    constructor() {
        const geometry = new BoxBufferGeometry(1,1,1)
        const material = new MeshLambertMaterial({ color: "red" })
        this.mesh = new Mesh(geometry, material)
    }

    update(t: number) {
        this.mesh.position.y = oscilate(t)
    }
}

function oscilate(t: number) {
    const amplitude = 0.2
    const frequency = 0.07

    return Math.sin(t * frequency) * amplitude
}