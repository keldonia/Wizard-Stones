var Utils = require('./utils');
var Grid = require('./grid');
var Tile = require('./tile');

var Game = function () {
  this.grid = new Grid();

};

Game.prototype.setUp = function () {
  var startPieces = this.randomPieces(2, this.grid);
  debugger
  for (var i = 0; i < startPieces.length; i++) {
    this.grid.addTile(startPieces[i]);
  }
};


Game.prototype.randomPieces = function (numPieces, grid) {
  var availablePositions = this.grid.availablePositions(grid);
  var newRandomPieces = [];

  if (availablePositions.length > 0) {
    var pos = this.grid.randomAvailablePosition(availablePositions);

    newRandomPieces.push(new Tile({
      pos: {x: pos[0], y: pos[1]},
      value: this.randomPieceValue()
    }));
    availablePositions.splice(pos,1);

    if (numPieces > 1 && availablePositions.length > 0) {
      pos = this.grid.randomAvailablePosition(availablePositions);
      newRandomPieces.push(new Tile({
        pos: {x: pos[0], y: pos[1]},
        value: this.randomPieceValue()
      }));
    }
  }

  return newRandomPieces;
};

Game.prototype.randomPieceValue = function () {
  return Math.random() < 0.9 ? 2 : 4;
};



module.exports = Game;
