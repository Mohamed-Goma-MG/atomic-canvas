import { ballsNumber } from "../global";
import BallConstructor from "./ball";
("./ball");

export default function ballsManager() {
  const balls = new Set<{ draw: () => void }>();
  return {
    startup() {
      for (let i = 1; i <= ballsNumber; i++) {
        balls.add(new BallConstructor());
      }
    },

    draw() {
      balls.forEach((ball) => {
        ball.draw();
      });
    },
  };
}
