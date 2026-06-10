import canvasBackground from "./scripts/canvasBackground";
import ballsManager from "./scripts/ballsManager";
import mapTracker from "./scripts/mapTracker";

const manager = ballsManager();

manager.startup();
draw();
function draw() {
  canvasBackground();
  manager.draw();
  mapTracker();
  requestAnimationFrame(draw);
}
