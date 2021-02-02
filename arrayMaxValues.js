var values = [80, 45, 54, 98, 94, 99, 35];
var max = values[0];

for (var i = 0; i < values.length; i++) {
    var element = values[i];
    if (element > max) {
        max = element;
    }
}

console.log("Height value is:", max);


// function megaFriend(friendNames) {
//     var nameLength = 0;
//     var largestName = friendNames[0].length;
//     for (var i = 0; i <= friendNames.length; i++) {
//         if (friendNames[i].length > nameLength) {
//             var nameLength = friendNames[i];
//             largestName = friendNames[i];
//         }
//     }
//     return largestName;
// }

// var names = ['Kamal', 'Jamal', 'Salam', 'Borkot', 'Rofiull'];
// console.log(megaFriend(names));