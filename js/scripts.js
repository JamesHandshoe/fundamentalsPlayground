//JS File
/*
console.log("hello world");
function add(x,y) {
	console.log(x + y);
}


//array
var classmates = ["Matt", "Tara", "Danielle", "Evan"];

var typesOfSoda = new Array();

typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC";

console.log(classmates);
console.log(typesOfSoda);
*/

/*****************DO NOT GO ABOVE THIS LINE RIGHT NOW*********************************/


//OBJECT LITERAL

var friend = {

	//properities
	fullname			: "",
	age					: 0,
	married				: true,
	vocation			: "",
	closeLikeABrother	: true,
	yearsKnown			: 0,

	//Method
	printVocation	: function(){
		return this.vocation
	},

	introduceToSisterInLaw	: function() {
		if(this.yearsKnown >= 5 && this.closeLikeABrother === true && this.married == false) {
			return "I want you to meet Lizzy.";
		} else {
			return "have you tried Tinder?";
		}
	}
}

var nickKirkes = Object.create(friend);
nickKirkes.fullname = "Nick Kirkes";
nickKirkes.age = 38;
nickKirkes.married = false;
nickKirkes.vocation = "PM at Sales Force";
nickKirkes.yearsKnown = 20;

var hansKloepfer = Object.create(friend);
hansKloepfer.fullname = "Hans Kloepfer";
hansKloepfer.age = 42;
hansKloepfer.married = false;
hansKloepfer.vocation = "Sailboat Captain";
hansKloepfer.yearsKnown = 31;

var stephanHamaker = Object.create(friend);
stephanHamaker.fullname = "Stephan Hamaker";
stephanHamaker.age = 35;
stephanHamaker.married = true;
stephanHamaker.vocation = "Teacher";
stephanHamaker.yearsKnown = 8;