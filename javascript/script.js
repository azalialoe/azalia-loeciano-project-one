

function titleEffect() {

    const title = document.querySelector('h1');
    
    const screenPosition = window.innerHeight;

    title.classList.add('moreInfoTextNew');

    
}

window.addEventListener('load', titleEffect)

function textBoxEffect() {

    const infoText1 = document.querySelector('.moreInfoText1');
    const infoText2 = document.querySelector('.moreInfoText2');

    const infoPosition1 = infoText1.getBoundingClientRect().top;
    const infoPosition2 = infoText2.getBoundingClientRect().top;
    
    const screenPosition = window.innerHeight;
    

    if(infoPosition1 < screenPosition) {
        infoText1.classList.add('moreInfoTextNew');
    }
    
    if(infoPosition2 < screenPosition) {
        infoText2.classList.add('moreInfoTextNew');
    }

}

window.addEventListener('scroll', textBoxEffect);
