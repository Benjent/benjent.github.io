
// ********** NAV ANIMATIONS **********//
function animateNav() {
    // Nav
    document.querySelector("nav").classList.add("move");
};animateNav();

// ********** EYE LISTENER **********//
function animateEye() {
    // Eye
    document.querySelector("#eye").addEventListener("mouseover", function(){
        document.querySelector("#eye").src = "assets/public/img/eyeCenter.jpg";
    }, false);
    document.querySelector("#eye").addEventListener("mouseout", function(){
        document.querySelector("#eye").src = "assets/public/img/eyeLeft.jpg";
    }, false);
};animateEye();

// ********** HEADER ANIMATIONS **********//
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
};setTimeout(animateHeader, 400)

// ********** SMOOTH SCROLL **********//
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

let navItems = document.querySelectorAll("nav ul li");

for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function(){
        scrollTo(document.documentElement , document.querySelector(navItems[i].getAttribute("ref")).offsetTop - 80, 200);
    }, false);
}

document.querySelector("#backToTop").addEventListener("click", function(){
    scrollTo(document.documentElement , document.querySelector("#top").offsetTop - 80, 200);
}, false);

// SKILLS ICONS
function appendIconsToSkills() {
    let skills = document.querySelectorAll(".skill-wrapper");
    for(let i = 0; i < skills.length; i++) {
        let img = document.createElement("img");
        if(skills[i].hasAttribute("skill")) {
            img.setAttribute("src", "assets/public/img/logos/" + skills[i].getAttribute("skill") + ".png");
            skills[i].append(img);
        }
    }
}appendIconsToSkills();

