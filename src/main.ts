import canvasBackground from "./scripts/canvasBackground";
import ballsManager from "./scripts/ballsManager";

const manager = ballsManager();

manager.startup();
draw();
function draw() {
  canvasBackground();
  manager.draw();
  requestAnimationFrame(draw);
}
