import { ctx, map } from "../global";
import { distance } from "../global";
import type { axises } from "../global";

export default function mapTracker() {
  map.forEach((ball) => {
    const { pos: pos1 } = ball;

    map.forEach((ball) => {
      const { pos: pos2 } = ball;
      if (distanceBetween(pos1, pos2) <= distance) {
        ctx.beginPath();
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        ctx.stroke();
      }
    });
  });
}

function distanceBetween(pos1: axises, pos2: axises): number {
  const axisX = pos2.x - pos1.x;
  const axisY = pos2.y - pos1.y;
  return Math.sqrt(Math.pow(axisX, 2) + Math.pow(axisY, 2));
}
