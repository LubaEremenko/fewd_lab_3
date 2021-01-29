const greet = function (){
    return 'Haydo!';
 };

 let salutation = greet;

 function echo (sound) {
     return sound;
 }

 function greet2(name) {
    return console.log('Hello ' + name + '!'); 
     
 }
 greet2("Mary");

 var whereIs = function(name1) {
     return "where is " + name1 + "?";
    
 }
var x = whereIs("Jacky");
console.log(x);

var hi = function(name2) {
    return "Hi " + name2 + "!";

};
var h1 = hi("Selva");
var h2 = hi("Pola");
var x = h1 + " " + h2;
console.log(x);

var double = function(name3) {
    return name3 + " and " + name3;

}
var x = double("Roy");
console.log(x);

function shout (world) {
    return world + world;
}
var x = shout("Fire");
console.log(x);

function doSomething (name4) {
    return name4;
}
var x = doSomething("Mary");
console.log(x);

function multiplyFive(number) {
    return number * 5;
}
var x = multiplyFive(17);
console.log(x);

function myFunction(alert) {
    return console.log(alert);

}
myFunction("Hello world!!!");

let isAnswerRight = true;
(isAnswerRight) ? console.log("The answer is right!") : console.log("The answer is wrong!");

function tellFortune (numChildren, partnerName, geoLoc, jobTitle) {

return "You will be a " + jobTitle + " in " + geoLoc + " and married to " + partnerName + " with " + numChildren + " kids.";
}
var x = tellFortune(7, "Ivan", "Dublin", "developer");
var y =  tellFortune(5, "Petr", "Los-Angeles", "QA");
var z = tellFortune(3, "Sean", "Berlin", "housewife");
var f =  tellFortune(2, "Romeo", "Rome", "artist");
console.log(x);
console.log(y);
console.log(z);
console.log(f);
