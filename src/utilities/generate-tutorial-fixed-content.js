class GenerateTutorialFixedContent {

    divElement = null;
    labelElementLeft = null;
    labelElementMiddle = null;
    labelElementRight = null;
    radioElementLeft = null;
    radioElementMiddle = null;
    radioElementRight = null;
    buttonContainer = null;
    linkSkip = null;
    buttonNext = null;

    constructor() {
        
        this.divElement = document.createElement('div');
        this.divElement.classList.add('tutorial__scrollbar');
    
        this.labelElementLeft = document.createElement('label');
        this.labelElementLeft.classList.add('tutorial__label');
        this.radioElementLeft = document.createElement('input');
        this.radioElementLeft.type = 'radio';
        this.radioElementLeft.name = 'radio';
        this.radioElementLeft.classList.add('tutorial__radio');
        this.radioElementLeft.checked = true;
        
        this.labelElementMiddle = document.createElement('label');
        this.labelElementMiddle.classList.add('tutorial__label');
        this.radioElementMiddle = document.createElement('input');
        this.radioElementMiddle.type = 'radio';
        this.radioElementMiddle.name = 'radio';
        this.radioElementMiddle.classList.add('tutorial__radio');
        
        this.labelElementRight = document.createElement('label');
        this.labelElementRight.classList.add('tutorial__label');
        this.radioElementRight = document.createElement('input');
        this.radioElementRight.type = 'radio';
        this.radioElementRight.name = 'radio';
        this.radioElementRight.classList.add('tutorial__radio');
    
        this.radioElements = [
            this.radioElementLeft,
            this.radioElementMiddle,
            this.radioElementRight
        ];

        this.buttonContainer = document.createElement('nav');
        this.buttonContainer.classList.add('tutorial__button-container');
        
        this.linkSkip = document.createElement('a');
        this.linkSkip.textContent = 'Skip';
        this.linkSkip.classList.add('tutorial__link-skip');
        this.linkSkip.classList.add('tutorial__button');
        this.linkSkip.href = './login.html';
        
        this.buttonNext = document.createElement('button');
        this.buttonNext.textContent = 'Continue';
        this.buttonNext.classList.add('tutorial__button-next');
        this.buttonNext.classList.add('tutorial__button');
        this.labelElementLeft.append(this.radioElementLeft);
        this.labelElementMiddle.append(this.radioElementMiddle);
        this.labelElementRight.append(this.radioElementRight);
        this.divElement.append(
            this.labelElementLeft,
            this.labelElementMiddle,
            this.labelElementRight
        );
        this.buttonContainer.append(this.linkSkip, this.buttonNext);
    }
}

module.exports = GenerateTutorialFixedContent;