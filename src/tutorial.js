import './sass/placeholders/_resets.scss';
import './sass/components/_splash-screen.scss';
import './sass/components/_tutorial-scroll.scss';
import './sass/components/_tutorial-fixed.scss';

const generateTutorialScrollContent = require('./utilities/generate-tutorial-scroll-content');
const GenerateTutorialFixedContent = require('./utilities/generate-tutorial-fixed-content');
const generateSplashScreen = require('./utilities/generate-splash-screen');

const imageSourcePageOne = './images/onboarding-1-image-white.png';
const imageSourcePageTwo = './images/onboarding-2-image-white.png';
const imageSourcePageThree = './images/onboarding-3-image-white.png'
const headingPageOne = 'Stay Connected, Everywhere, Anytime';
const headingPageTwo = 'Become a Savvy Global Citizen';
const headingPageThree = 'Enhance your News Journey Now!';
const textPageOne = 'Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.';
const textPageTwo = 'Discover tailored news that align with your interests and preferences. Your personalized news journey awaits!';
const textPageThree = 'Be part of our dynamic community and contribute your insights and participate in enriching conversations.';
const bodyElement = document.querySelector('body');

// generate content
const divElement = document.createElement('div');
divElement.classList.add('wrapper');
const tutorialPagesContainer = document.createElement('div');
tutorialPagesContainer.classList.add('tutorial__pages-container');
const tutorialPageOneContainer = document.createElement('article');
tutorialPageOneContainer.classList.add('tutorial__page-one-container');
tutorialPageOneContainer.classList.add('tutorial__page-container');
const tutorialPageTwoContainer = document.createElement('article');
tutorialPageTwoContainer.classList.add('tutorial__page-two-container');
tutorialPageTwoContainer.classList.add('tutorial__page-container');
const tutorialPageThreeContainer = document.createElement('article');
tutorialPageThreeContainer.classList.add('tutorial__page-three-container');
tutorialPageThreeContainer.classList.add('tutorial__page-container');

const splashScreen = generateSplashScreen();
const tutorialScrollContentPageOne = generateTutorialScrollContent(imageSourcePageOne, headingPageOne, textPageOne);
const tutorialScrollContentPageTwo = generateTutorialScrollContent(imageSourcePageTwo, headingPageTwo, textPageTwo);
const tutorialScrollContentPageThree = generateTutorialScrollContent(imageSourcePageThree, headingPageThree, textPageThree);
const tutorialFixedContent = new GenerateTutorialFixedContent();

tutorialPageOneContainer.append(...tutorialScrollContentPageOne);
tutorialPageTwoContainer.append(...tutorialScrollContentPageTwo);
tutorialPageThreeContainer.append(...tutorialScrollContentPageThree);
tutorialPagesContainer.append(tutorialPageOneContainer, tutorialPageTwoContainer, tutorialPageThreeContainer);
divElement.append(
    tutorialPagesContainer,
    tutorialFixedContent.divElement,
    tutorialFixedContent.buttonContainer
);
bodyElement.append(splashScreen, divElement);

// splash screen functionality
document.addEventListener('DOMContentLoaded', () => {
    setTimeout( () => {
        splashScreen.classList.add('hidden')
    }, 2000);
});

// navigation scrollbar
const containerElementWidth = Math.ceil(tutorialPagesContainer.getBoundingClientRect().width);

tutorialFixedContent.radioElements.forEach((element, index) => element.addEventListener('change', () => {
    tutorialPagesContainer.scrollTo(containerElementWidth * index, 0);
}));

// navigation continue-button
tutorialFixedContent.buttonNext.addEventListener('click', () => {
    const checkedRadioElement = tutorialFixedContent.radioElements.find(radioElement => radioElement.checked);
    const nextRadioElement = checkedRadioElement.parentElement.nextElementSibling;

    if (nextRadioElement === null) {
        window.location = './login.html';
    } else {
        nextRadioElement.click();
    }
});