export default function getDistance(x, y) {
  'worklet'
  return Math.sqrt(x ** 2 + y ** 2)
}
