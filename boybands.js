var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

veggieElement.innerhtml = "is this thing on?";


// console.log(bandElement, veggieElement);

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {


	// console.log(loopTracker);

  // Add the band names into the correct <div>
  currentBand += bands[loopTracker] + "<br>";

  // console.log("currentBand", currentBand);


  // Add the veggie names into the correct <div>
  currentVeggie += vegetables[loopTracker] + "<br>";

  // console.log("currentVeggie", currentVeggie);

}

// console.log("both variables", currentVeggie, currentBand);

veggieElement.innerHTML += currentVeggie;

// document.getElementById("vegetables").innerhtml = currentVeggie;

bandElement.innerHTML += currentBand;

// document.getElementById("boy-bands").innerhtml = "testing";


// console.log("both variables", currentVeggie, currentBand);
