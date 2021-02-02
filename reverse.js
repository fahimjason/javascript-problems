function reverseString(word) {
    var reverse = "";
    for (i = 0; i < word.length; i++) {
        var char = word[i];
        reverse = char + reverse;
    }
    return reverse;
}

var speech = reverseString("Hello World! I am learning JavaScript now.");
console.log(speech);

