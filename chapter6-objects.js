'use strict';

let Vector = function(x, y) { 
    this._x = x;
    this._y = y;
};

Object.defineProperty(Vector.prototype, "x", { 
    get: function() { return this._x; },
    set: function(x) { this._x = x; }
});

Object.defineProperty(Vector.prototype, "y", { 
    get: function() { return this._y; },
    set: function(y) { this._y = y; }
});


Vector.prototype.plus = function(vector) {
    let x = this.x + vector.x;
    let y = this.y + vector.y;
    let sumVector = new Vector(x, y);
    
    return sumVector;
};

Vector.prototype.minus = function(vector) {
    let x = this.x - vector.x;
    let y = this.y - vector.y;
    let diffVector = new Vector(x, y);
    
    return diffVector;
};

Vector.prototype.distance = function() {
    let origin = new Vector(0, 0);
    let difference = this.minus(origin);
    
    let sum = Math.pow(difference.x, 2) + Math.pow(difference.y, 2);
    let result = Math.sqrt(sum);
    return result;
};

let StretchCell = function (inner, width, height) {
    this._inner = inner;
    this._width = width;
    this._height = height;
};
StretchCell.prototype.minWidth = function() {
  return Math.max(this._width, this._inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this._height, this._inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
  return this._inner.draw(width, height);
};

let ArraySeq = function(array) {
    this.pos = -1;
    this.array = array;
};

ArraySeq.prototype.next = function() {
    this.pos ++;
    if (this.pos < this.array.length) {
        return true;
    }
    return false;
};

ArraySeq.prototype.current = function() {
    return this.array[this.pos];
};

let RangeSeq = function(from, to) { 
    this.pos = from - 1;
    this.to = to;
};

RangeSeq.prototype.next = function() {
    if (this.pos < this.to){
        this.pos++;
        return true;
    }
    return false;
};

RangeSeq.prototype.current = function() {
    return this.pos;
};

function logFive(sequence) {
  let arr = [];
  for (var i = 0; i < 5; i++) {
    if (!sequence.next())
      break;
    arr.push(sequence.current());
  }
  return arr;
}

exports.Vector = Vector;
exports.StretchCell = StretchCell;
exports.RangeSeq = RangeSeq;
exports.ArraySeq = ArraySeq;
exports.logFive = logFive;