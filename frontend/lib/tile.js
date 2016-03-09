function Tile(tileObj) {
  this.x                = tileObj.pos.x;
  this.y                = tileObj.pos.y;
  this.value            = tileObj.value;
  this.priorPosition    = null;
  this.combinedTilePos  = null;
}

Tile.prototype.savePosition = function () {
  this.priorPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (pos) {
  this.x = pos.x;
  this.y = pos.y;
};

Tile.prototype.combinedTile = function (pos) {
  this.combinedTile = pos;
};

Tile.prototype.serialize = function () {
  return {
    pos: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

module.exports = Tile;
