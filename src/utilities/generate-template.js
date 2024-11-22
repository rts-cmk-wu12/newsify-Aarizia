class GenerateTemplate {

    divElement = null;
    headerElement = null;
    mainElement = null;
    footerElement = null;

    constructor() {

        this.divElement = document.createElement('div');
        this.divElement.classList.add('wrapper');

        this.headerElement = document.createElement('header');
        this.headerElement.classList.add('header');

        this.mainElement = document.createElement('main');
        this.mainElement.classList.add('main');

        this.footerElement = document.createElement('footer');
        this.footerElement.classList.add('footer');

        this.divElement.append(this.headerElement);
        this.divElement.append(this.mainElement);
        this.divElement.append(this.footerElement);
    }
}

module.exports = GenerateTemplate;