var Tile = require('./tile');
var Utils = require('./utils');
var GameConstants = ('./constants');

var Grid = function (x,y) {
  this.grid = this.blankGrid(x,y);
  this.won = false;
};

Grid.prototype.blankGrid = function (x,y) {
  var blankGrid = [];
  for (var i = 0; i < x; i++) {
    var newRow = [];
    for (var j = 0; j < y; j++) {
      newRow.push(0);
    }
    blankGrid.push(newRow);
  }
  return blankGrid;
};

Grid.prototype.addTile = function (tile) {
  this.grid[tile.x][tile.y] = tile;
  if (tile.value === 2048) {
    this.won = true;
  }
};

Grid.prototype.deleteTile = function (tile) {
  this.grid[tile.x][tile.y] = 0;
};

Grid.prototype.move = function (direction) {
  if (this.testDirection(direction)) {
    var moveResults = [];
    var testMatrix = this.directionFlip(this.grid, direction);
    var score = 0;

    var results = testMatrix.map( function(row) {
      return Utils.combine(row, direction.reversed);
    });
    results.forEach( function (returnObj) {
      score += returnObj.score;
      moveResults.push(returnObj.row);
    });

    var returnMatrix = this.directionFlip(moveResults, direction);

    for (var i = 0; i < returnMatrix[0].length; i++) {
      for (var j = 0; j < returnMatrix.length; j++) {
        var currentTile = returnMatrix[i][j];
        if (currentTile) {
          currentTile.savePosition();
          currentTile.updatePosition( { x: i, y: j } );
        }
      }
    }

    this.grid = returnMatrix;
    return score;
  }
};


Grid.prototype.isWon = function () {
  return this.won;
};

Grid.prototype.isLost = function () {
  if (this.full()) {
    if (this.posDirections.includes(false)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

Grid.prototype.posDirections = function () {
  var posDirections = GameConstants.map( function(direction) {
    return this.testDirection(direction);
  }, this);

  return posDirections;
};

Grid.prototype.testDirection = function (direction) {
  var testMatrix = this.directionFlip(this.grid, direction);

  for (var j = 0; j < testMatrix.length; j++) {
    var attemptedCombine = Utils.combine(testMatrix[j], direction.reversed);
    if (attemptedCombine.row.includes(0)) {
      return true;
    }
  }

  return false;
};

Grid.prototype.directionFlip = function (grid, direction) {
  var testMatrix = grid;
  if (direction.transform) {
    testMatrix = Utils.transform(testMatrix);
  }
  if (direction.reversed) {
    var reversedMatrix = [];

    for (var i = 0; i < testMatrix.length; i++) {
      reversedMatrix.push(testMatrix[i].reverse());
    }

    testMatrix = reversedMatrix;
  }

  return testMatrix;
};

Grid.prototype.values = function () {
  var values = this.blankGrid();
  for (var i = 0; i < this.grid[0].length; i++) {
    var rowValues = [];
    for (var j = 0; j < this.grid.length; j++) {
      if (this.grid[i][j] !== 0) {
        rowValues(this.grid[i][j].value);
      }
    }
    values.push(rowValues);
  }

  return values;
};

Grid.prototype.full = function () {
  if (this.positionsAvailable().length < 1) {
    return true;
  } else {
    return false;
  }
};

Grid.prototype.randomAvailablePosition = function (availablePositions) {
  return availablePositions[Math.floor(Math.random() * availablePositions.length)];
};

Grid.prototype.positionsAvailable = function () {
  if (this.availablePositions(this.grid).length === 0) {
    return true;
  } else {
    return false;
  }
};

Grid.prototype.availablePositions = function () {
  var availablePos = [];
  var that = this;
  var xlen = this.grid[0].length;
  var ylen = this.grid.length;

  for (var i = 0; i < xlen; i++) {
    for (var j = 0; j < ylen; j++) {
      if (that.grid[i][j] === 0) {
        availablePos.push([i,j]);
      }
    }
  }

  return availablePos;
};

module.exports = Grid;
