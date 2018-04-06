
// ********** BIND NAV ITEMS TO THEIR REF ********** //

let navItems = document.querySelectorAll("nav ul li");

for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function(){
        scrollTo(document.documentElement , document.querySelector(navItems[i].getAttribute("ref")).offsetTop - 50, 200);
    }, false);
    navItems[i].addEventListener("touchstart", function(){
        scrollTo(document.documentElement , document.querySelector(navItems[i].getAttribute("ref")).offsetTop - 50, 200);
    }, false);
}

// ********** BACK TO TOP LISTENER ********** //

let backToTop = document.querySelector("#backToTop");

backToTop.addEventListener("click", function(){
    scrollTo(document.documentElement , document.querySelector("#page-width").offsetTop - 50, 200);
}, false);
backToTop.addEventListener("touchstart", function(){
    scrollTo(document.documentElement , document.querySelector("#page-width").offsetTop - 50, 200);
}, false);

backToTop.addEventListener("mouseover", function(){
    backToTop.classList.add("rotate");
}, false);
backToTop.addEventListener("mouseout", function(){
    backToTop.classList.remove("rotate");
}, false);

// ********** NAV BURGER LISTENER ********** //

function toggleNav() {
    // Toggle nav
    document.querySelector("#nav-burger").addEventListener("click", function(){

        if(document.querySelector("nav ul").classList.contains("open")) {
            // Close nav
            document.querySelector("nav ul").classList.remove("open")
        } else {
            // Open nav
            document.querySelector("nav ul").classList.add("open");
        }
    }, false);
    
};

toggleNav();

function closeNav() {

    // TODO factorize with top file code
    let listItems = document.querySelectorAll("nav ul li");

    // Add li listener
    for(let i = 0; i < listItems.length; i++) {
        // Close nav on li click
        listItems[i].addEventListener("click", function(){
            // Close nav
            document.querySelector("nav ul").classList.remove("open")
        }, false);
        listItems[i].addEventListener("touchstart", function(){
            // Close nav
            document.querySelector("nav ul").classList.remove("open")
        }, false);
    }

}

closeNav();

// ********** SCROLL LISTENER ********** //

let contentsToReveal = document.querySelectorAll(".scrollFade");

function revealContent() {

    let coeff = 0.7; // Small offset not to reveal too soon - the closer to zero the later the reveal

    for(let i = 0; i < contentsToReveal.length; i++) {
        
        if(contentsToReveal[i].getBoundingClientRect().top < window.screen.height * coeff) {
            
            if(!contentsToReveal[i].classList.contains("scrollFadeIn")) {
                contentsToReveal[i].classList.add("scrollFadeIn");
            }
        }
    }
}

revealContent(); // Run it once if client refreshes in the middle of the page without scrolling afterwards
window.addEventListener("scroll", revealContent);