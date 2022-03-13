// Declare constants and variables

const foodSubmit = document.querySelector("#food-generate");
const cocktailSubmit = document.querySelector("#cocktail-generate");

const foodEl = document.querySelector("#food-element");


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
    })
};


// function to render cocktail recipe
var getCocktailRecipe = function() {

};

// function to render the food recipe 

function getFoodRecipe(meal) {
    titleFood = document.createElement('h2');
    titleFood.textContent = meal.strMeal;
    foodEl.appendChild(titleFood);

    titleIngredients = document.createElement('h3');
    titleIngredients.textContent = 'Recipe Ingredients';
    foodEl.appendChild(titleIngredients);

    // unorderedList = document.createElement('ul');
    // unorderedList.appendChild(unorderedList);

    // listEl = document.createElement('li');
    // listEl.textContent = meal.strIngredient1;
    // foodEl.appendChild(listEl);

    titleDirections = document.createElement('h3');
    titleDirections.textContent = 'Recipe Directions';
    foodEl.appendChild(titleDirections);

    instructionsEl = document.createElement('p');
    instructionsEl.textContent = meal.strInstructions;
    foodEl.appendChild(instructionsEl);

};

// function to populate search history below search bar

// generate button click functionality
foodSubmit.addEventListener("click", fetchFoodFunction);
cocktailSubmit.addEventListener("click", getCocktailRecipe);



