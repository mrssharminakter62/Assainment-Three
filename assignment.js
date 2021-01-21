//  Problem solving---one

function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}
// var walked = kilometerToMeter(5000);
// console.log(walked);

// Problem solving-----two






// Problem solving---------Three

function hotelCost(night) {
    var rent = 0;
    if(night <= 10){
        rent = night * 100;
    }
    else if(night <= 20){
        var firstTenNight = 10 * 100;
        var remaining = night - 10;
        var secondTenNight = remaining * 80;
        rent = firstTenNight + secondTenNight;
    }
    else{
        var firstTenNight = 10 * 100;
        var secondTenNight = 10 * 80;
        var remaining = night - 20;
        var thirdAnyNight = remaining * 50;
        rent = firstTenNight + secondTenNight + thirdAnyNight;
    }
    return rent;
}
// var total =hotelCost(27);
// console.log(total);


//  Problem solving----Four

var megaFriend = ["Mari", "Popy",  "Mim", "Sharmin", "Rosa"]
var max = megaFriend [0];
for(var i = 0; i < megaFriend.length; i++){
    var bigName = megaFriend [i];
    if(bigName > max){
        max = bigName;
    }
}
//  console.log(max);

