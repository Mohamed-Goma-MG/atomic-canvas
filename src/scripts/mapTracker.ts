import type { pos } from "../global";
import { minDistance, maxDistance, ctx, map, ballsNumber } from "../global";

let lines: {
  pos1: pos;
  pos2: pos;
  nearByPerc: number;
}[] = [];

// lineColor: Temporary Here Till Adding Control Feature Of Color
const lineColor = "68 68 68";

const mapTracker = {
  calc() {
    // Calculate Distance Between Balls
    for (let i = 0; i < ballsNumber - 1; i++) {
      var j = i + 1;
      let pos1 = map[i].pos;
      while (j < ballsNumber) {
        let pos2 = map[j].pos;
        const diffDistance = distanceBetween(pos1, pos2);
        if (diffDistance <= maxDistance)
          lines.push({
            pos1: pos1,
            pos2: pos2,
            nearByPerc:
              diffDistance <= minDistance ? 1 : 1 - diffDistance / maxDistance,
          });
        j++;
      }
    }
  },

  draw() {
    // Draw Line Between Near Balls
    let linesNumber = lines.length;
    for (let i = 0; i < linesNumber; i++) {
      var { pos1, pos2, nearByPerc } = lines[i];
      ctx.strokeStyle = `rgb(${lineColor} / ${nearByPerc})`;
      ctx.beginPath();
      ctx.moveTo(pos1.x, pos1.y);
      ctx.lineTo(pos2.x, pos2.y);
      ctx.stroke();
    }

    lines = [];
  },
};

function distanceBetween(pos1: pos, pos2: pos): number {
  const axisX = pos2.x - pos1.x;
  const axisY = pos2.y - pos1.y;
  return Math.sqrt(Math.pow(axisX, 2) + Math.pow(axisY, 2));
}

export default mapTracker;
