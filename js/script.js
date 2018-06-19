//My calculator project

var add = function(number1, number2){
	return number1 + number2;
};

//user input 1
var number1 = parseInt(prompt("Enter a number "));
alert("number1");

//user input 2
var number2 = parseInt(prompt("Enter another number "));
alert("number2");

//answer
alert(add(number1, number2));
