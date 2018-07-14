// number of dice to roll
// var numberOfDice = 5;
// number of sides each dice has
// var sides = 12;
// 2D array to organize rolls by #
var orgRolls = []

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
	console.log("Num Dice:", numberOfDice);
	console.log("Sides:", sides);
	console.log(sum + ": " + results.join(', '));
	console.log("=====================");

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
			console.log("# of " + orgRolls[i][0] + "s: " + orgRolls[i].length);
		}
	}
}

// rollDice();

// TODO: make it accept interactive input

// rollDice(5, 12);
// rollDice(6, 4);
// rollDice(1, 2);
rollDice(3, 6);
// rollDice(4, 20);
// rollDice(100, 100);
