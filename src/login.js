import './sass/placeholders/_resets.scss';
import './sass/components/_template.scss';
import './sass/components/_login.scss';

const generateLoginContent = require('./utilities/generate-login-content');
const bodyElement = document.querySelector('body');

const loginContent = generateLoginContent();

bodyElement.append(loginContent);