// input
	// the number of dice to roll
	// how many sides each die has
// ouput
	// the result of the rolls, as an integer
		// Math.rand that's within range of the number of die sides
		// ex 2d6 that rolled a 2 and 4 = 6

// 1d6

// Math.random() & Math.floor()

// number of dice to roll
// var numberOfDice = 2;
// number of sides each dice has
// var sides = 20;
var results = [];


function rollDice(numberOfDice, sides) {
	// for each numberOfDice
	for(var i = 0; i < numberOfDice; i++) {
		// roll dice (get a number between 1 and max number of die-sides)
		// store the value in the results array	
		results.push(Math.floor(Math.random() * sides + 1));		
		// console.log(results);
	}

	// add all side results together
	var sum = results.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue;
	});
	console.log("Num Dice:", numberOfDice);
	console.log("Sides:", sides);
	console.log(sum + ": " + results.join(', '));
	console.log("===================");
}

rollDice(5, 12);
rollDice(6, 4);
rollDice(1, 2);
rollDice(3, 6);
rollDice(4, 20);
rollDice(100, 100);
