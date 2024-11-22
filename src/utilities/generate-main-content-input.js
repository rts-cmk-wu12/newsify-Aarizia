function generateInput() {

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('main__input-container')

    const inputElement = document.createElement('input');
    inputElement.placeholder = 'Search news';
    inputElement.classList.add('main__input');

    inputContainer.append(inputElement);

    return inputContainer;
}

module.exports = generateInput;