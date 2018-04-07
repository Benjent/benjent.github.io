
// Browser sniffing for touch capabilities
var eventSuitedForClientBrowser = (function() {
    // Checkout Vladimir's answer: https://joshtronic.com/2015/04/19/handling-click-and-touch-events-on-the-same-element/
    return 'ontouchstart' in document === true ? 'touchstart' : 'click';
})();

// ********** SMOOTH SCROLL ********** //

function scrollTo(element, to, duration = 600) {

    // Checkout Tejas Shah's answer: https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
    if (duration <= 0) {
        return;
    }

    let difference  = to - element.scrollTop;
    let perTick     = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;

        if (element.scrollTop == to) {
            return
        };

        // Ease-out scroll
        if(duration > 100) {
            scrollTo(element, to, duration - 10);
        } else if(duration > 20) {
            scrollTo(element, to, duration - 5);
        } else {
            scrollTo(element, to, duration - 2);
        }
    }, 10);
}

function bindElementsToEvents() {

    // ********** BIND NAV ITEMS TO THEIR REF ********** //
    
    let navItems = document.querySelectorAll("nav ul li");
    
    for(let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener(eventSuitedForClientBrowser, function(){
            // Close nav
            document.querySelector("nav ul").classList.remove("open");
            // Scroll to ref
            scrollTo(document.documentElement , document.querySelector(navItems[i].getAttribute("ref")).offsetTop - 50, 200);
        }, false);
    }

    // ********** NAV BURGER LISTENER ********** //
    
    document.querySelector("#nav-burger").addEventListener(eventSuitedForClientBrowser, function(){
    
        if(document.querySelector("nav ul").classList.contains("open")) {
            // Close nav
            document.querySelector("nav ul").classList.remove("open")
        } else {
            // Open nav
            document.querySelector("nav ul").classList.add("open");
        }
    }, false);

    // ********** BACK TO TOP LISTENER ********** //

    let backToTop = document.querySelector("#backToTop");

    // Scroll
    backToTop.addEventListener(eventSuitedForClientBrowser, function(){
        scrollTo(document.documentElement , document.querySelector("#page-width").offsetTop - 50, 200);
    }, false);

    // Rotate
    backToTop.addEventListener("mouseover", function(){
        backToTop.classList.add("rotate");
    }, false);
    backToTop.addEventListener("mouseout", function(){
        backToTop.classList.remove("rotate");
    }, false);

}

// ********** SCROLL LISTENER ********** //

// let contentsToReveal = document.querySelectorAll(".scrollFade");

function revealContent() {

    let contentsToReveal = document.querySelectorAll(".scrollFade");
    let coeff = 0.7; // Small offset not to reveal too soon - the closer to zero the later the reveal

    for(let i = 0; i < contentsToReveal.length; i++) {
        
        if(contentsToReveal[i].getBoundingClientRect().top < window.screen.height * coeff) {
            
            if(!contentsToReveal[i].classList.contains("scrollFadeIn")) {
                contentsToReveal[i].classList.add("scrollFadeIn");
            }
        }
    }
}

// ********** ANIMATE HEADER ********** //

function animateHeader() {

    // Fade
    let fadingElements = document.querySelectorAll(".fade");
    for(let i = 0; i < fadingElements.length; i++) {
        fadingElements[i].classList.add("fadeIn");
    }

    // Unstable
    let unstableElements = document.querySelectorAll(".unstable");
    unstableElements[0].classList.add("unstabilize-left");
    unstableElements[1].classList.add("unstabilize-right");
};


function handleDOMElements() {

    // ********** REVEAL NAV ********** //

    document.querySelector("nav").classList.add("move");

    // ********** ADD SKILLS ICONS ********** //

    let skills = document.querySelectorAll(".skill-wrapper");
    for(let i = 0; i < skills.length; i++) {
        let img = document.createElement("img");
        if(skills[i].hasAttribute("skill")) {
            img.setAttribute("src", "assets/public/img/logos/" + skills[i].getAttribute("skill") + ".png");
            skills[i].append(img);
        }
    }
}

function handleBodyLoad() {
    // Bind event listeners to DOM elements
    bindElementsToEvents();
    // Apply features on DOM elements
    handleDOMElements();
    // Reveal content regarding the scroll position
    revealContent(); // Run it once if client refreshes in the middle of the page without scrolling afterwards
    window.addEventListener("scroll", revealContent);
    // Animate header
    setTimeout(animateHeader, 400);
}
