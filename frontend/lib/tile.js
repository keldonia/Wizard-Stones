function Tile(pos, value) {
  this.x                  = pos.x;
  this.y                  = pos.y;
  this.value              = value || 2;
  this.previousPosition   = null;
  this.previous           = null;
}

Tile.prototype.savePosition = function () {
  this.priorPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (pos) {
  this.x = pos.x;
  this.y = pos.y;
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
