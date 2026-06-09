import canvasBackground from "./scripts/canvasBackground";
import BallConstructor from "./scripts/ball";

const ball = new BallConstructor();

draw();
function draw() {
  canvasBackground();
  ball.draw();
  requestAnimationFrame(draw);
}
