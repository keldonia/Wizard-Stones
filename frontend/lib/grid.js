var Tile = require('./tile');

var Grid = function () {
  this.grid = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ];
};

Grid.prototype.addTile = function (tile) {
  this.grid[tile.x][tile.y] = tile;
};

Grid.prototype.deleteTile = function (tile) {
  this.grid[tile.x][tile.y] = 0;
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
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (that.grid[i][j] === 0) {
        availablePos.push([i,j]);
      }
    }
  }

  return availablePos;
};


module.exports = Grid;
