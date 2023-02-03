<template>
<div class="home">
    <nav ref="nav" class="home-nav">
        <!-- <img class="home-nav-burger" src="@/assets/images/icons/nav-burger.svg" alt="Nav burger"> -->
        <div class="home-nav-item" v-for="item in nav" :key="item.value" @click="scrollToRef(item.value)">{{ item.label }}</div>
    </nav>
    <header ref="top" id="top" class="home-header">
        <div class="home-header-titles">
            <div class="move-right unstable red-bar-top"></div>
                <h1 class="title title--1 fade shake home-header-title text--dark">Benjamin Morvan</h1>
                <h2 class="title title--2 fade home-header-subtitle">
                    <div class="tinsel">Software engineer</div>
                    <div class="tinsel">Front-end architect</div>
                    <div class="tinsel">Full-stack web developer</div>
                </h2>
            <div class="move-left unstable red-bar-bottom"></div>
        </div>
    </header>
    <Separation color="light" />
    <PageSection ref="profile" id="profile" class="home-profile" title="Profile" titleColor="light" color="primary" >
        <p class="paragraph paragraph--big text--light scroll-fade home-profile-opener">
            <span class="home-profile-opener-quote">“</span>
            <span>I love web technologies as well as designing user-friendly interfaces to present data.</span>
        </p>
        <p class="paragraph paragraph--big text--light scroll-fade">
            I prefer developing webapps with a software approach rather than websites; if possible, intervening in the whole stack.
        </p>
        <p class="paragraph paragraph--big text--light scroll-fade">
            I enjoy designing the front-end architecture to make sure a corporate identity and style guide is correctly implemented. While not being a pixel-perfect enthusiast, I would rather focus on storybooks, UI kits or design systems.
        </p>
        <p class="paragraph paragraph--big text--light scroll-fade">
            I am heavily influenced by <a class="link text--secondary" href="http://smacss.com/"><abbr title="Scalable and Modular Architecture for Cascading Style Sheets">SMACSS</abbr></a> and <a class="link text--secondary" href="http://getbem.com/"><abbr title="Block Element Modifier">BEM</abbr></a> frameworks (with a less strict approach fueled by UI components) and generally speaking have a preference for business classes topped with utility classes over the other way around.
        </p>
        <p class="paragraph paragraph--big text--light scroll-fade">
            My favorite front-end framework is <a class="link text--secondary" href="https://vuejs.org/">Vue.js</a> and I like having a JS-written back-end.
        </p>
        <img class="home-profile-photo" src="../assets/images/photos/square-briac.jpg" alt="Profile photo" />
    </PageSection>
    <PageSection ref="experience" id="experience" class="home-experience" title="Professional experience" titleColor="primary" color="light">
        <ul class="list text--dark">
            <li class="list-item scroll-fade" v-for="item in experience" :key="item.company">
                <div class="experience text--dark">
                    <img class="experience-image" :src="require(`@/assets/images/logos/${item.logo}`)" :alt="`${item.alt} logo`">
                    <h5 class="title title--5" v-if="$mq === 'responsive'">
                        <div class="text--primary">{{ item.position }}</div>
                        <a class="link text--secondary" :href="item.link" target="_blank" v-if="item.link">{{ item.company }}</a>
                        <div v-else>{{ item.company }}</div>
                    </h5>
                    <h5 class="title title--5" v-else>
                        <span class="text--primary">{{ item.position }} - </span>
                        <a class="link text--secondary" :href="item.link" target="_blank" v-if="item.link">{{ item.company }}</a>
                        <span v-else>{{ item.company }}</span>
                    </h5>
                    <div class="experience-description" v-if="item.description">{{ item.description }}</div>
                    <div class="experience-duration">{{ item.period }}</div>
                    <div class="experience-localisation text--secondary">{{ item.localisation }}</div>
                    <ul class="experience-list">
                        <li class="experience-list-item" v-for="task, index in item.tasks" :key="index">{{ task }}</li>
                    </ul>
                </div>
            </li>
        </ul>
    </PageSection>
    <PageSection ref="education" id="education" class="home-education" title="Education" titleColor="secondary" color="tertiary">
        <ul class="list">
            <li class="list-item scroll-fade" v-for="item in education" :key="item.institution">
                <div class="experience">
                    <img class="experience-image" :src="require(`@/assets/images/logos/${item.logo}`)" :alt="`${item.alt} logo`">
                    <h5 class="title title--5">
                        <span class="text--secondary">{{ item.name }}</span> {{ item.diploma }}
                    </h5>
                    <div class="experience-duration">{{ item.period }}</div>
                    <a class="experience-localisation link" :href="item.link" target="_blank" v-if="item.link">{{ item.institution }}</a>
                    <div class="experience-localisation" v-else>{{ item.institution }}</div>
                    <p class="experience-description text--light" v-if="item.description">{{ item.description }}</p>
                </div>
            </li>
        </ul>
    </PageSection>
    <PageSection ref="projects" id="projects" class="home-projects" title="Projects" titleColor="tertiary" color="secondary">
        <div class="experience scroll-fade">
            <a v-if="$mq !== 'responsive'" href="https://benjent.github.io/prog-snack" target="_blank">
                <img class="home-projects-image" :src="require(`@/assets/images/projects/prog_snack.png`)" alt="Prog Snack screenshot">
            </a>
            <div class="home-projects-item">
                <h4 class="home-projects-title title title--4 text--quaternary">Prog Snack</h4>
                <img v-if="$mq === 'responsive'" class="home-projects-image" :src="require(`@/assets/images/projects/prog_snack.png`)" alt="Prog Snack screenshot">
                <div class="home-projects-description text--light">
                    <p class="home-projects-text">Webapp to browse music albums from the Progressive Rock genre. Initially a Vue.js tryout and sandbox project, I mainly maintain its content from time to time.</p>
                    <p class="home-projects-text">See the project <a class="link home-projects-link text--tertiary" href="https://benjent.github.io/prog-snack" target="_blank">here</a>.</p>
                    <h6 class="title title--6">Conditions:</h6>
                    <ul class="experience-list">
                        <li class="experience-list-item">serverless</li>
                        <li class="experience-list-item">zero-hosting-cost</li>
                        <li class="experience-list-item">zero-deployment-cost</li>
                        <li class="experience-list-item">databaseless (fast and easy way to edit the data through the code)</li>
                        <li class="experience-list-item">Vue.js 2</li>
                        <li class="experience-list-item">SCSS</li>
                        <li class="experience-list-item">Autodeployment</li>
                        <li class="experience-list-item">Responsive design</li>
                    </ul>
                </div>
            </div>
        </div>
    </PageSection>
    <PageSection ref="skills" id="skills" class="home-skills" title="Technical skills" titleColor="secondary" color="quaternary">
        <ul class="list text--primary">
            <li class="list-item scroll-fade">
                <h5 class="title title--5">Technologies I use everyday</h5>
                <ul class="home-skills-list">
                    <Tag class="home-skills-list-item" v-for="item in skills.core" :key="item.label" :label="item.label" :image="item.logo && require(`@/assets/images/logos/${item.logo}.png`)"></Tag>
                </ul>
            </li>
            <li class="list-item scroll-fade">
                <h5 class="title title--5">Technologies I use less often</h5>
                <ul class="home-skills-list">
                    <Tag class="home-skills-list-item" v-for="item in skills.layer" :key="item.label" :label="item.label" :image="item.logo && require(`@/assets/images/logos/${item.logo}.png`)"></Tag>
                </ul>
            </li>
            <li class="list-item scroll-fade">
                <h5 class="title title--5">Technologies I have used in the past</h5>
                <ul class="home-skills-list">
                    <Tag class="home-skills-list-item" v-for="item in skills.surface" :key="item.label" :label="item.label" :image="item.logo && require(`@/assets/images/logos/${item.logo}.png`)"></Tag>
                </ul>
            </li>
            <li class="list-item scroll-fade">
                <h5 class="title title--5">Other skills</h5>
                <ul class="home-skills-list">
                    <li class="tag home-skills-list-item" v-for="item in skills.misc" :key="item.logo">
                        <span class="skill">{{ item.label }}</span>
                        <img class="tag-image" v-if="item.logo" :src="require(`@/assets/images/logos/${item.logo}.png`)" :alt="`${item.label} logo`">
                    </li>
                </ul>
            </li>
            <li class="list-item scroll-fade">
                <h5 class="title title--5">Languages</h5>
                <ul class="home-skills-list">
                    <li class="tag home-skills-list-item" v-for="item in skills.languages" :key="item.logo">
                        <span class="skill">{{ item.label }}</span>
                        <img class="tag-image" v-if="item.logo" :src="require(`@/assets/images/flags/${item.logo}.png`)" :alt="`${item.label} logo`">
                    </li>
                </ul>
            </li>
        </ul>
    </PageSection>
    <section ref="contact" id="contact" class="home-contact">
        <div class="page">
            <h3 class="title title--3 scroll-fade text--light">Contact</h3>
            
            <div class="home-contact-details">
                <div class="spacing" v-if="$mq !== 'responsive'"></div>
                <div>
                    <h4 class="title title--4 text--light scroll-fade"><span class="unwrappable">benjaminjeanmorvan</span>@gmail.com</h4>
                    <h4 class="title title--4 text--light scroll-fade"><a class="link" href="https://www.linkedin.com/in/benjamin-morvan/" target="_blank">LinkedIn</a></h4>
                </div>
            </div>
        </div>
        <footer class="home-footer">
            <img
                id="backToTop"
                class="back-to-top"
                :src="require(`@/assets/images/icons/top-arrow.svg`)"
                alt="Back to top"
                @click="scrollToRef('top')"
                @mouseover="rotateBackToTop">
            <p class="text--light">Benjamin Morvan - <time :datetime="copyright">{{ copyright }}</time></p>
        </footer>
    </section>
</div>
</template>

<script>
import PageSection from "@/components/ui/PageSection.vue"
import Separation from "@/components/ui/Separation.vue"
import Tag from "@/components/ui/Tag.vue"

export default {
    name: "Home",
    components: {
        PageSection,
        Separation,
        Tag,
    },
    data() {
        return {
            nav: [
                { label: "Profile", value: "profile" },
                { label: "Experience", value: "experience" },
                { label: "Education", value: "education" },
                { label: "Projects", value: "projects" },
                { label: "Skills", value: "skills" },
                { label: "Contact", value: "contact" },
            ],
            experience: [
                {
                    logo: "octopus.png",
                    alt: "Octopus Energy France logo",
                    position: "Full-stack web developer",
                    company: "Octopus Energy France",
                    description: "Previously Plüm énergie",
                    link: "https://plum.fr/",
                    period: "Since Sep 2019",
                    localisation: "Saint-Denis, France",
                    tasks: [
                        "Software development for green electricity consumption and consumption awareness",
                        "Front-end architecture",
                        "Design system maintainance in collaboration with designers",
                        "Front-end training of team members",
                        "Automated E2E testing",
                    ],
                },
                {
                    logo: "forcity.png",
                    alt: "ForCity logo",
                    position: "Full-stack web developer",
                    company: "ForCity",
                    period: "Sep 2018 - Aug 2019",
                    localisation: "Cesson-Sévigné, France",
                    tasks: [
                        "Software development for geoworking decision",
                        "UX/UI thinking in collaboration with designers",
                    ],
                },
                {
                    logo: "naval-group.png",
                    alt: "Naval Group logo",
                    position: "Software engineer",
                    company: "Naval Group",
                    description: "Previously DCNS",
                    link: "https://www.naval-group.com",
                    period: "Sep 2015 - Sep 2018",
                    localisation: "Ollioules, France",
                    tasks: [
                        "R&D Software development for warships",
                        "Software architecture implementation allowing evolving guidelines integration",
                        "UX/UI design",
                    ],
                },
                {
                    logo: "parachute.png",
                    alt: "Parachute logo",
                    position: "Web integrator",
                    company: "Parachute",
                    link: "https://www.parachute.net/",
                    period: "Jan 2015 - Mar 2015",
                    localisation: "Glasgow, Scottland",
                    tasks: [
                        "Integration and deployment of responsive websites",
                    ],
                },
                {
                    logo: "fontaine.png",
                    alt: "Fontaine-lès-Dijon logo",
                    position: "Co-manager and polyvalent musician",
                    company: "Music Act Fontaine",
                    period: "Oct 2010 - June 2013",
                    localisation: "Fontaine-lès-Dijon, France",
                    tasks: [
                        "Live concert and rehearsal organisation",
                    ],
                },
            ],
            education: [
                {
                    logo: "enssat.png",
                    alt: "ENSSAT Lannion logo",
                    name: "Computer Science, Multimedia and Network",
                    diploma: "engineering diploma",
                    period: "2015 - 2018",
                    institution: "ENSSAT Lannion, France",
                    link: "https://www.enssat.fr/",
                    description: "Apprenticeship studies with Naval Group",
                },
                {
                    logo: "iut-dijon.png",
                    alt: "IUT Dijon logo",
                    name: "Multimedia and Web Professions",
                    diploma: "technology degree",
                    period: "2013 - 2015",
                    institution: "Dijon University Institute of Technology, France",
                    link: "https://iutdijon.u-bourgogne.fr/www/formations/buts/but-mmi.html",
                },
                {
                    logo: "de-gaulle.png",
                    alt: "Lycée International Charles de Gaulle logo",
                    name: "Science",
                    diploma: "A levels",
                    period: "2010 - 2013",
                    institution: "Lycée International Charles de Gaulle, Dijon, France",
                    link: "http://www.lycee-internationalcdg.fr/",
                    description: "Previously Lycée Européen Charles de Gaulle",
                },
            ],
            skills: {
                core: [
                    { label: "HTML", logo: "html" },
                    { label: "Pug", logo: "pug" },
                    { label: "CSS", logo: "css" },
                    { label: "SCSS", logo: "sass" },
                    { label: "JS", logo: "js" },
                    { label: "Vue.js", logo: "vue" },
                    { label: "React", logo: "react" },
                    { label: "Moment.js", logo: "moment" },
                    { label: "Git", logo: "git" },
                    { label: "TestCafé", logo: "testcafe" },
                ],
                layer: [
                    { label: "TS", logo: "ts" },
                    { label: "Handlebars", logo: "hb" },
                    { label: "Storyblok", logo: "storyblok" },
                    { label: "GraphQL", logo: "gql" },
                    { label: "Day.js" },
                    { label: "Date-fns", logo: "datefns" },
                    { label: "SQL" },
                    { label: "PostgreSQL", logo: "postgresql" },
                    { label: "Node.js", logo: "node" },
                    { label: "Docker", logo: "docker" },
                    { label: "Vercel", logo: "vercel" },
                    { label: "Cypress", logo: "cypress" },
                    { label: "Husky" },
                ],
                surface: [
                    { label: "Polymer", logo: "polymer" },
                    { label: "Angular", logo: "angular" },
                    { label: "PostGIS", logo: "postgis" },
                    { label: "MongoDB", logo: "mongo" },
                    { label: "Java", logo: "java" },
                    { label: "J2EE", logo: "java" },
                    { label: "Python", logo: "py" },
                    { label: "Django", logo: "django" },
                    { label: "PHP", logo: "php" },
                    { label: "Grunt", logo: "grunt" },
                    { label: "Jasmine", logo: "jasmine" },
                    { label: "Mocha", logo: "mocha" },
                    { label: "Chai", logo: "chai" },
                    { label: "WordPress", logo: "wp" },
                    { label: "CesiumJS", logo: "cesium" },
                ],
                misc: [
                    { label: "Audacity", logo: "audacity" },
                    { label: "Illustrator", logo: "ai" },
                    { label: "Photoshop", logo: "ps" },
                    { label: "InDesign", logo: "id" },
                    { label: "Premiere Pro", logo: "premiere" },
                    { label: "After Effects", logo: "ae" },
                ],
                languages: [
                    { label: "French (mother tongue)", logo: "fr" },
                    { label: "English (fluent, C1 level)", logo: "en" },
                    { label: "German (basic knowledge)", logo: "de" },
                ],
            },
            copyright: new Date().getFullYear(),
        }
    },
    mounted() {
        setTimeout(this.animateNav, 50)
        setTimeout(this.animateHeader, 400)

        // Reveal content regarding the scroll position
        this.revealContent() // Run it once if client refreshes in the middle of the page without scrolling afterwards
        window.addEventListener("scroll", this.revealContent)
    },
    methods: {
        animateHeader() {
            // Fade
            const fadingElements = document.querySelectorAll(".fade")
            fadingElements.forEach((el) => {
                el.classList.add("fade-in")
            })

            // Unstable
            const unstableElements = document.querySelectorAll(".unstable")
            unstableElements[0].classList.add("unstablize-left")
            unstableElements[1].classList.add("unstablize-right")
            
            // Tinsel
            const colors = ["primary", "secondary", "tertiary", "quaternary", "dark"]
            const tinselElements = document.querySelectorAll(".tinsel")
            tinselElements.forEach((item) => {
                // Replace character with itself wrapped in a span
                const text = item.innerHTML
                item.innerHTML = ""

                const characters = text.split("")
                characters.forEach((c) => {
                    const span = document.createElement("span")
                    span.innerHTML = c
                    item.appendChild(span)
                })
            })

            // Randomize colored character
            const characters = [...tinselElements].map((item) => [...item.childNodes]).flat()
            window.setInterval(() => {
                const randomCharacterIndex = Math.floor(Math.random() * characters.length)
                const randomColorIndex = Math.floor(Math.random() * colors.length)

                const randomCharacter = characters[randomCharacterIndex]
                
                if (randomCharacter.classList.length > 0) {
                    // Character has already been colorized, reset
                    randomCharacter.className = ""
                } else {
                    // Colorize character
                    const randomColor = colors[randomColorIndex]
                    randomCharacter.className = ""
                    randomCharacter.classList.add(`text--${randomColor}`)
                }
            }, 1000)

        },
        animateNav() {
            // Slide
            this.$refs.nav.classList.add("move")
        },
        revealContent() {
            const contentsToReveal = document.querySelectorAll(".scroll-fade")
            const coeff = 0.7 // Small offset not to reveal too soon - the closer to zero the later the reveal

            contentsToReveal.forEach((content) => {
                if (content.getBoundingClientRect().top < window.screen.height * coeff) {
                    if (!content.classList.contains("scroll-fade-in")) {
                        content.classList.add("scroll-fade-in")
                    }
                }
            })
        },
        rotateBackToTop(el) {
            const backToTop = el.target
            backToTop.classList.add("rotate")
            setTimeout(() => {
                backToTop.classList.remove("rotate")
            }, 200)
        },
        scrollToRef(ref) {
            const element = this.$refs[ref].$el || this.$refs[ref]
            this.$smoothScroll({ scrollTo: element })
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';

.home {
    @include theme;

    scroll-behavior: smooth;

    &-nav {
        @include shadow;

        display: flex;
        justify-content: center;
        letter-spacing: 3px;
        width: 100%;
        background: $primary;
        color: $light;
        text-transform: uppercase;
        font-family: 'headline-font';
        position: fixed;
        z-index: $zIndexNav;
        // top: calc(var(--nav-button-padding-vertical) * -2) - 16px; // TODO $font-size
        top: 0 - var(--nav-button-padding-vertical) - var(--nav-button-padding-vertical) - 16px; // TODO $font-size

        &-burger {
            display: none;
        }

        &-item {
            @include cta;

            padding: var(--nav-button-padding-vertical) var(--nav-button-padding-horizontal);
            border-bottom: solid 2px $primary;

            &:hover {
                border-color: $light;
            }
        }
    }

    &-header {
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: $light;

        .red-bar-top, .red-bar-bottom {
            width: $barWidth;
            position: absolute;
            opacity: 0;
        }

        .red-bar-top {
            border-bottom: solid $primary 5px;
            left: 0;
        }

        .red-bar-bottom {
            border-top: solid $primary 5px;
            right: 0;
        }

        &-titles {
            text-align: center;
            margin: 200px 0 300px 0;
        }

        &-title {
            padding-top: 20px;
        }

        &-subtitle {
            margin-bottom: 18px;
        }
    }

    &-profile {
        position: relative;

        &-opener {
            padding-top: 40px;

            &-quote {
                color: $secondary;
                float: left;
                padding-top: 0.6rem;
                font-size: 6rem;
                line-height: 1rem;
            }
        }

        &-photo {
            width: 240px;
            border-radius: 50%;
            border: solid 6px $light;
            // float: right;
            // position: relative;
            // top: 140px;
            position: absolute;
            right: 8%;
            bottom: -140px;
            z-index: $zIndexPhoto;
        }
    }

    &-projects {
        &-image {
            @include gradient();
            float: right;
            margin-left: -100%;
            position: relative;
            z-index: -1;
            width: 90%;
            box-sizing: border-box;
            border-radius: var(--border-radius);

            &:hover {
                mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1));
            }
        }

        &-item {
            max-width: 60%;
            padding-left: 40px;
        }

        &-title {
            margin-bottom: 20px;
        }


        &-description {
            padding-left: 40px;
        }

        &-text {
            margin-bottom: 20px;
        }

        &-link {
            font-style: italic;
        }
    }

    &-skills {
        &-list {
            margin-bottom: 20px;
            text-align: right;

            &-item {
                margin-bottom: 10px;
            }
        }
    }

    &-contact {
        background-color: $dark;
        background-image: url('~@/assets/images/photos/skate.jpg');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-details {
            display: flex;
            margin-top: 140px;
            margin-bottom: 10px; // Display background landscape image bigger
        }
    }

    &-footer {
        padding: 0 20px 20px 20px;
        text-align: center;

        .back-to-top {
            @include cta;

            width: 50px;
            margin-bottom: 20px;
        }
    }
}

@media all and (max-width: $responsive) {
    .home {
        &-nav {
            font-size: 0.8em;
        }

        &-header {
            &-titles {
                margin: 100px 0;
            }

            &-title {
                padding-top: 20px;
            }

            &-subtitle {
                margin-bottom: 18px;
            }
        }

        &-profile {
            &-photo {
                width: 100px;
                bottom: -80px;
            }
        }

        &-projects {
            &-image {
                @include gradient(bottom);
                float: none;
                display: block;
                margin: auto;
                margin-top: 10px;
                margin-bottom: -45%;
                filter: opacity(0.6);
                width: 100%;
                border: none;
                border-radius: var(--border-radius);
            }

            &-item {
                max-width: 100%;
                padding-left: 0;
            }

            &-title {
                margin: 0;
            }

            &-description {
                padding: 30px 20px;
                padding-top: 50px; // Let background image be visible
            }
        }

        &-skills {
            &-list {
                text-align: left;
            }
        }

        &-contact {
            background-size: 100%;

            &-details {
                margin-top: 40px; // Keep some margin to let up to the last content fade in during scroll
            }
        }
    }
}

@media all and (max-width: 600px) {
    .home {
        &-contact {
            background-size: 180%;
        }
    }
}
</style>
