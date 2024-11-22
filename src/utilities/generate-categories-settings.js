const LocalStorageManager = require('./local-storage');

categoryNames = [
    'foreign',
    'health',
    'sport',
    'business',
    'travel'
];


    function generateSettingsCategories(array) {
        categoriesContent = [];

        categoryNames.forEach(categoryName => {

            const categoryElement = document.createElement('div');
            categoryElement.classList.add('settings__category');
            const headingContainer = document.createElement('div');
            headingContainer.classList.add('settings__heading-container');
            const logoElement = document.createElement('img');
            logoElement.src = './images/logo-white-small.png';
            logoElement.classList.add('settings__logo');
            const nameElement = document.createElement('h3');
            nameElement.textContent = categoryName;
            nameElement.classList.add('settings__category-name');
            const checkboxLabel = document.createElement('label');
            checkboxLabel.classList.add('settings__checkbox-label');
            const checkboxCircle = document.createElement('div');
            checkboxCircle.classList.add('settings__checkbox-circle');
            const checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';
            checkboxInput.value = categoryName;
            checkboxInput.checked = true;
            checkboxInput.classList.add('settings__checkbox-input');
            checkboxInput.addEventListener('change', () => {
                if (checkboxInput.checked) {
                    LocalStorageManager.addCategoryToLocalStorage(checkboxInput.value);
                } else {
                    LocalStorageManager.removeCategoryFromLocalStorage(checkboxInput.value);
                }
            });

            checkboxLabel.append(checkboxInput, checkboxCircle);
            headingContainer.append(logoElement, nameElement);
            categoryElement.append(headingContainer, checkboxLabel);

            categoriesContent.push(categoryElement);
        });

        return categoriesContent;

    }


// if (LocalStorageManager.categories.length > 0) {
//     LocalStorageManager.categories.forEach(category => {
        
//     })
// }



module.exports = generateSettingsCategories;