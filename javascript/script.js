
// credit: developedbyed on twitter


// function to apply animation effect to h1
function titleEffect() {

    const title = document.querySelector('h1');

    title.classList.add('moreInfoTextNew');
    
}

// applying the function when page is loaded
window.addEventListener('load', titleEffect)

// function to apply animation effect to the textboxes at read more section on home page
function textBoxEffect() {

    const infoText1 = document.querySelector('.moreInfoText1');
    const infoText2 = document.querySelector('.moreInfoText2');

    // obtain the size of both textboxes and their positions relative to the top of viewport (credit: MDN Web Docs)
    const infoPosition1 = infoText1.getBoundingClientRect().top;
    const infoPosition2 = infoText2.getBoundingClientRect().top;
    
    // gets the interior height of the window in pixels, including the height of the horizontal scroll bar, if present (credit: MDN Web Docs)
    const screenPosition = window.innerHeight;
    

    // condition to add the class from scss file to make textboxes appear
    if(infoPosition1 < screenPosition) {
        infoText1.classList.add('moreInfoTextNew');
    }
    
    if(infoPosition2 < screenPosition) {
        infoText2.classList.add('moreInfoTextNew');
    }

}

// attaches event listener to trigger function when users scroll
window.addEventListener('scroll', textBoxEffect);