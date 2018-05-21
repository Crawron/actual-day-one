import { BoxBufferGeometry, Mesh, MeshLambertMaterial, Vector3 } from 'three'


export class Cube {
    mesh: Mesh
    offset: number

    constructor(position: Vector3, offset: number) {
        const geometry = new BoxBufferGeometry(1,1,1)
        const material = new MeshLambertMaterial({ color: randomColor() })

        this.mesh = new Mesh(geometry, material)
        this.mesh.position.set(position.x, position.y, position.z)

        this.offset = offset
    }

    update(t: number) {
        this.mesh.position.y = oscilate(t - this.offset)
    }
}

function oscilate(t: number) {
    const amplitude = 0.1
    const frequency = 0.03

    return Math.sin(t * frequency) * amplitude
}

function randomColor() {
    const hue = Math.random() * 360
    const saturation = Math.round(Math.random() * 10 + 50)
    const luminance = Math.round(Math.random() * 20 + 40)

    return `hsl(${hue}, ${saturation}%, ${luminance}%)`
}