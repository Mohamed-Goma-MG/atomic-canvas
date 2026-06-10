import { ctx, map } from "../global";
import { distance } from "../global";

export default function mapTracker() {
  map.forEach((ball) => {
    const { pos: pos1 } = ball;

    map.forEach((ball) => {
      const { pos: pos2 } = ball;
      // if (Math.abs(pos1.x - pos2.x) <= 50 || Math.abs(pos1.y - pos2.y) <= 50) {
      if (distanceBetween(pos1, pos2) <= distance) {
        ctx.beginPath();
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        ctx.stroke();
      }
    });
  });
}

function distanceBetween(pos1, pos2): number {
  const axisX = pos2.x - pos1.x;
  const axisY = pos2.y - pos1.y;
  return Math.sqrt(Math.pow(axisX, 2) + Math.pow(axisY, 2));
}
