var GameUtils = {

  transform: function (matrix) {
    var newMatrix = [];
    for (var i = 0; i < matrix[0].length; i++) {
      var newRow = [];
      for (var j = 0; j < matrix.length; j++) {
        newRow.push(matrix[j][i]);
      }
      newMatrix.push(newRow);
    }

    return newMatrix;
  },

  combine: function (row, reversed) {
    var newCompositeRow = [];
    var score = 0;
    var length = row.length;
    for (var i = 0; i < length - 1; i++) {
      var abort = false;
      for (var k = i + 1; k < length && !abort; k++) {
        if (row[i] !== 0 && row[i] === row[k]) {
          newCompositeRow.push(row[i] * 2);
          score += row[i] * 2;
          row[i] = 0;
          row[k] = 0;
          abort = true;
        } else if (row[k] !== 0){
          abort = true;
        }
      }
      if (row[i] !== 0) {
        newCompositeRow.push(row[i]);
      }
    }
    newCompositeRow.push(row[length - 1]);

    var zeroFill = length - newCompositeRow.length;

    for (var j = 0; j < zeroFill; j++) {
      newCompositeRow.push(0);
    }

    return {
      row: newCompositeRow,
      score: score,
      reversed: reversed
    };
  }
};

module.exports = GameUtils;
