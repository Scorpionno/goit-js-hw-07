    const list = document.querySelector('ul#categories');
    const elementsOfCategory = list.querySelectorAll('li.item');

    console.log('Number of categories:', elementsOfCategory.length);
   //console.log(elementsOfCategory);

elementsOfCategory.forEach((category) => {
    const allCategories = category.querySelector('h2').textContent; 
    const allElements = category.querySelectorAll('li').length;
    console.log(`Category: ${allCategories}`);
    console.log(`Elements: ${allElements}`);
      });