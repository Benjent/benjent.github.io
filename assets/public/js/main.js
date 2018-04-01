function animateElements() {

    // Fade
    let fadingElements = document.querySelectorAll(".fade");
    for(let i = 0; i < fadingElements.length; i++) {
        fadingElements[i].classList.remove("fade");
    }
    // Nav
    document.querySelector("nav").classList.add("move");
    // Eye
    document.querySelector("#eye").addEventListener("mouseover", function(){
        document.querySelector("#eye").src = "assets/public/img/eyeCenter.jpg";
    }, false);
    document.querySelector("#eye").addEventListener("mouseout", function(){
        document.querySelector("#eye").src = "assets/public/img/eyeLeft.jpg";
    }, false);

}

animateElements();

function scrollTo(element, to, duration = 600) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
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


