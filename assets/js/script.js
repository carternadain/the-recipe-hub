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

const cocktailEl = document.querySelector('#cocktail-element');
var measuresCt = []
var ingredientsCt = []
for (let i=1; i <= 20 ; i++) {
    measuresCt.push ("strMeasure" +i)
    ingredientsCt.push ("strIngredient" +i)
}

// fetch API
var fetchCocktailFunction = function() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(response => {
        const ingredientsArr  =[]
        const measuresArr  = []
       

        for (let i=0; i <= 14 ; i++ ) { 

            console.log (ingredientsCt[i])
        if  (response.drinks[0][ingredientsCt[i]] !=="" && response.drinks[0][ingredientsCt[i]] !== null) { 
           ingredientsArr.push (response.drinks[0][ingredientsCt[i]])

           if  (response.drinks[0][measuresCt[i]] !=="" && response.drinks[0][measuresCt[i]] !== null) {
                measuresArr.push (response.drinks[0][measuresCt[i]])
           }
        }

    } console.log(ingredientsArr);
    getCocktailRecipe(response.drinks[0],ingredientsArr,measuresArr)
    })
};

var fetchFoodFunction = function() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(response => {
        const ingredientsArr  =[]
        const measuresArr  = []
       

        for (let i=0; i <= 19 ; i++ ) { 

            console.log (ingredients[i])
        if  (response.meals[0][ingredients[i]] !=="" && response.meals[0][ingredients[i]] !== null) { 
           ingredientsArr.push (response.meals[0][ingredients[i]])
           if  (response.meals[0][measures[i]] !=="" && response.meals[0][measures[i]] !== null) {
            measuresArr.push (response.meals[0][measures[i]])
           }
        }

    } console.log(ingredientsArr)
    getFoodRecipe(response.meals[0],ingredientsArr,measuresArr)
    })
};


// function to render cocktail recipe
var getCocktailRecipe = function(drink, ingredients, measures) {

    titleDrink = document.createElement('h2');
    titleDrink.textContent = drink.strDrink;
    cocktailEl.appendChild(titleDrink);
  

    titleIngredients = document.createElement('h3');
    titleIngredients.textContent = 'Recipe Ingredients:';
    cocktailEl.appendChild(titleIngredients);

    ingredientsDiv = document.createElement('div');
    cocktailEl.appendChild(ingredientsDiv);
   
    unorderedList = document.createElement('ul');
    ingredientsDiv.appendChild(unorderedList);

    for (i= 0 ; i < ingredients.length; i++) {
        const ing = document.createElement ('li');
        // ing.textContent = ingredients[i]
        ing.textContent = `${measures[i]} ${ingredients[i]}`
        unorderedList.appendChild(ing);
    }

    titleDirections = document.createElement('h3');
    titleDirections.textContent = 'Recipe Directions:';
    cocktailEl.appendChild(titleDirections);

    instructionsEl = document.createElement('p');
    instructionsEl.textContent = drinks.strInstructions;
    cocktailEl.appendChild(instructionsEl);
// }

};

// function to render the food recipe 


function getFoodRecipe(meal,ingredients,measures) {
    titleFood = document.createElement('h2');
    titleFood.textContent = meal.strMeal;
    foodEl.appendChild(titleFood);
  

    titleIngredients = document.createElement('h3');
    titleIngredients.textContent = 'Recipe Ingredients:';
    foodEl.appendChild(titleIngredients);

    var ingredientsDiv = document.createElement('div');
    foodEl.appendChild(ingredientsDiv);
   
    unorderedList = document.createElement('ul');
    ingredientsDiv.appendChild(unorderedList);
    for (i= 0 ; i < ingredients.length; i++) {
        const ing = document.createElement ('li');
        // ing.textContent = ingredients[i]
        ing.textContent = `${measures[i]} ${ingredients[i]}`
        unorderedList.appendChild(ing);
    }

    titleDirections = document.createElement('h3');
    titleDirections.textContent = 'Recipe Directions:';
    foodEl.appendChild(titleDirections);

    instructionsEl = document.createElement('p');
    instructionsEl.textContent = meal.strInstructions;
    foodEl.appendChild(instructionsEl);

};


// generate button click functionality
foodSubmit.addEventListener("click", fetchFoodFunction);
cocktailSubmit.addEventListener("click", fetchCocktailFunction);
