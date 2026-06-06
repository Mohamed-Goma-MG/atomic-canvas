export const canvas = document.getElementById("canvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d")!;
export const margin = 20;

export const directions = [1, -1];

export const ballsNumber = 5;
export const ballSize = 40;
export const ballRadius = ballSize / 2;

export const minLimitX = ballRadius;
export const maxLimitX = canvas.width - ballRadius;

export const minLimitY = ballRadius;
export const maxLimitY = canvas.height - ballRadius;

export const map = new Map();

export const speed = {
  min: 3,
  normal: 7,
  max: 6,
};
