
function arraySum(n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        var element = n[i];
        sum = sum + element;
    }
    return sum;
}

var values = arraySum([80, 45, 54, 98, 94, 99, 35]);
console.log("The sumation is:", values);


