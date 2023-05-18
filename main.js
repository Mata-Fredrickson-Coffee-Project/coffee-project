"use strict";

function renderCoffee(coffee) {
  var html = '<div class="coffee card m-3">';
  html += "<div class='card-body'>";
  html += "<h4 class='card-title'>" + coffee.name + "</h4>";
  html += "<p>" + coffee.roast + "</p>";
  html += "<div class='form-check'>";
  html +=
    '<input class="form-check-input" type="checkbox" value="" id="addToCartCheck">\n' +
    '  <label class="form-check-label" for="flexCheckDefault">\n' +
    "    Add to Cart\n" +
    "  </label>";

  html += "</div>";
  html += "</div>";
  html += "</div>";
  return html;
}

function renderCoffees(coffees) {
  var html = "";
  for (var i = coffees.length - 1; i >= 0; i--) {
    html += renderCoffee(coffees[i]);
  }
  return html;
}

function updateCoffees(e) {
  e.preventDefault(); // don't submit the form, we just want to update the data
  var selectedRoast = roastSelection.value;
  var filteredCoffees = [];
  coffees.forEach(function (coffee) {
    if (coffee.roast === selectedRoast) {
      filteredCoffees.push(coffee);
    }
  });
  coffeeDisplay.innerHTML = renderCoffees(filteredCoffees);
}

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

var coffeeDisplay = document.querySelector("#coffee-display");
var submitButton = document.querySelector("#submit");
var roastSelection = document.querySelector("#roast-selection");

coffeeDisplay.innerHTML = renderCoffees(coffees);

submitButton.addEventListener("click", updateCoffees);
