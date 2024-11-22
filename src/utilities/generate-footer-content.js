function generateFooterContent() {
    
    const iconHome = document.createElement('img');
    iconHome.src = './images/icon-home-footer-white.png';
    iconHome.classList.add('footer__icon');
    iconHome.classList.add('footer__icon-home');

    const textHome = document.createElement('span');
    textHome.textContent = 'Home';
    
    const footerButtonHome = document.createElement('button');
    footerButtonHome.append(iconHome, textHome);
    footerButtonHome.classList.add('footer__button');
    footerButtonHome.classList.add('footer__button-home');

    footerButtonHome.addEventListener('click', () => {
        document.location.href = 'index.html';
    });

    const iconArchive = document.createElement('img');
    iconArchive.src = './images/icon-archive-footer-white.png';
    iconArchive.classList.add('footer__icon');
    iconArchive.classList.add('footer__icon-archive');

    const textArchive = document.createElement('span');
    textArchive.textContent = 'Archive';
    
    const footerButtonArchive = document.createElement('button');
    footerButtonArchive.append(iconArchive, textArchive);
    footerButtonArchive.classList.add('footer__button');
    footerButtonArchive.classList.add('footer__button-archive');

    footerButtonArchive.addEventListener('click', () => {
        document.location.href = 'archive.html';
    });

    const iconPopular = document.createElement('img');
    iconPopular.src = './images/icon-popular-footer-white.png';
    iconPopular.classList.add('footer__icon');
    iconPopular.classList.add('footer__icon-popular');

    const textPopular = document.createElement('span');
    textPopular.textContent = 'Popular';
    
    const footerButtonPopular = document.createElement('button');
    footerButtonPopular.append(iconPopular, textPopular);
    footerButtonPopular.classList.add('footer__button');
    footerButtonPopular.classList.add('footer__button-popular');

    footerButtonPopular.addEventListener('click', () => {
        document.location.href = 'popular.html';
    });
    
    const iconSettings = document.createElement('img');
    iconSettings.src = './images/icon-settings-footer-white.png';
    iconSettings.classList.add('footer__icon');
    iconSettings.classList.add('footer__icon-settings');

    const textSettings = document.createElement('span');
    textSettings.textContent = 'Settings';
    
    const footerButtonSettings = document.createElement('button');
    footerButtonSettings.append(iconSettings, textSettings);
    footerButtonSettings.classList.add('footer__button');
    footerButtonSettings.classList.add('footer__button-settings');

    footerButtonSettings.addEventListener('click', () => {
        document.location.href = 'settings.html';
    });

    return [
        footerButtonHome,
        footerButtonArchive,
        footerButtonPopular,
        footerButtonSettings,
    ];
}

module.exports = generateFooterContent;