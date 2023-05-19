"use strict";
// --------------------------Function to create coffee Cards based on Array------------
function renderCoffee(coffee) {
  let html =
    '<div class="coffee card m-3 shadow-lg border border-primary-subtle">';
  html += "<div class='card-body'>";
  html += "<h4 class='card-title'>" + coffee.name + "</h4>";
  html += "<p>" + coffee.roast + "</p>";
  html += "<div class='form-check form-check-inline'>";
  html +=
    '<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">';
  html += '<label class="form-check-label" for="inlineRadio1">8oz Bag</label>';
  html += "</div>";
  html += "<div class='form-check form-check-inline'>";
  html +=
    '<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option1">';
  html += '<label class="form-check-label" for="inlineRadio1">16oz Bag</label>';
  html += "</div>";
  html += "<div class='form-check form-check-inline'>";
  html +=
    '<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">';
  html += '<label class="form-check-label" for="inlineRadio1">32oz Bag</label>';
  html += "</div>";
  html += "<div>";
  html +=
    '<label for="roast-selection-1"></label>\n' +
    '                      <select class="form-select" id="roast-selection-1">\n' +
    "                        <option selected>Choose Grind Type.</option>\n" +
    "                        <option>Coarse</option>\n" +
    "                        <option>Medium-Coarse</option>\n" +
    "                        <option>Medium</option>\n" +
    "                        <option>Fine</option>\n" +
    "                        <option>Extra Fine</option>\n" +
    "                        <option>Whole Bean</option>\n" +
    "                      </select>";

  html += "</div>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  return html;
}

// -------------------------Function to Render coffee on page/array item------------

function renderCoffees(coffees) {
  let html = "";
  for (let i = coffees.length - 1; i >= 0; i--) {
    html += renderCoffee(coffees[i]);
  }
  return html;
}

// -----------------Function for top form to sort Coffee-----------

function updateCoffees(e) {
  e.preventDefault(); // don't submit the form, we just want to update the data
  var selectedRoast = roastSelection.value;
  var filteredCoffees = [];
  coffees.forEach(function (coffee) {
    if (coffee.roast === selectedRoast) {
      filteredCoffees.push(coffee);
    }});

  coffeeDisplay.innerHTML = renderCoffees(filteredCoffees);
}

// -------------------Function to Display Typed Coffee ------------------
function displayCoffeeInput() {
  let newArr = [];
  coffees.forEach(function (coffee) {
    if (coffee.name.toLowerCase().startsWith(coffeeInput.value.toLowerCase())) {
      newArr.push(coffee);
    }
  });
  coffeeDisplay.innerHTML = renderCoffees(newArr);
}

// ----------------Function to Add Custom Coffee------------------

function addCustomCoffee(e) {
  e.preventDefault(); // don't submit the form, we just want to update the data
  let selectedRoast = customRoastSelection.value;
  let customCoffeeName = document.querySelector("#custom-coffee-name").value;
  let customCoffeeObj = {
    id: coffees.length + 1,
    name: customCoffeeName,
    roast: selectedRoast,
  };
  coffees.push(customCoffeeObj);

  coffeeDisplay.innerHTML = renderCoffees(coffees);
}

// -----------------------Array of Coffees-----------------

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
  { id: 1, name: "Light City", roast: "Light Roast" },
  { id: 2, name: "Half City", roast: "Light Roast" },
  { id: 3, name: "Cinnamon", roast: "Light Roast" },
  { id: 4, name: "City", roast: "Medium Roast" },
  { id: 5, name: "American", roast: "Medium Roast" },
  { id: 6, name: "Breakfast", roast: "Medium Roast" },
  { id: 7, name: "High", roast: "Dark Roast" },
  { id: 8, name: "Continental", roast: "Dark Roast" },
  { id: 9, name: "New Orleans", roast: "Dark Roast" },
  { id: 10, name: "European", roast: "Dark Roast" },
  { id: 11, name: "Espresso", roast: "Dark Roast" },
  { id: 12, name: "Viennese", roast: "Dark Roast" },
  { id: 13, name: "Italian", roast: "Dark Roast" },
  { id: 14, name: "French", roast: "Dark Roast" },
];


// ----------------selectors and eventListeners-----------------

let coffeeDisplay = document.querySelector("#coffee-display");
let submitCustomButton = document.querySelector("#submit-custom");
let roastSelection = document.querySelector("#roast-selection-1");
let customRoastSelection = document.querySelector("#custom-roast-selection");
let coffeeInput = document.querySelector("#coffee-data-list");

roastSelection.addEventListener("change", updateCoffees);
submitCustomButton.addEventListener("click", addCustomCoffee);
coffeeInput.addEventListener("keyup", displayCoffeeInput);

// --------------------------Function to sort Coffees on load-----------------------

let sortedCoffee = coffees.sort((x, y) => {
  if (x.id > y.id) {
    return -1;
  }
  if (x.id < y.id) {
    return 1;
  }
  return 0;
});

coffeeDisplay.innerHTML = renderCoffees(sortedCoffee);
