import type { axises } from "../global";

import {
  ballSize,
  ctx,
  map,
  maxLimitX,
  maxLimitY,
  minLimitX,
  minLimitY,
} from "../global";

import randSpeed from "../utils/randSpeed";
import randPos from "../utils/randPos";
import randDir from "../utils/randDir";

export default class BallConstructor {
  private id: number;
  private dir: axises;
  private pos: axises;
  private speed: axises;

  private static counter: number = 0;

  constructor() {
    this.id = BallConstructor.counter;

    // Ball Direction
    this.dir = {
      x: randDir(),
      y: randDir(),
    };

    // Random Position
    this.pos = {
      x: randPos("x"),
      y: randPos("y"),
    };

    // Random Speed
    this.speed = {
      x: randSpeed(),
      y: randSpeed(),
    };

    BallConstructor.counter++;
  }

  // Update Ball On Canvas
  public draw() {
    this.ballMove();
    this.ballMap();
    this.ballDraw();
  }

  // Draw Ball
  private ballDraw() {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, ballSize / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Move Ball
  private ballMove() {
    // limit
    if (minLimitX >= this.pos.x) this.dir.x = 1;
    if (maxLimitX <= this.pos.x) this.dir.x = -1;

    if (minLimitY >= this.pos.y) this.dir.y = 1;
    if (maxLimitY <= this.pos.y) this.dir.y = -1;

    this.pos.x += this.speed.x * this.dir.x;
    this.pos.y += this.speed.y * this.dir.y;

    // console.log(posX, posY, speedX, speedY);
  }

  // Ball On Map
  private ballMap() {
    map.set(this.id, { pos: this.pos });
  }
}
