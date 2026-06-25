import { canvas, ctx, ballsNumber } from "./global";
import ballsManager from "./scripts/ballsManager";
import mapTracker from "./scripts/mapTracker";

// fillStyle: Temporary Here Till Adding Control Feature Of Color
ctx.fillStyle = "black";

ballsManager.startup();
const ballsCalc = ballsManager.calc;
const mapTrackerCalc = mapTracker.calc;
const ballsDraw = ballsManager.draw;
const mapTrackerDraw = mapTracker.draw;
const mapTrackerEnd = mapTracker.end;

canvasDraw();
function canvasDraw() {
  // clear screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  calc();
  draw();
  end();

  requestAnimationFrame(canvasDraw);
}

// Do All Required Calculations
function calc() {
  for (let i = 0; i < ballsNumber - 1; i++) {
    ballsCalc(i);
    mapTrackerCalc(i);
  }
}

// Do All Draws
function draw() {
  ballsDraw();
  mapTrackerDraw();
}

// Do What At The End
function end() {
  mapTrackerEnd();
}
