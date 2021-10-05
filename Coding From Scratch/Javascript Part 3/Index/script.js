//FUNCTIONS 
/*function multiplyNumbers(firstNumber, secondNumber) { //Parameters to pass arguments to
   var result = firstNumber * secondNumber; //instuction for code to execute - set to a variable in this example
    return result; //return the value of the executed code
}
//functions a block of code that performs a task, waiting to be invoked by passing defining its parameters
var multiplyResult = multiplyNumbers(6, 7); //calling or invoking the function, define a variable that passes arguments to the function
console.log(multiplyResult); //reports function's end result to the console

function calculateNumbers() {
    var number1 = 10;
    var number2 = 6;
    var number3 = number1 + number2;

    if (number3 >= 10) {
        alert("Big Number!");
    }
    else {
        alert(" Small Number.");
    }
}
calculateNumbers();

function loopingThroughArray(nameArray) {
    for (var i = 0; i < nameArray.length; i++) {
        alert("I admire " + nameArray[i]); 
    }
}
var names = ["Henry", "Sam", "Michelle", "Jake"];
loopingThroughArray(names);

function loopThroughArray() {
    var namesInArray = ["Henry", "Sam", "Michelle", "Jake"];
    for (var i = 0; i < namesInArray.length; i++) {
        if (namesInArray[i] === "Henry") {
            console.log("Henry is a swell guy.");
        }
        else if (namesInArray[i] === "Sam") {
            console.log("Sam has been great to have around");
        }
        else if (namesInArray[i] === "Michelle") {
            console.log("Michelle and I are getting married!");
        }
        else if (namesInArray[i] === "Jake") {
            console.log("Jake now goes by 'Jake The Snake'");
        }
    }
    return "The array has been cycled through!"
}
var result = loopThroughArray();
alert(result);

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
var addResult = fullName("John", "Wayne");
alert(addResult);

function addNumbers() { //see html file for onclick attribute used to invoke function
    alert(3+8);
}
//SCOPES

//var myAge = 26; //A variable outside of the the function block is considered global

function myAgeInTwentyYears() {
    var myAge = 26; // a variable defined inside the function block is called local 
    return myAge + 20;
}
function myAgeTenYearsAgo() { // Because the variable myAge is local to the function above you can not call upon it in other functions.
    return myAge - 10;
}
console.log(myAgeInTwentyYears());
console.log(myAgeTenYearsAgo());*/

/*var myButton = document.getElementById("submitButton"); // Using an API method to retrieve information from the DOM, this locates elements with a class of 'submitButton'
console.log(myButton);

var fruit = document.getElementsByTagName("li"); // This API method will retrieve 'li' items from the DOM, however in addition to that it will take them in as an array and by setting it to a unique variable it will pass this to said varibale.
console.log(fruit);

var text = document.getElementsByClassName("myParagraph"); // Also cabable of taking in multiple elements, this API method will retrieve by class names
console.log(text);*/

function getValues() {
    var firstName = document.getElementById("firstName").value; //Retrieving input information from the user, notice the '.value' which takes the typed information from the input
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var age = parseInt(document.getElementById("age").value); // attached to this definition is 'parseInt' this tells the document that value being passed in by the user is a number and needs to operate as such
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Age: " + age);
} 


var noParagraph = document.getElementById("myParagraph").innerHTML = "";

document.getElementById("myParagraph").innerHTML = noParagraph + "This is too much code";

/*document.getElementById("myParagraph").innerHTML = "This is the right amount of code"*/

var quizSample = document.getElementById("quizSample");
var quizSampleContents = quizSample.innerHTML;
var quizSampleTwo = document.getElementById("quizSampleTwo");
var quizSampleTwoContents = quizSampleTwo.innerHTML;
quizSampleContents = quizSampleTwoContents;

console.log(quizSampleContents);


//HTML Events
/*var button = document.getElementById("clickButton");

button.onclick = handleClick; //This setup assigns the function 'handleClick' rather than invoking though
                                it does a similar act it allows you to handle the event in the script leaving the button with just an id.
function handleClick(event) {
    console.log(event.target.innerHTML); //event is not a key word, but for learning purposes it is helpful
}*/                                        //for understanding this is where the event object (in this case the button click) will be passed to

var button = document.getElementById("clickButton");
                                                    //1st parameter "click" is the event taking place
button.addEventListener("click", function (event) { //2nd: anonymous function that waits for the "Event Object"(button being clicked) to pass through its parameter
    console.log(event.target.innerHTML); //obtain event, target and return innerHTML
});