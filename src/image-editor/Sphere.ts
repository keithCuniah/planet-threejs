import {
  Mesh,
  MeshStandardMaterial,
  Scene,
  SphereGeometry,
  TextureLoader,
} from "three";
import { Dot } from "./Dot";
import {
  TPositionX,
  TPositionY,
  TPositionZ,
  TMaterial,
  TColor,
} from "./IGraphic";

type TRadius = number;

class Sphere extends Dot {
  private readonly material: TMaterial;
  private readonly radius: TRadius;

  constructor(
    x: TPositionX,
    y: TPositionY,
    z: TPositionZ,
    radius: TRadius,
    material: TMaterial,
    color?: TColor
  ) {
    super(x, y, z, color);
    this.material = material;
    this.radius = radius;
  }

  addMeshToScene(scene: Scene): void {
    const geometry = new SphereGeometry(this.radius, 32, 32);

    const texture = new TextureLoader().load(this.material);
    const material = new MeshStandardMaterial({
      color: this.color,
      map: texture,
    });
    const mesh = new Mesh(geometry, material);

    mesh.position.x = this.position.x;
    mesh.position.y = this.position.y;
    mesh.position.z = this.position.z;

    scene.add(mesh);
  }
}

export { Sphere };
