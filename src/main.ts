import { JSONLoader, MeshLambertMaterial, Mesh, LoadingManager, Scene, Geometry } from "three"

import { hemisphereLight } from "./Lighting"
import { mainCamera } from "./Camera"
import { renderer } from "./Renderer"

import { Cube } from './Cube'


const mainScene = new Scene
const cube = new Cube

function loadScene() {
	// Lighting
	mainScene.add(hemisphereLight)

	// Meshes
	mainScene.add(cube.mesh)
}

function init() {
	loadScene()
	animate()
}


function animate() {
	requestAnimationFrame(animate)

	cube.update()
	
	renderer.render(mainScene, mainCamera)
}

init()