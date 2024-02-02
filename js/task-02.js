const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRegister = document.getElementById('ingredients');

function addIngredientToRegister(ingredientName) {
  const registerOfItems = document.createElement('li');
  registerOfItems.classList.add('item');
  registerOfItems.textContent = ingredientName;
  ingredientsRegister.appendChild(registerOfItems);
}

ingredients.forEach(ingredient => {
  addIngredientToRegister(ingredient);
});