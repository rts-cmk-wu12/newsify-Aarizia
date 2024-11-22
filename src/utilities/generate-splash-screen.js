function generateSplashScreen() {

    const splashScreen = document.createElement('div');
    splashScreen.classList.add('splash__container');
    const logoElement = document.createElement('img');
    logoElement.src = './images/logo-white-large.jpg';
    logoElement.classList.add('splash__logo')
    const headingElement = document.createElement('h1');
    headingElement.textContent = 'Newsify';
    headingElement.classList.add('splash__heading');

    splashScreen.append(logoElement, headingElement);

    return splashScreen;
}

module.exports = generateSplashScreen;