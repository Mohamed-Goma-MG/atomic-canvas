import type { direction } from "../global";

const directions: direction[] = [1, -1];

export default function randDir() {
  return directions[Math.round(Math.random())];
}
