import { canvas, ctx } from "./global";
import ballsManager from "./scripts/ballsManager";
import mapTracker from "./scripts/mapTracker";

const manager = ballsManager();

manager.startup();
draw();
function draw() {
  // clear screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  mapTracker();
  manager.draw();

  requestAnimationFrame(draw);
}
