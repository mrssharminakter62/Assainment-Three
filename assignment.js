// https://github.com/mrssharminakter62/Assainment-Three/blob/main/assignment.js
//  Problem solving---one

function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}
// var walked = kilometerToMeter(5000);
// console.log(walked);

//   problem-------- (kilometerToMeter)

function kilometerToMeter(kilometer){
    if(typeof kilometer == "number"){
        if(kilometer < 0){
         return 'kilometer not'
        }
        else{
            var meter = kilometer /1000;
            return meter
        }
    }
}
// var walked =kilometerToMeter(50000);
// console.log(walked);

// Problem solving-----two(budgetCalculator)
function budgetCalculator(watch, mobile, laptop){
    if(typeof watch =='number' && typeof mobile =='number' && typeof laptop =='number'){
         var total =(watch * 50) + ( mobile * 100) +(laptop * 500);
          return total;
        }
        else{
            return "please enter value"
        }
       
   }
//    var total = budgetCalculator(10, 2, 5);
//    console.log(total);

// Problem solving---------Three(hotelCost)

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

