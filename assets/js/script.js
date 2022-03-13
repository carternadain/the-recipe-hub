// Declare constants and variables

var foodSubmit = document.querySelector("#food-generate")
var cocktailSubmit = document.querySelector("#cocktail-generate")



// retrieve local storage


// function to execute when the generate button is clicked


// fection API
var fetchFunction = function() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
};
fetchFunction();

// function to render cocktail recipe
var getCocktailRecipe = function(event) {
    event.preventDefault();
    console.log("generate cocktail");
};

// function to render the food recipe 

var getFoodRecipe = function(event) {
    event.preventDefault();
    console.log("generate food");
};

// function to populate search history below search bar


// generate button click functionality
foodSubmit.addEventListener("submit", getFoodRecipe);
cocktailSubmit.addEventListener("submit", getCocktailRecipe)



