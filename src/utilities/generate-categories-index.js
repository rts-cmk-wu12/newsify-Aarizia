const LocalStorageManager = require('./local-storage');
const NewsService = require('./new-york-times-api');
const TextHelper = require('./text-helper');

let categoryNames = [];

if (LocalStorageManager.categories === null) {
    LocalStorageManager.addAllCategories();
    LocalStorageManager.getCategories();
    categoryNames = LocalStorageManager.getCategories();
} else {
    LocalStorageManager.getCategories();
    categoryNames = LocalStorageManager.getCategories();
}

async function generateCategories(array) {

    const categoriesContainer = document.createElement('div');
    categoriesContainer.classList.add('categories__container');

    array.forEach(async categoryName => {
        const data = await NewsService.fetchIndexCategory(categoryName);
        const detailsElement = document.createElement('details');
        detailsElement.classList.add('details');
        const summaryElement = document.createElement('summary');
        summaryElement.classList.add('summary');
        const summaryHeadingContainer = document.createElement('div');
        summaryHeadingContainer.classList.add('summary__heading-container');
        const summaryLogoElement = document.createElement('img');
        summaryLogoElement.src = './images/logo-white-small.png';
        summaryLogoElement.classList.add('summary__logo');
        const summaryHeadingElement = document.createElement('h2');
        summaryHeadingElement.textContent = categoryName;
        summaryHeadingElement.classList.add('summary__heading');
        const summaryChevronElement = document.createElement('img');
        summaryChevronElement.src = './images/chevron-right-light.png';
        summaryChevronElement.classList.add('summary__icon');

        summaryHeadingContainer.append(summaryLogoElement, summaryHeadingElement);
        summaryElement.append(summaryHeadingContainer, summaryChevronElement);
        detailsElement.append(summaryElement);
        categoriesContainer.append(detailsElement);

        data.forEach(article => {
            const linkElement = document.createElement('a');
            linkElement.href = article.url;
            linkElement.classList.add('article__link');
            const articleElement = document.createElement('article');
            articleElement.classList.add('article__article');
            const imageElement = document.createElement('img');
            if (article.imageSource != undefined) {
                imageElement.src = 'https://nyt.com/' + article.imageSource;
            }
            imageElement.classList.add('article__image');
            const textContainer = document.createElement('div');
            textContainer.classList.add('article__text-container');
            const headingElement = document.createElement('h3');
            const shortenedTitle = TextHelper.truncate(article.title, 20);
            headingElement.textContent = shortenedTitle;
            headingElement.classList.add('article__heading');
            const textElement = document.createElement('p');
            const shortenedText = TextHelper.truncate(article.abstract, 50);
            textElement.textContent = shortenedText;
            textElement.classList.add('article__text');
            
            textContainer.append(headingElement, textElement);
            articleElement.append(imageElement, textContainer);
            linkElement.append(articleElement);
            detailsElement.append(linkElement);
            
        });
    });

    return categoriesContainer;

}
    
module.exports = generateCategories;