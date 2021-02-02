//Swap variable
var a = 5;
var b = 7;

var temp = a;
a = b;
b = temp;

console.log("After swap a:", a, "and b:", b);


// swap without temp
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;

console.log("After swap x:", x, "and y:", y);


//destructing
var p = 5;
var q = 7;
[p, q] = [q, p]

console.log("After swap p:", p, "and q:", q);

