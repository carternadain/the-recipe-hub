var foodSubmit = document.querySelector("#food-generate")
var cocktailSubmit = document.querySelector("#cocktail-generate")

var fetchFunction = function() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
};
fetchFunction();

var getFoodRecipe = function(event) {
    event.preventDefault();
    console.log("generate food");
};

var getCocktailRecipe = function(event) {
    event.preventDefault();
    console.log("generate cocktail");
};

foodSubmit.addEventListener("submit", getFoodRecipe);
cocktailSubmit.addEventListener("submit", getCocktailRecipe)