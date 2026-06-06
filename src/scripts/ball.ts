import {
  ballSize,
  ctx,
  maxLimitX,
  maxLimitY,
  minLimitX,
  minLimitY,
  directions,
} from "../global";

import randSpeed from "../utils/randSpeed";
import randPos from "../utils/randPos";

// Ball Direction
let dx = directions[Math.round(Math.random())];
let dy = directions[Math.round(Math.random())];

// Random Position
let posX = randPos("x");
let posY = randPos("y");

// Random Speed
let speedX = randSpeed();
let speedY = randSpeed();

export default function ball() {
  ballMove();
  ballDraw();
}

// Move Ball
function ballMove() {
  // limit

  if (minLimitX >= posX) dx = 1;
  if (maxLimitX <= posX) dx = -1;

  if (minLimitY >= posY) dy = 1;
  if (maxLimitY <= posY) dy = -1;

  posX += speedX * dx;
  posY += speedY * dy;

  // console.log(posX, posY, speedX, speedY);
}

// Draw Ball
function ballDraw() {
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(posX, posY, ballSize / 2, 0, Math.PI * 2);
  ctx.fill();
}
