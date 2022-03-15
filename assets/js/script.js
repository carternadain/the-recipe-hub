// Declare constants and variables

const foodSubmit = document.querySelector("#food-generate");
const cocktailSubmit = document.querySelector("#cocktail-generate");

const foodEl = document.querySelector("#food-element");
var measures = []
var ingredients = []
for (let i=1; i <= 20 ; i++) {
    measures.push ("strMeasure" +i)
    ingredients.push ("strIngredient" +i)
}
// console.log (measures)
// console.log (ingredients)
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
        const ingredientsArr  =[]
        const measuresArr  = []
       

        for (let i=0; i <= 19 ; i++ ) { 

            console.log (ingredients[i] )
        if  (response.meals[0][ingredients[i]] !==""&&=response.meals[0][ingredients[i]] not.null) { 
           ingredientsArr.push (response.meals[0][ingredients[i]])
        
           measuresArr.push (response.meals[0][measures[i]])
        }

        // console.log(response.meals[0])
        // console.log(response.meals[0].strIngredient1)
        // console.log(response.meals[0].strMeasure1)
    } console.log (ingredientsArr)
    getFoodRecipe(response.meals[0],ingredientsArr,measuresArr)
    })
};


// function to render cocktail recipe
var getCocktailRecipe = function() {

};

// function to render the food recipe 

function getFoodRecipe(meal,ingredients,measures) {
    titleFood = document.createElement('h2');
    titleFood.textContent = meal.strMeal;
    foodEl.appendChild(titleFood);
  

    titleIngredients = document.createElement('h3');
    titleIngredients.textContent = 'Recipe Ingredients';
    foodEl.appendChild(titleIngredients);
   
    unorderedList = document.createElement('ul');
    titleIngredients.appendChild(unorderedList);
    for (i= 0 ; i < ingredients.length; i++) {
        const ing = document.createElement ('li');
        // ing.textContent = ingredients[i]
        ing.textContent = `${measures[i]} ${ingredients[i]}`
        unorderedList.appendChild(ing);
    }

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