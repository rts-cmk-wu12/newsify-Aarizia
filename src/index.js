import './sass/placeholders/_resets.scss';
import './sass/components/_template.scss';
import './sass/components/_header.scss';
import './sass/components/_search-bar.scss';
import './sass/components/_article.scss';
import './sass/components/_footer.scss';

const GenerateTemplate = require('./utilities/generate-template');
const generateHeaderContent = require('./utilities/generate-header-content');
const generateInput = require('./utilities/generate-main-content-input');
const generateFooterContent = require('./utilities/generate-footer-content');
const generateCategories = require('./utilities/generate-categories-index');
const LocalStorageManager = require('./utilities/local-storage');
const bodyElement = document.querySelector('body');

// generate template
const template = new GenerateTemplate();
const headerContent = generateHeaderContent();
const mainContentSearchBar = generateInput();
const footerContent = generateFooterContent();

let categoryNames = [];

if (LocalStorageManager.categories.length === 0) {
    LocalStorageManager.addAllCategories();
    LocalStorageManager.getCategories();
    categoryNames = LocalStorageManager.getCategories();
} else {
    LocalStorageManager.getCategories();
    categoryNames = LocalStorageManager.getCategories();
}

const indexCategoriesContent = await generateCategories(categoryNames);

template.headerElement.append(...headerContent);
template.mainElement.append(mainContentSearchBar, indexCategoriesContent);
template.footerElement.append(...footerContent);
bodyElement.append(template.divElement);