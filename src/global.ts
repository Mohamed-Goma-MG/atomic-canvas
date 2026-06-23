// ===== Variables ===== //
export const canvas = document.getElementById("canvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d")!;
export const margin = 20;

export const ballsNumber = 150;
export const ballSize = 6;
export const ballRadius = ballSize / 2;

export const minLimitX = ballRadius;
export const maxLimitX = canvas.width - ballRadius;

export const minLimitY = ballRadius;
export const maxLimitY = canvas.height - ballRadius;

export const minSpeed = 0.1;
export const maxSpeed = 1;

export const maxDistance = 150;
export const minDistance = 10;

export const map: ballProps[] = [];

// ===== Types ===== //
export type axises<T> = {
  x: T;
  y: T;
};

export type pos = axises<number>;

export type direction = 1 | -1;

export type ballProps = {
  pos: pos;
  dir: axises<direction>;
  speed: axises<number>;
};
