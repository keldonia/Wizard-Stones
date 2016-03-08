var Utils = require('./utils');

var Game = function () {
  this.grid = this.newGrid();

};

Game.prototype.setUp = function (grid) {
  var startPieces = this.randomPieces(2, grid);

};


Game.prototype.newGrid = function () {
  return [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ];
};

Game.prototype.randomPieces = function (numPieces, grid) {
  var availablePositions = this.availablePositions(grid);
  var newRandomPieces = [];

  var pos = this.randomPos(availablePositions);

  newRandomPieces.push({ position: availablePositions[pos], value: this.randomValue() });

  if (numPieces > 1) {

  }
};

Game.prototype.randomPos = function (availablePositions) {
  return availablePositions[Math.floor(Math.random() * availablePositions.length)];
};

Game.prototype.randomValue = function () {

};

Game.prototype.positionsAvailable = function (grid) {
  if (this.availablePositions(grid).length === 0) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.availablePositions = function (grid) {
  var availablePos = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (grid[i][j] === 0) {
        availablePos.push(grid[i][j]);
      }
    }
  }

  return availablePos;
};


module.exports = Game;
