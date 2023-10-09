import { Mesh, MeshStandardMaterial, Scene, SphereGeometry } from "three";
import {
  IGraphic,
  TPositionX,
  TPositionY,
  TPositionZ,
  TColor,
} from "./IGraphic";

class Dot extends Scene implements IGraphic {
  protected color: TColor;

  constructor(x: TPositionX, y: TPositionY, z: TPositionZ, color?: TColor) {
    super();
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
    this.color = color;
  }

  public move(x: TPositionX, y: TPositionY, z: TPositionZ): void {
    this.position.x += x;
    this.position.y += y;
    this.position.z += z;
  }

  public addMeshToScene(scene: Scene): void {
    const geometry = new SphereGeometry(0.02, 32, 32);

    const material = new MeshStandardMaterial({
      color: this.color,
    });
    const mesh = new Mesh(geometry, material);
    mesh.position.x = this.position.x;
    mesh.position.y = this.position.y;
    mesh.position.z = this.position.z;

    scene.add(mesh);
  }
}
export { Dot };
