// Declare constants and variables

const foodSubmit = document.querySelector("#food-generate");
const cocktailSubmit = document.querySelector("#cocktail-generate");

var foodEl = document.querySelector("#food-element");


// retrieve local storage


// function to execute when the generate button is clicked


// fection API
var fetchCocktailFunction = function() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(function(drinks) {
        return drinks.json();
      })
    .then(function(drinks) {
    drinks.json().then(function(data) {
        console.log(data);
    });
});
};

var fetchFoodFunction = function() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(response => {
        getFoodRecipe(response.meals[0])
    });
};


// function to render cocktail recipe
var getCocktailRecipe = function() {

};

// function to render the food recipe 

function getFoodRecipe(meal) {
    foodEl.innerHTML = 
    '<h2>${meal.strMeal}</h2>'

};

// function to populate search history below search bar

// generate button click functionality
foodSubmit.addEventListener("click", fetchFoodFunction);
cocktailSubmit.addEventListener("click", getCocktailRecipe);



