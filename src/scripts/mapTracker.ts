import type { pos } from "../global";
import { minDistance, maxDistance, ctx, map, ballsNumber } from "../global";

let lines: {
  pos1: pos;
  pos2: pos;
  nearByPerc: number;
}[] = [];

// lineColor: Temporary Here Till Adding Control Feature Of Color
const lineColor = "68 68 68";

let pos1: pos, pos2: pos, diffDistance: number, j: number, linesNumber: number;

const mapTracker = {
  calc(i: number) {
    // Calculate Distance Between Balls
    j = i + 1;
    pos1 = map[i].pos;
    while (j < ballsNumber) {
      pos2 = map[j].pos;
      diffDistance = distanceBetween(pos1, pos2);
      if (diffDistance <= maxDistance)
        lines.push({
          pos1: pos1,
          pos2: pos2,
          nearByPerc:
            diffDistance <= minDistance ? 1 : 1 - diffDistance / maxDistance,
        });
      j++;
    }
  },

  draw() {
    // Draw Line Between Near Balls
    linesNumber = lines.length;
    for (let i = 0; i < linesNumber; i++) {
      var { pos1, pos2, nearByPerc } = lines[i];
      ctx.strokeStyle = `rgb(${lineColor} / ${nearByPerc})`;
      ctx.beginPath();
      ctx.moveTo(pos1.x, pos1.y);
      ctx.lineTo(pos2.x, pos2.y);
      ctx.stroke();
    }
  },

  end() {
    lines = [];
  },
};

function distanceBetween(pos1: pos, pos2: pos): number {
  return Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));
}

export default mapTracker;
