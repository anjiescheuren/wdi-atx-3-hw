function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() {
  if (this.length === this.width) {
    return true;
  }
  return false;
};

Rectangle.prototype.area =  function() {
	// Your code goes here
  return (this.length * this.width);
};

Rectangle.prototype.perimeter = function() {
  return (this.length + this.width);
}

var a = new Rectangle(3,4);
console.log(a.isSquare());
var b = new Rectangle(3,5);
console.log(b.area());
var c = new Rectangle(4,5);
console.log(c.perimeter());


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
  if (this.sideA === this.sideB && this.sideB === this.sideC) {
    return true;
  }
  return false;
}

Triangle.prototype.isIsosceles = function() {
  if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
    return true;
  }
  return false;
}

Triangle.prototype.area = function() {
	// Your code goes here
  return (Math.pow(this.sideA, 2) + (Math.pow(this.sideB, 2)) + (Math.pow(this.sideC, 2)));
};

Triangle.prototype.isObtuse = function() {
  var c = (Math.pow(this.sideC, 2));
  var b = (Math.pow(this.sideB, 2));
  var a = (Math.pow(this.sideA, 2));
  if (a > (b + c) || b > (a + c) || c > (a + b)) {
    return true;
  }
  return false;
}

var d = new Triangle(4,4,4);
console.log(d.isEquilateral());

var e = new Triangle(3,3,4);
console.log(e.isIsosceles());

var f = new Triangle(2,2,4);
console.log(f.area());

var g = new Triangle(6,8,11);
console.log(g.isObtuse());

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype.length = function(){
	// Your code goes here
  //square root of ((x1 - x2)squared+(y1 -y2)squared)
  var x = (this.x1 - this.x2);
  var y = (this.y1 - this.y2);
  x = (Math.pow(x,2));
  y = (Math.pow(y,2));
  return (Math.sqrt(x + y));
};

var h = new LineSegment(-2,8,-7,-5);
console.log(h.length());








