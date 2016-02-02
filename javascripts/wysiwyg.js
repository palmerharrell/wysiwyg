// Create an array of objects that represents famous people (see structure below).
var people = [
	{
	  title: "Comedian",
	  name: "Terry Jones",
	  bio: "British comedian, screenwriter, actor, film director, historian and author. He is best known as a member of the Monty Python comedy troupe.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Terry_Jones.jpg",
	  lifespan: {
	    birth: 1942,
	    death: "-"
	  }
	},
	{
	  title: "Musician",
	  name: "Rick James",
	  bio: 'American musician and composer. Known as the "king of punk funk".',
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Rick_James_in_Lifestyles_of_the_Rich_1984.JPG",
	  lifespan: {
	    birth: 1948,
	    death: 2004
	  }
	},
	{
	  title: "Actor / Martial Artist",
	  name: "Brandon Lee",
	  bio: 'American actor and martial artist. He was the son of martial arts film actor Bruce Lee.',
	  image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Brandon_Lee.jpg",
	  lifespan: {
	    birth: 1965,
	    death: 1993
	  }
	},
	{
	  title: "Comedian",
	  name: "Pauly Shore",
	  bio: ' American actor, comedian, director, writer and producer who starred in several comedy films in the 1990s and hosted a video show on MTV in the late 1980s and early 1990s.',
	  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pauly_Shore_is_Dead_Red_Carpet.jpg/1280px-Pauly_Shore_is_Dead_Red_Carpet.jpg",
	  lifespan: {
	    birth: 1968,
	    death: "-"
	  }
	},
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	}
];

var famousPeopleContainer = document.getElementById("famousPeople");
var personCards = document.getElementsByTagName("person");
var bioInput = document.getElementById("bioInput");

function addPeople() {
	var htmlString = '';
	for (var i = 0; i < people.length; i++) {
		htmlString += '<person><header>';
		htmlString += people[i].name + ', ' + people[i].title + '</header>';
		htmlString += '<section><p>' + people[i].bio + '</p><img src="' + people[i].image + '">';
		htmlString += '</section><footer><p>Birth: ' + people[i].lifespan.birth + '</p>';
		htmlString += '<p>Death: ' + people[i].lifespan.death + '</p></footer></person>';
	};
	famousPeopleContainer.innerHTML = htmlString;
}

// Populate the famousPeople DIV with the objects from the people array
addPeople();

// When a person card is clicked, toggle border and change focus to text input
var clickPerson = function() {
	for (var i = 0; i < personCards.length; i++) {
		personCards[i].classList.remove("selected");
	};
	this.classList.add("selected");
	bioInput.focus();
}

// Add clickPerson function to click event on each card
for (var i = 0; i < personCards.length; i++) {
	personCards[i].addEventListener("click", clickPerson);
};


// When there is a highlighted person element, and you begin typing in the input box, the person's 
// biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input 
// field should immediately be blank.



