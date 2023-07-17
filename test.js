/*var arr = [1, 2, 3, 4, 5];

var array = ["a", "b", "c", "d", "e"];/*copy*/

//var reversedArray = [];

//for(var i = array.length - 1; i >= 0; i--) {
 //   var valueAtIndex = array[i];
 //   reversedArray.push(valueAtIndex);

/*
for ( var i=0; i<(arr.length/2); i++) {
    if(array[i] == array[arr.length-1]){
    return true;
} else{
    return false;
    }
}


arr.reverse();
console.log(arr)
*/

//7/17/2023 Danielle, Austin, Chowdhury and Abel
// Dice Roller
// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

/*
function d6() {
    //var roll = Math.random(); 
    // your code here
    roll = Math.ceil(Math.random()*6);


    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

*/


//7/17/2023 Danielle, Austin, Chowdhury and Abel
// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by randomly choosing a response.
// the function should take in an array of strings and return a string

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getRandomString (array) {
    var min = 0;
    var max = array.length-1;

    var roll = Math.floor(Math.random()* (max-min)+min);

        console.log(array[roll]);

    

    

}

getRandomString(lifesAnswers);

