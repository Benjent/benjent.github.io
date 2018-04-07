
// ********** NAV ANIMATIONS ********** //

function animateNav() {
    // Nav
    document.querySelector("nav").classList.add("move");
};

animateNav();

// ********** HEADER ANIMATIONS ********** //

function animateHeader() {

    // Fade
    let fadingElements = document.getElementsByClassName("fade");
    for(let i = 0; i < fadingElements.length; i++) {
        fadingElements[i].classList.add("fadeIn");
    }

    // Unstable
    let unstableElements = document.getElementsByClassName("unstable");
    unstableElements[0].classList.add("unstabilize-left");
    unstableElements[1].classList.add("unstabilize-right");
};

setTimeout(animateHeader, 400);

// ********** ADD SKILLS ICONS ********** //

function appendIconsToSkills() {
    let skills = document.getElementsByClassName("skill-wrapper");
    for(let i = 0; i < skills.length; i++) {
        let img = document.createElement("img");
        if(skills[i].hasAttribute("skill")) {
            img.setAttribute("src", "assets/public/img/logos/" + skills[i].getAttribute("skill") + ".png");
            skills[i].append(img);
        }
    }
}

appendIconsToSkills();

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

