import './sass/placeholders/_resets.scss';
import './sass/components/_template.scss';
import './sass/components/_header.scss';
import './sass/components/_search-bar.scss';
import './sass/components/_footer.scss';

const GenerateTemplate = require('./utilities/generate-template');
const generateHeaderContent = require('./utilities/generate-header-content');
const generateFooterContent = require('./utilities/generate-footer-content');
const bodyElement = document.querySelector('body');

// generate template
const template = new GenerateTemplate();
const headerContent = generateHeaderContent();
const footerContent = generateFooterContent();

template.headerElement.append(...headerContent);
template.footerElement.append(...footerContent);
bodyElement.append(template.divElement);
