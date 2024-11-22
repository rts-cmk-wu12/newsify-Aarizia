function generateLoginContent() {

    const divElement = document.createElement('div');
    divElement.classList.add('wrapper');

    const headerElement = document.createElement('header');
    headerElement.classList.add('login__header');

    const logoElement = document.createElement('img');
    logoElement.src = './images/logo-white-large.jpg';
    logoElement.classList.add('login__logo');

    const headingElement = document.createElement('h1');
    headingElement.textContent = 'Newsify';
    headingElement.classList.add('login__heading');

    const mainElement = document.createElement('main');
    mainElement.classList.add('login__main');

    const welcomeTextElement = document.createElement('p');
    welcomeTextElement.textContent = "Welcome! Let's dive into your account!";
    welcomeTextElement.classList.add('login__text');

    const facebookLoginButtonElement = document.createElement('button');
    facebookLoginButtonElement.textContent = 'Continue with Facebook';
    facebookLoginButtonElement.classList.add('login__button-light');
    facebookLoginButtonElement.classList.add('login__button');
    
    const googleLoginButtonElement = document.createElement('button');
    googleLoginButtonElement.textContent = 'Continue with Google';
    googleLoginButtonElement.classList.add('login__button-light');
    googleLoginButtonElement.classList.add('login__button');
    
    const borderElement = document.createElement('p');
    borderElement.textContent = 'or';
    borderElement.classList.add('login__border');
    
    const passwordLoginButtonElement = document.createElement('button');
    passwordLoginButtonElement.textContent = 'Sign in with password';
    passwordLoginButtonElement.classList.add('login__button-dark');
    passwordLoginButtonElement.classList.add('login__button');
    
    const signUpContainerElement = document.createElement('div');
    signUpContainerElement.classList.add('login__sign-up-container');
    
    const signUpTextElement = document.createElement('p');
    signUpTextElement.textContent = "Don't have an account?"
    signUpTextElement.classList.add('login__text');

    const signUpLinkElement = document.createElement('a');
    signUpLinkElement.href = '#';
    signUpLinkElement.textContent = 'Sign up';
    signUpLinkElement.classList.add('login__link');
    

    signUpContainerElement.append(signUpTextElement, signUpLinkElement);
    headerElement.append(logoElement, headingElement);
    mainElement.append(
        welcomeTextElement,
        facebookLoginButtonElement,
        googleLoginButtonElement,
        borderElement,
        passwordLoginButtonElement,
        signUpContainerElement
    );
    divElement.append(headerElement, mainElement);

    return divElement;
}

module.exports = generateLoginContent;