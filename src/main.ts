import { JSONLoader, MeshLambertMaterial, Mesh, LoadingManager, Scene, Geometry } from "three"

import { hemisphereLight } from "./Lighting"
import { mainCamera } from "./Camera"
import { renderer } from "./Renderer"

import { Grid } from './Classes/Grid'


const mainScene = new Scene
const grid = new Grid(11, 11)

function loadScene() {
	// Lighting
	mainScene.add(hemisphereLight)

	// Meshes
	grid.meshes.forEach(mesh => mainScene.add(mesh))
}

function init() {
	loadScene()
	animate()
}


function animate() {
	const frame = requestAnimationFrame(animate)

	grid.update(frame)
	renderer.render(mainScene, mainCamera)
}

init()