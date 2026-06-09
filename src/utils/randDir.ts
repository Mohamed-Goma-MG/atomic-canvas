const directions = [1, -1];

export default function randDir() {
  return directions[Math.round(Math.random())];
}
