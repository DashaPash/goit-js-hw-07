const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientItem = (arr) => arr.map(ingredient => {
 const item = document.createElement('li');
  item.textContent = ingredient;

  return item
});


const ingridientEL = document.querySelector('#ingredients');
ingridientEL.append(...ingredientItem(ingredients));