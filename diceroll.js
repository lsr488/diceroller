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
var numberOfDice = 6;
// number of sides each dice has
var sides = 6;


function rollDice() {
	var results = [];

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
	console.log("=====================");

	createRes();
	// checkRolls1(results);
	checkRolls(results);
	displayNumbers();

}

// create an object 
	// key == number of side

var res = []

function createRes() {
	for(var i = 0; i < sides; i++) {
		res[i] = [];
	}
}


function checkRolls(results) {
	// for each result
		// sort into appropriate res array
	
	for(var i = 0; i < sides; i++) {
		results.find(function(num) {
			if(num - 1 == i) {
				res[i].push(num);
			}
		});
	}
		console.log(res);
}

function checkRolls1(results) {
	// var res1 = [];
	// var res2 = [];
	// var res3 = [];
	// var res4 = [];
	// var res5 = [];
	// var res6 = [];

	results.find(function(num) {
		if(num == 1) {
			// res1.push(num);
			res[0].push(num);
		}
	});

	results.find(function(num) {
		if(num == 2) {
			// res2.push(num);
			res[1].push(num);
		}
	});

	results.find(function(num) {
		if(num == 3) {
			// res3.push(num);
			res[2].push(num);
		}
	});

	results.find(function(num) {
		if(num == 4) {
			// res4.push(num);
			res[3].push(num);
		}
	});

	results.find(function(num) {
		if(num == 5) {
			// res5.push(num);
			res[4].push(num);
		}
	});

	results.find(function(num) {
		if(num == 6) {
			// res6.push(num);
			res[5].push(num);
		}
	});

	// var prob = (1/(numberOfDice * sides) * 100);
	// console.log("Prob: " + prob + "%");

	// console.log("# of 1s:", res1.length);
	// console.log((res1.length/results.length)*100 + "%");
	
	// console.log("# of 2s:", res2.length);
	// console.log((res2.length/results.length)*100 + "%");
	
	// console.log("# of 3s:", res3.length);
	// console.log((res3.length/results.length)*100 + "%");
	
	// console.log("# of 4s:", res4.length);
	// console.log((res4.length/results.length)*100 + "%");
	
	// console.log("# of 5s:", res5.length);
	// console.log((res5.length/results.length)*100 + "%");
	
	// console.log("# of 6s:", res6.length);
	// console.log((res6.length/results.length)*100 + "%");
	
	// console.log(res);
}

// TODO: make display adjustable for more than 6 sides
function displayNumbers() {
	// res.forEach(function(disp) {
	// 	console.log("# of " + disp + ": ");
	// });

	console.log("# of 1s:", res[0].length);
	console.log("# of 2s:", res[1].length);
	console.log("# of 3s:", res[2].length);
	console.log("# of 4s:", res[3].length);
	console.log("# of 5s:", res[4].length);
	console.log("# of 6s:", res[5].length);
}

rollDice();

// rollDice(5, 12);
// rollDice(6, 4);
// rollDice(1, 2);
// rollDice(3, 6);
// rollDice(4, 20);
// rollDice(100, 100);
