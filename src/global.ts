// ===== Variables ===== //
export const canvas = document.getElementById("canvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d")!;
export const margin = 20;

export const ballsNumber = 150;
export const ballSize = 10;
export const ballRadius = ballSize / 2;

export const minLimitX = ballRadius;
export const maxLimitX = canvas.width - ballRadius;

export const minLimitY = ballRadius;
export const maxLimitY = canvas.height - ballRadius;

export const speed = {
  min: 0.1,
  normal: 1,
  max: 1,
};

export const map = new Map<mapKeyType, mapValueType>();
export const distance = {
  min: 10,
  max: 150,
};

// ===== Types ===== //
export type axises = {
  x: number;
  y: number;
};

export type mapKeyType = number;
export type mapValueType = {
  pos: axises;
};
