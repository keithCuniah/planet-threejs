import { Scene } from "three";
import { IGraphic, TPositionX, TPositionY, TPositionZ } from "./IGraphic";

class CompoundGraphic implements IGraphic {
  private children: IGraphic[] = [];

  public add(child: IGraphic) {
    this.children.push(child);
  }

  public remove(child: IGraphic) {
    this.children = this.children.filter((graphic) => graphic !== child);
  }

  move(x: TPositionX, y: TPositionY, z: TPositionZ): void {
    this.children.forEach((child) => child.move(x, y, z));
  }

  addMeshToScene(scene: Scene) {
    this.children.forEach((child) => child.addMeshToScene(scene));
  }
}
export { CompoundGraphic };
