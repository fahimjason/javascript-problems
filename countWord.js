var word = "Hello World! I am learning JavaScript now."
var count = 0;
for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (char == " " && word[i - 1] != " ") {
        count++;
    }
}
count++;

console.log(count);