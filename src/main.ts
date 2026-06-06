import ball from "./scripts/ball";
import canvasBackground from "./scripts/canvasBackground";

draw();
function draw() {
  canvasBackground();
  ball();
  requestAnimationFrame(draw);
}
