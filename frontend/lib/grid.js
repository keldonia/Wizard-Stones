var Tile = require('./tile');
var Utils = require('./utils');


var DIRECTIONS = {
  LEFT:   {transform: false, reverse: false},
  RIGHT:  {transform: false, reverse: true},
  UP:     {transform: true, reverse: false},
  DOWN:   {transform: true, reverse: true}
};

var Grid = function (x,y) {
  this.grid = this.blankGrid();
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

Grid.prototype.isWon = function () {
  return this.won;
};

Grid.prototype.isLost = function () {
  if (this.full()) {

  }
};

Grid.prototype.testDirection = function (direction) {
  var testMatrix = this.grid;
  if (direction.transform) {
    testMatrix = Utils.transform(testMatrix);
  }
};

Grid.prototype.values = function () {
  var values = this.blankGrid();
  for (var i = 0; i < this.grid[0].length; i++) {
    var rowValues = [];
    for (var j = 0; j < this.grid.length; j++) {
      rowValues(this.grid[i][j].value);
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
