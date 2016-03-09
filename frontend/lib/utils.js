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
  // transform is an optional argument
  combine: function (row, reversed, transformed) {
    var newCompositeRow = [];
    var moveRow = row.slice();
    var score = 0;
    var length = moveRow.length;
    if (reversed && transformed) {
      moveRow.reverse();
    }
    for (var i = 0; i < length - 1; i++) {
      if (moveRow[i] !== 0) {
        var abort = false;
        for (var k = i + 1; k < length && !abort; k++) {
          if (moveRow[i] !== 0 && moveRow[k] !== 0 && moveRow[i].value === moveRow[k].value) {
            newCompositeRow.push(moveRow[i]);
            var upgradedTile = newCompositeRow[newCompositeRow.length - 1];
            upgradedTile.value = moveRow[i].value * 2;
            // upgradedTile.combinedTile({ x: moveRow[k].x, y: moveRow[k].y } );
            score += moveRow[i].value;
            moveRow[i] = 0;
            moveRow[k] = 0;
            abort = true;
          } else if (moveRow[k] !== 0){
            abort = true;
          }
        }
      }
      if (moveRow[i] !== 0) {
        newCompositeRow.push(moveRow[i]);
      }
    }
    if (moveRow[length -1 ]) newCompositeRow.push(moveRow[length - 1]);


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
