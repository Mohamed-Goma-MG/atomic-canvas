// ===== Variables ===== //
export const canvas = document.getElementById("canvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d")!;
export const margin = 20;

export const ballsNumber = 5;
export const ballSize = 40;
export const ballRadius = ballSize / 2;

export const minLimitX = ballRadius;
export const maxLimitX = canvas.width - ballRadius;

export const minLimitY = ballRadius;
export const maxLimitY = canvas.height - ballRadius;

export const speed = {
  min: 3,
  normal: 7,
  max: 6,
};

export const map = new Map<mapKeyType, mapValueType>();
export const distance = 100;

// ===== Types ===== //
export type axises = {
  x: number;
  y: number;
};

export type mapKeyType = number;
export type mapValueType = {
  pos: axises;
};
