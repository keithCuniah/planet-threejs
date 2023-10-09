import { Scene, PerspectiveCamera, DirectionalLight } from "three";
import { CompoundGraphic } from "./image-editor/CompoundGraphic";
import { IGraphic } from "./image-editor/IGraphic";
import { Dot } from "./image-editor/Dot";

const starColor: string = "snow";
const lightColor = 0xffffff;

const minX: number = -10;
const maxX: number = 10;
const minY: number = -10;
const maxY: number = 10;
const positionZ: number = -15;

class ShapeScene extends Scene {
  private readonly all: CompoundGraphic = new CompoundGraphic();

  private readonly camera: PerspectiveCamera;

  constructor(camera: PerspectiveCamera) {
    super();
    this.camera = camera;
  }

  public load(): void {
    this.addStars();
  }

  public groupSelect(components: IGraphic[]): void {
    const group = new CompoundGraphic();

    components.forEach((component) => {
      group.add(component);
      this.all.remove(component);
    });
    this.all.add(group);
    this.all.move(0, 0, -2);
    this.all.addMeshToScene(this);

    // LIGHT
    const light = new DirectionalLight(lightColor, 1);
    light.position.set(1, 1, 5);
    this.add(light);
  }

  private addStars(): void {
    for (let x = minX; x < maxX; x++) {
      for (let y = minY; y < maxY; y++) {
        this.all.add(
          new Dot(
            getRandomBetween(maxX, minX),
            getRandomBetween(maxY, minY),
            positionZ,
            starColor
          )
        );
      }
    }
  }
}

const getRandomBetween = (max: number, min: number) => {
  return Math.random() * (max - min) + min;
};
export { ShapeScene };
