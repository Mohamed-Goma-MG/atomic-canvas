import { ballSize, canvas, margin } from "../global";

export default function randPos(axis: "x" | "y") {
  const radius = ballSize / 2;
  const limit = axis == "x" ? canvas.width : canvas.height;
  const minLimit = radius + margin;
  const maxLimit = limit - radius - margin;
  const pos = Math.floor(Math.random() * maxLimit);
  return pos < minLimit ? minLimit : pos;
}
