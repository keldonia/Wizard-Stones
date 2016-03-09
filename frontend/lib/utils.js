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
    var moveRow = row.slice();
    var score = 0;
    var length = moveRow.length;
    var combined = [];
    for (var i = 0; i < length - 1; i++) {
      var abort = false;
      for (var k = i + 1; k < length && !abort; k++) {
        if (moveRow[i] !== 0 && moveRow[i] === moveRow[k]) {
          newCompositeRow.push(moveRow[i] * 2);
          score += moveRow[i] * 2;
          moveRow[i] = 0;
          moveRow[k] = 0;
          combined.push(i).push(k);
          abort = true;
        } else if (moveRow[k] !== 0){
          abort = true;
        }
      }
      if (moveRow[i] !== 0) {
        newCompositeRow.push(moveRow[i]);
      }
    }
    newCompositeRow.push(moveRow[length - 1]);

    var zeroFill = length - newCompositeRow.length;

    for (var j = 0; j < zeroFill; j++) {
      newCompositeRow.push(0);
    }

    return {
      row: newCompositeRow,
      score: score,
      reversed: reversed,
      combinedTiles: combined
    };
  }
};

module.exports = GameUtils;
