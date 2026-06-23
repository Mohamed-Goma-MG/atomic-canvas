import { canvas, ctx } from "./global";
import ballsManager from "./scripts/ballsManager";
import mapTracker from "./scripts/mapTracker";

// fillStyle: Temporary Here Till Adding Control Feature Of Color
ctx.fillStyle = "black";

ballsManager.startup();
const ballsCalc = ballsManager.calc;
const mapTrackerCalc = mapTracker.calc;
const ballsDraw = ballsManager.draw;
const mapTrackerDraw = mapTracker.draw;

canvasDraw();
function canvasDraw() {
  // clear screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ballsCalc();
  mapTrackerCalc();
  ballsDraw();
  mapTrackerDraw();

  requestAnimationFrame(canvasDraw);
}
