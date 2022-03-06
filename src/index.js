module.exports = function towelSort(matrix) {

  let towelMatrix = [];

  for (let i = 0; i < matrix.length; i += 1) {

    if (!i % 2) {
      matrix[i].reverse();
    }

    towelMatrix = towelMatrix + matrix[i];

  }

  return towelMatrix;

}
