const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const ingredientsItems = document.createElement('li');
  ingredientsItems.classList.add('item');
  ingredientsItems.textContent = `${ingredient}`;
  ingredientsList.append(ingredientsItems);
});

console.log(ingredientsList);