// Problem-1: Kilometer to meter convert

function kilometerToMeter(inputKilometer) {
    // Alert for negative, null or 0 values
    if (inputKilometer == 0 || inputKilometer == null || inputKilometer < 0) {
        return "Distance can't be negative, string 0 or null."
    }
    var distance = inputKilometer * 1000;  // For converting kilometer to meter
    return distance;
}

var mileAge = kilometerToMeter(7);
console.log(mileAge);



// Problem-2:. Budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    // Alert for negative, float, null values
    if (watch, mobile, laptop < 0) {
        return "Product quantity can't be negative."
    }
    if (watch, mobile, laptop == null) {
        return "Product quantity can't be null."
    }
    if (watch, mobile, laptop !== parseInt(watch, mobile, laptop)) {

    }

    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    var tolat = Math.abs(watchCost + mobileCost + laptopCost);  // Calculation of total product price
    return tolat;
}

var handWatch = 3;
var mobilePhone = 2;
var computer = 1;
console.log(budgetCalculator(3, 2, 1));


// Problem-3:. Hote Cost

function hotelCost(days) {
    if (days !== parseInt(days) || days < 1) {
        return "Days can't be float of less than 1";
    }
    if (days <= 10) {
        var hotelBill = days * 100;  // Hotel bill calculation for first 10 days
    }
    else if (days <= 20) {
        var firstPartDaysBill = 10 * 100;
        var remainingDaysBill = (days - 10) * 80;
        var hotelBill = firstPartDaysBill + remainingDaysBill;   // Hotel bill calculation for second 10 days
    }
    else {
        // Calculation of after 20 days
        var firstPartDaysBill = 10 * 100;
        var secondPartDaysBill = 10 * 80;
        var remainingDaysBill = (days - 20) * 50;
        var hotelBill = firstPartDaysBill + secondPartDaysBill + remainingDaysBill;  // Hotel bill calculation for after 20 days
    }
    return hotelBill;
}

var stayingDays = hotelCost(71);
console.log(stayingDays);




//Mega Friend Kamal Jamal Salam Borkot Rofiul


function megaFriend(frirndNames) {
    // Alert for null values
    if (frirndNames == null || frirndNames == parseInt(frirndNames)) {
        return "Please add some name and name can't be intiger."
    }

    let max = frirndNames[0].length;
    frirndNames.map(x => max = Math.max(max, x.length));
    result = frirndNames.filter(x => x.length == max);
    return result;
}

var names = ['Kamal', 'Jamal', 'Salam', 'Borkot', 'Rofiul'];
console.log(megaFriend(names))


