a = 50;
b = 40;
c = 30;

if (a > b) {
    if (a > c) {
        console.log("A is the bigger number");
    }
    else {
        console.log("B is the bigger number");
    }
}
else {
    if (b > c) {
        console.log("B is the bigger number");
    }
    else {
        console.log("C is the bigger number");
    }
}

var max = Math.max(a, b, c);
console.log(max);