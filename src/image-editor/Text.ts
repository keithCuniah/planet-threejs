import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TPositionX, TPositionY, TPositionZ } from "./IGraphic";
import { Mesh, MeshPhongMaterial, Scene } from "three";

type TText = string;
const fontPath: string = "./fonts/pixelify.json";
const textColor: string = "white";

const renderTextFor = (
  scene: Scene,
  text: TText,
  x: TPositionX,
  y: TPositionY,
  z: TPositionZ
) => {
  const loader = new FontLoader();
  loader.load(fontPath, function (font) {
    const geometry = new TextGeometry(text, {
      font: font,
      size: 3,
      height: 2,
    });
    const mesh = new Mesh(
      geometry,
      new MeshPhongMaterial({ color: textColor })
    );

    mesh.castShadow = true;
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    scene.add(mesh);
  });
};

export { renderTextFor };
