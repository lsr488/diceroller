// number of dice to roll
// var numberOfDice = 5;
// number of sides each dice has
// var sides = 12;
// 2D array to organize rolls by #
var orgRolls = [];
var sumRolls = document.getElementById("sumRolls");
var individDice = document.getElementById("individDice");
var inputDice = document.querySelector('input[name="dice"]');
var inputSides = document.querySelector('input[name="sides"]');
var displayDice = document.getElementById("displayDice");
var displaySides = document.getElementById("displaySides");
var theD = document.getElementById("d");
var submitButton = document.querySelector("button");

// Input web display
	// when inputDice changes, grab the value and change displayDice
	inputDice.addEventListener("input", function() {
		displayDice.textContent = inputDice.value;
		displayDice.classList.remove("gray-text");
		displayDice.classList.add("red-text");
	});

	// when inputSides changes, grab the value and change displaySides
	inputSides.addEventListener("input", function() {
		displaySides.textContent = inputSides.value;
		displaySides.classList.remove("gray-text");
		displaySides.classList.add("red-text");
	});

	// user decides how many dice of which type
	submitButton.addEventListener("click", function() {
		rollDice(inputDice.value, inputSides.value);
	})

function rollDice(numberOfDice, sides) {
	var results = [];

	// roll dice (get a number between 1 and max number of die-sides)
	// store the value in the results array	
	for(var i = 0; i < numberOfDice; i++) {
		results.push(Math.floor(Math.random() * sides + 1));		
	}
	
	// add all side results together
	var sum = results.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue;
	});

	// display stats, rolls, and sum of rolls
	// console.log("Num Dice:", numberOfDice);
	// console.log("Sides:", sides);
	// console.log(sum + ": " + results.join(', '));
	// console.log("=====================");

	// Output web display
	sumRolls.textContent = sum;
	individDice.textContent = results.join(", ");

	organizeRolls(sides);
	sortRolls(results);
	displayNumbers();
}

function organizeRolls(sides) {
	for(var i = 0; i < sides; i++) {
		orgRolls[i] = [];
	}
}

function sortRolls(results) {
	results.forEach(function(element) {
		var index = element - 1;
		orgRolls[index].push(element);
	});
}

function displayNumbers() {
	for(var i = 0; i < orgRolls.length; i++) {
		if(orgRolls[i].length > 0) {
			// console.log("# of " + orgRolls[i][0] + "s: " + orgRolls[i].length);
		}
	}
}