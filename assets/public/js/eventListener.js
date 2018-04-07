
// ********** BIND NAV ITEMS TO THEIR REF ********** //

// let navItems = document.querySelectorAll("nav ul li");
let navItems = document.getElementsByClassName("nav-item");

for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function(){
        // scrollTo(document.documentElement , document.querySelector(navItems[i].getAttribute("ref")).offsetTop - 50, 200);
        scrollTo(document.documentElement , document.getElementById(navItems[i].getAttribute("ref")).offsetTop - 50, 200);
    }, false);
}

// ********** BACK TO TOP LISTENER ********** //

// let backToTop = document.querySelector("#backToTop");
let backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function(){
    // scrollTo(document.documentElement , document.querySelector("#page-width").offsetTop - 50, 200);
    scrollTo(document.documentElement , document.getElementById("page-width").offsetTop - 50, 200);
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
    // document.querySelector("#nav-burger").addEventListener("click", function(){
    document.getElementById("nav-burger").addEventListener("click", function(){

        if(document.getElementById("nav-list").classList.contains("open")) {
            // Close nav
            document.getElementById("nav-list").classList.remove("open")
        } else {
            // Open nav
            document.getElementById("nav-list").classList.add("open");
        }
    }, false);
    
};

toggleNav();

function closeNav() {

    // TODO factorize with top file code
    // let listItems = document.querySelectorAll("nav ul li");

    // Add li listener
    for(let i = 0; i < navItems.length; i++) {
        // Close nav on li click
        navItems[i].addEventListener("click", function(){
            // Close nav
            document.getElementById("nav-list").classList.remove("open")
        }, false);
        navItems[i].addEventListener("touchstart", function(){
            // Close nav
            document.getElementById("nav-list").classList.remove("open")
        }, false);
    }

}

closeNav();

// ********** SCROLL LISTENER ********** //

// let contentsToReveal = document.querySelectorAll(".scrollFade");
let contentsToReveal = document.getElementsByClassName("scrollFade");

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