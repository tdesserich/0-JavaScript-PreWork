//a simple function
function hello() {
    console.log("Hello World!");
}
//the () "call" the function

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();//prints same things 5 more times

function numberEntered(x){
    console.log("The number you entered was: ", x);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);//prints each number


function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);//9
addAnyTwoNumbers(6, 11);//17
addAnyTwoNumbers(7, 8);//15

//Declare it
function subtractAnyTwoNumbers(numberOne, numberTwo) {
    console.log(numberOne - numberTwo);
}

//Call it
subtractAnyTwoNumbers(21, 15);

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    console.log(total);
    return total; 
}

getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);

function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(1, 1);


function fullName(first, last){
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}

fullName("Tracy", "Desserich");


function petNameAndBreed(name, breed){
    var petDetails = name + ", " + breed;
    console.log(petDetails);
    return petDetails;
}
petNameAndBreed("Leia", "Sugar Glider");


function calculatePriceIndiana(quantity, price){
    var tax = 0.07;
    var totalTax = quantity * price * tax;
    var totalPrice = totalTax + quantity * price;
    console.log(totalPrice);
    return totalPrice;
}

calculatePriceIndiana(17, 5);