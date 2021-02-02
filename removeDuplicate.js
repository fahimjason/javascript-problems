var number = [2, 3, 4, 3, 1, 2, 3];
var unique = [];

for (var i = 0; i < number.length; i++) {
    var element = number[i];
    var index = unique.indexOf(element);
    if (index == -1) {
        unique.push(element);
    }
}

console.log(unique);

