import { speed } from "../global";

export default function randSpeed() {
  const randSpeed = Math.ceil(Math.random() * speed.max);

  return randSpeed > speed.min ? randSpeed : speed.min;
}
