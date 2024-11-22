function generateHeaderContent() {

    const linkElement = document.createElement('a');
    linkElement.href = './index.html';
    linkElement.classList.add('header__link')

    const imageElement = document.createElement('img');
    imageElement.src = './images/logo-white-medium.jpg';
    imageElement.classList.add('header__logo');

    const h1Element = document.createElement('h1');
    h1Element.textContent = 'Newsify';
    h1Element.classList.add('header__heading');

    linkElement.append(imageElement, h1Element)

    return [linkElement];
}

module.exports = generateHeaderContent;