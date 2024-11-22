const generateSettingsCategories = require('./generate-categories-settings');

function generateSettingsContent() {

    const subheadingElement = document.createElement('h2');
    subheadingElement.textContent = 'Settings';
    subheadingElement.classList.add('settings__subheading');
    
    const textElement = document.createElement('p');
    textElement.textContent = 'Categories';
    textElement.classList.add('settings__text');

    const categoriesContainer = document.createElement('div');
    categoriesContainer.classList.add('settings__categories-container');

    const categoriesContent = generateSettingsCategories();
    categoriesContainer.append(...categoriesContent);

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Toggle dark mode';
    buttonElement.classList.add('settings__button');

    const versionTextElement = document.createElement('small');
    versionTextElement.textContent = 'Version 4.8.15.16.23.42';
    versionTextElement.classList.add('settings__text-version');

    return [
        subheadingElement,
        textElement,
        categoriesContainer,
        buttonElement,
        versionTextElement
    ]
}

module.exports = generateSettingsContent;