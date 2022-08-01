
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) return []
  if (matrix.length === 0) return []
  return matrix.flatMap((e, i) => i % 2 === 0 ? e : e.reverse())

  // return matrix.map((e, i) => i % 2 === 0 ? e : e.reverse()).flat()
  // return matrix.reduce((prev, curr, i) => prev.concat(i % 2 === 0 ? curr : curr.reverse()));
}
