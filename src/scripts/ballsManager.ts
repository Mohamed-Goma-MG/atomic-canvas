import randSpeed from "../utils/randSpeed";
import randPos from "../utils/randPos";
import randDir from "../utils/randDir";

import {
  ballSize,
  ctx,
  ballsNumber,
  map,
  maxLimitX,
  maxLimitY,
  minLimitX,
  minLimitY,
} from "../global";

const ballsManager = {
  startup() {
    for (let i = 0; i < ballsNumber; i++) {
      map[i] = {
        // Ball Direction
        dir: {
          x: randDir(),
          y: randDir(),
        },

        // Random Position
        pos: {
          x: randPos("x"),
          y: randPos("y"),
        },

        // Random Speed
        speed: {
          x: randSpeed(),
          y: randSpeed(),
        },
      };
    }
  },

  calc(id: number) {
    // Move Ball
    const ball = map[id];

    if (minLimitX >= ball.pos.x) ball.dir.x = 1;
    if (maxLimitX <= ball.pos.x) ball.dir.x = -1;

    if (minLimitY >= ball.pos.y) ball.dir.y = 1;
    if (maxLimitY <= ball.pos.y) ball.dir.y = -1;

    ball.pos.x += ball.speed.x * ball.dir.x;
    ball.pos.y += ball.speed.y * ball.dir.y;
  },

  // Draw Ball
  draw() {
    ctx.beginPath();

    for (let id = 0; id < ballsNumber; id++) {
      const ball = map[id];
      ctx.moveTo(ball.pos.x, ball.pos.y);
      ctx.arc(ball.pos.x, ball.pos.y, ballSize / 2, 0, Math.PI * 2);
    }

    ctx.fill();
  },
};

export default ballsManager;
