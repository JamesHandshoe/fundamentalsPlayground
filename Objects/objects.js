function sayHello() {
	alert("its working.");
};

/*
function watchNow() {
	alert("You are watching " + peakyBlinders.showName + "episode " + peakyBlinders.epNumber);
};
*/
var friend = {
	//properties
	firstName	: "Paul",
	lastName	: "O'Conner",
	age		: 39

};

var netflixShow = {
	//properties
	showName		: "",
	epNumber		: 1,
	epDescription	: "",

	//Methods
	watchNow	: function(){
		alert("You are watching" + " " + this.showName + " " + "episode" + " " + this.epNumber);
	}
};

var drWho = Object.create(netflixShow);
drWho.showName = "Dr. Who";
drWho.epNumber = 1;
drWho.epDescription = "Plastic come alive.";

document.getElementById("demo").innerHTML = friend.firstName + " " + friend.lastName + " " + friend.age;
document.getElementById("name").innerHTML = friend.firstName;
document.getElementById("age").innerHTML = friend.age;


document.getElementById("showName").innerHTML = drWho.showName;
document.getElementById("episodeNum").innerHTML = drWho.epNumber;
document.getElementById("episodeDes").innerHTML = drWho.epDescription;

var peakyBlinders = Object.create(netflixShow);
peakyBlinders.showName = "Peaky Blinders";
peakyBlinders.epNumber = 1;
peakyBlinders.epDescription = "We are introduced to the craziest brothers on Netflix";

document.getElementById("showname").innerHTML = peakyBlinders.showName;
document.getElementById("epNum").innerHTML = peakyBlinders.epNumber;
document.getElementById("epDescription").innerHTML = peakyBlinders.epDescription;

/********************************More complex object literals**************************/

var amazonPrimeShow = {
	//PROPERTIES
	showId			: 1,
	name 			: "James' Land",
	description 	: "James' land is a fantastic place of fun.",
	seasonInfo		: {
		seasonNumber	: 1,

		//METHODS
		printDetails	: function(){
			document.write(description);
		},
	

		episodes 		: [
			{ episodeNumber: 1, episodeName: "Happy Stuff"},
			{ episodeNUmber: 2, episodeName: "The real happy story of James"},
			{ episodeNumber: 3, episodeName: "Even happier than before"}
		]
	},
};

for (info in amazonPrimeShow.seasonInfo.episodes){
	document.write((parseInt(info) + 1) + " - " + amazonPrimeShow.seasonInfo.episodes[info].episodeName + "<br>");
}