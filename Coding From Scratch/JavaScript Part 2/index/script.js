//Array Properties and Methods
var primary = ["red", "yellow", "blue"]; // Array example, storing multilple items/values in a variable
console.log(primary.length); //Property example "length" calculates the number of items in the array.
                                // Properties are called upon using dot notation, the dot represents the parent array. In this case the array 'primary' is the parent and the length property is what is being obtained. 
primary.sort(); //Method example "sort" alphabetizes the items in the called array.
console.log(primary);

primary.push("purple"); //Method Example inserts items into the called array.
console.log(primary);

primary.pop(); // Method Example removes the item last represented in the array.
console.log(primary);

var numbers = [27, 11, 32];  // Arrays can consist of numerical values.
console.log(numbers.length);

var random = [27, false, "Timmy"] // Arrays can also consist of different variations of variable values, including: numbers, booleans, and/or strings.
console.log(random);

// Objects
var vehicle = {  // objects (represented by "{}") define the properties of a variable and sets the appropriate values
    make: "Toyota",
    model: "Tacoma",
    color: "red",
    weightInLbs: 3980,
    fourWheelDrive: true,
    numberOfDoors: 4
}; //Properties listed in this objects are referred to as an Index, the first item being defined as 0, 2nd item as 1, and so on.

console.log(vehicle.make);

//While Loop
var i = 0;
while (i < 4) {
    console.log("The value of i is: " + i); //concatenates the value of i to the end of the string of text.
    i++; // this is simple addition equation that changes that value of i (i = i + 1).
} // The "while" statement first checks if the statement (between the '()') is true, if it is true, it executes code in '{}'. This code unlike 
  //an 'if' statement, will continue to repeat the execution until statement is not longer true. To prevent the code from repeating itself  
  //into an 'infinite loop' the value must be changed until it is no longer accepted by the 'while' statement. 

  //For Loop

var cupsOfFlourNeeded = 4;
var currentCups;

for ( // The 'for' statement creates a clause with 3 conditions.
    var i = 0; //1st condition *VARIABLE* create a variable store a value to it (only executes upon the 1st iteration).
    i < cupsOfFlourNeeded;  // 2nd condition *STATEMENT* checks if statement is true
    i++ // 3rd condition *ALTERATION* alters the initial value once the initial variables value has been stated (this executes in the body of the 'for statement).
    ) {
    currentCups = "There are currently " + i + " cups of flour in the bowl.";
    console.log(currentCups);
};

alert("There is enough flour in the bowl!");

// Looping through an array

var myArray = [2, 5, 7, 12, 19];

for (
    i = 0;
    i < myArray.length; //compares the Variable 'i' to the length/number of items in the array
    i++
) {
    if (myArray[i] >= 10) { //links the index value to 'myArray' if the index represents a number greater than or equal to 10, the console will log the following.
        console.log("The value of " + myArray[i] + " is double digits!");
    }
    else { // other wise the console will log this
        console.log("The value of " + myArray[i] + " is a single digit!");
    }
}
