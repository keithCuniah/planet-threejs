import { Scene } from "three";

type TScene = typeof Scene;
type TPositionX = number;
type TPositionY = number;
type TPositionZ = number;
type TMaterial = string;
type TColor = string | undefined;

interface IGraphic {
  move(x: TPositionX, y: TPositionY, z: TPositionZ): void;
  addMeshToScene(scene: Scene): void;
}

export type {
  IGraphic,
  TPositionX,
  TPositionY,
  TPositionZ,
  TScene,
  TMaterial,
  TColor,
};
