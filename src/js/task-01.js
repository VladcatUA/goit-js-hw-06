const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(function (elememt) {
    const nameItems = elememt.querySelector('h2');
    console.log(`Category: ${nameItems.textContent}`);
    const categoriesItemsTypes = elememt.querySelectorAll('li');
    console.log(`Elements: ${categoriesItemsTypes.length}`);
 });

