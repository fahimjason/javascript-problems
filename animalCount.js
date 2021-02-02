function animalCounter(depth) {
    if (depth <= 10) {
        var animal = depth * 50;
    }
    else if (depth <= 20) {
        var firstPart = 10 * 50;
        var remaining = (depth - 10) * 100;
        var animal = firstPart + remaining;
    }
    else {
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = (depth - 20) * 300;
        var animal = firstPart + secondPart + remaining;
    }
    return animal;
}

console.log(animalCounter(5));