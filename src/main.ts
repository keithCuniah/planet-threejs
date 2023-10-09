import { PerspectiveCamera, WebGL1Renderer } from "three";
import "./style.css";
import { ShapeScene } from "./ShapeScene";
import { Sphere } from "./image-editor/Sphere";
import { renderTextFor } from "./image-editor/Text";

const elementId: string = "app";
const sunImage: string = "sun.jpg";
const earthImage: string = "earth.jpg";
const moonImage: string = "moon.jpg";
const text: string = "COMPOSITE PATTERN";

// RENDERER AND CAMERA
const sizes: {
  width: typeof window.innerWidth;
  height: typeof window.innerWidth;
} = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const canvas = document.getElementById(elementId) as HTMLCanvasElement;
const renderer = new WebGL1Renderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

const mainCamera = new PerspectiveCamera(
  60,
  sizes.width / sizes.height,
  0.1,
  100
);

const scene = new ShapeScene(mainCamera);
scene.load();

const components = [
  new Sphere(0, -1, -4, 1, sunImage),
  new Sphere(0, 0.5, -2, 0.1, earthImage),
  new Sphere(0.2, 1, -2, 0.03, moonImage),
];
scene.groupSelect(components);

const loop = () => {
  renderTextFor(scene, text, -30, -50, -100);
  renderer.render(scene, mainCamera);
  window.requestAnimationFrame(loop);
};
loop();

window.addEventListener("resize", () => {
  // Updates sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  mainCamera.aspect = sizes.width / sizes.height;
  mainCamera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});
