function generateTutorialScrollContent (imageSource, heading, text) {

    const imageElement = document.createElement('img');
    imageElement.src = imageSource;
    imageElement.classList.add('tutorial__image');

    const headingElement = document.createElement('h1');
    headingElement.textContent = heading;
    headingElement.classList.add('tutorial__heading');
    
    const textElement = document.createElement('p');
    textElement.textContent = text;
    textElement.classList.add('tutorial__text');

    return [
        imageElement,
        headingElement,
        textElement,
    ]
}

module.exports = generateTutorialScrollContent;