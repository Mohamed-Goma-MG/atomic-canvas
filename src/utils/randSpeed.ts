import { minSpeed, maxSpeed } from "../global";

export default function randSpeed() {
  const randSpeed = Math.ceil(Math.random() * maxSpeed);

  return randSpeed > minSpeed ? randSpeed : minSpeed;
}
