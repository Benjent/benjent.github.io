<template>
<div class="home">
    <nav ref="nav" class="home-nav">
        <!-- <img class="home-nav-burger" src="@/assets/images/icons/nav-burger.svg" alt="Nav burger"> -->
        <button class="home-nav-item" v-for="item in nav" :key="item.value" @click="scrollToRef(item.value)">{{ item.label }}</button>
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
                <Experience
                    :position="item.position"
                    :company="item.company"
                    :href="item.link"
                    :description="item.description"
                    :period="item.period"
                    :localisation="item.localisation"
                    :tasks="item.tasks"
                    :logo="item.logo"
                    :logoAlt="item.alt"
                />
            </li>
        </ul>
    </PageSection>
    <PageSection ref="education" id="education" class="home-education" title="Education" titleColor="secondary" color="tertiary">
        <ul class="list">
            <li class="list-item scroll-fade" v-for="item in education" :key="item.institution">
                <Education
                    :title="item.title"
                    :diploma="item.diploma"
                    :href="item.link"
                    :period="item.period"
                    :institution="item.institution"
                    :description="item.description"
                    :logo="item.logo"
                    :logoAlt="item.alt"
                />
            </li>
        </ul>
    </PageSection>
    <PageSection ref="projects" id="projects" class="home-projects" title="Projects" titleColor="tertiary" color="secondary">
        <Project class="scroll-fade" v-for="item in projects" :key="item.title" :title="item.title" :href="item.link" :description="item.description" :conditions="item.conditions" :image="$getImageUrl(item.image, 'projects')" :imageAlt="item.alt"/>
    </PageSection>
    <PageSection ref="skills" id="skills" class="home-skills" title="Tools" titleColor="secondary" color="quaternary">
        <div class="home-skills-stack">
            <div>
                <h3 class="title title--4 text--primary scroll-fade">Software and web development</h3>
                <div class="home-skills-list scroll-fade">
                    <Tag class="home-skills-list-item" v-for="item in skills.dev" :key="item.label" :label="item.label" :image="$getImageUrl(item.logo)"></Tag>
                </div>
            </div>
            <div>
                <h3 class="title title--4 text--primary scroll-fade">Audiovisual</h3>
                <ul class="home-skills-list scroll-fade">
                    <li class="tag home-skills-list-item" v-for="item in skills.media" :key="item.logo">
                        <span class="skill">{{ item.label }}</span>
                        <img class="tag-image" v-if="item.logo" :src="$getImageUrl(item.logo)" :alt="`${item.label} logo`">
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="title title--4 text--primary scroll-fade">Languages</h3>
                <ul class="home-skills-list scroll-fade">
                    <li class="tag home-skills-list-item" v-for="item in skills.languages" :key="item.logo">
                        <span class="skill">{{ item.label }}</span>
                        <img class="tag-image" v-if="item.logo" :src="$getImageUrl(item.logo, 'flags')" :alt="`${item.label} logo`">
                    </li>
                </ul>
            </div>
        </div>
    </PageSection>
    <section ref="contact" id="contact" class="home-contact">
        <div class="page">
            <h3 class="title title--3 scroll-fade text--light">Contact</h3>
            
            <div class="home-contact-details">
                <!-- <div class="spacing" v-if="$mq !== 'responsive'"></div> Uncomment if use skate photo -->
                <div>
                    <h4 class="title title--4 text--light scroll-fade"><span class="unwrappable">benjaminjeanmorvan</span>@gmail.com</h4>
                    <h4 class="title title--4 text--light scroll-fade"><a class="link" href="https://www.linkedin.com/in/benjamin-morvan/" target="_blank">LinkedIn</a></h4>
                </div>
            </div>
        </div>
        <footer class="home-footer">
            <button id="backToTop" class="back-to-top" @click="scrollToRef('top')" @mouseover="rotateBackToTop" aria-label="Back to top">
                <img src="../assets/images/icons/top-arrow.svg" alt="Back to top" aria-hidden="true" focusable="false" />
            </button>
            <p class="text--light home-contact-copyright">Benjamin Morvan - <time :datetime="copyright">{{ copyright }}</time></p>
        </footer>
    </section>
</div>
</template>

<script>
import Education from "@/components/ui/Education.vue"
import Experience from "@/components/ui/Experience.vue"
import PageSection from "@/components/ui/PageSection.vue"
import Project from "@/components/ui/Project.vue"
import Separation from "@/components/ui/Separation.vue"
import Tag from "@/components/ui/Tag.vue"

export default {
    name: "Home",
    components: {
        Education,
        Experience,
        PageSection,
        Project,
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
                { label: "Tools", value: "skills" },
                { label: "Contact", value: "contact" },
            ],
            experience: [
                {
                    logo: "octopus.png",
                    alt: "Octopus Energy France logo",
                    position: "Full-stack web developer",
                    company: "Octopus Energy France",
                    description: "(Previously Plüm énergie)",
                    link: "https://octopusenergy.fr/",
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
                    description: "(Previously DCNS)",
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
                    title: "Computer Science, Multimedia and Network",
                    diploma: "engineering diploma",
                    period: "2015 - 2018",
                    institution: "ENSSAT Lannion, France",
                    link: "https://www.enssat.fr/",
                    description: "Apprenticeship studies with Naval Group",
                },
                {
                    logo: "iut-dijon.png",
                    alt: "IUT Dijon logo",
                    title: "Multimedia and Web Professions",
                    diploma: "technology degree",
                    period: "2013 - 2015",
                    institution: "Dijon University Institute of Technology, France",
                    link: "https://iutdijon.u-bourgogne.fr/www/formations/buts/but-mmi.html",
                },
                {
                    logo: "de-gaulle.png",
                    alt: "Lycée International Charles de Gaulle logo",
                    title: "Science",
                    diploma: "A levels",
                    period: "2010 - 2013",
                    institution: "Lycée International Charles de Gaulle, Dijon, France",
                    link: "http://www.lycee-internationalcdg.fr/",
                    description: "(Previously Lycée Européen Charles de Gaulle)",
                },
            ],
            projects: [
                {
                    image: "prog-snack.png",
                    alt: "Prog Snack screenshot",
                    title: "Prog Snack",
                    description: "Webapp to browse music albums from the Progressive Rock genre. Initially a Vue.js tryout and sandbox project, I mainly maintain its content from time to time.",
                    link: "https://benjent.github.io/prog-snack",
                    conditions: [
                        "Serverless",
                        "Zero-hosting-cost",
                        "Zero-deployment-cost",
                        "Databaseless (fast and easy way to edit the data through the code)",
                        "Vue.js 2",
                        "SCSS",
                        "Autodeployment",
                        "Responsive design",
                    ],
                },
                {
                    image: "nanovizer.png",
                    alt: "NanoViZer screenshot",
                    title: "NanoViZer",
                    description: "Interactive data-visualisation and chart-saver tool assisting researchers in their work. This is a front-end solution to be used with a locally-running server written in Python.",
                    link: "https://benjent.github.io/nanovizer",
                    conditions: [
                        "Interactive charts",
                        "Fewest impacts on the existing back-end solution",
                        "Zero-hosting-cost",
                        "Zero-deployment-cost",
                        "Vue.js 3",
                        "SCSS",
                        "D3.js",
                        "Autodeployment",
                    ],
                },
            ],
            skills: {
                dev: [
                    { label: "HTML", logo: "html.png" },
                    { label: "Pug", logo: "pug.png" },

                    { label: "CSS", logo: "css.png" },
                    { label: "SCSS", logo: "sass.png" },
                    { label: "BEM", logo: "bem.png" },
                    { label: "SMACSS", logo: "smacss.png" },
                    { label: "Styled-components", logo: "styled-components.png" },

                    { label: "JS", logo: "js.png" },
                    { label: "JSDoc" },
                    { label: "TS", logo: "ts.png" },

                    { label: "Vue.js", logo: "vue.png" },
                    { label: "React", logo: "react.png" },
                    { label: "Next.js", logo: "next.png" },
                    { label: "Polymer", logo: "polymer.png" },
                    { label: "Angular", logo: "angular.png" },

                    { label: "Moment.js", logo: "moment.png" },
                    { label: "Day.js" },
                    { label: "Date-fns", logo: "datefns.png" },

                    { label: "Yup" },

                    { label: "Formik", logo: "formik.png" },

                    { label: "CesiumJS", logo: "cesium.png" },

                    { label: "D3", logo: "d3.png" },
                    { label: "Recharts" },

                    { label: "Storybook", logo: "storybook.png" },

                    { label: "Axios", logo: "axios.png" },
                    { label: "GraphQL", logo: "gql.png" },
                    
                    { label: "Vite", logo: "vite.png" },
                    { label: "Webpack", logo: "webpack.png" },
                    
                    { label: "ESLint", logo: "eslint.png" },
                    { label: "Prettier", logo: "prettier.png" },
                    { label: "Husky" },
                    { label: "Grunt", logo: "grunt.png" },

                    { label: "Git", logo: "git.png" },
                    { label: "Conventional commits", logo: "conventional-commits.png" },
                    { label: "GitHub", logo: "github.png" },
                    { label: "Vercel", logo: "vercel.png" },
                    { label: "Docker", logo: "docker.png" },

                    { label: "Jest", logo: "jest.png" },
                    { label: "TestCafé", logo: "testcafe.png" },
                    { label: "Cypress", logo: "cypress.png" },
                    { label: "Jasmine", logo: "jasmine.png" },
                    { label: "Mocha", logo: "mocha.png" },
                    { label: "Chai", logo: "chai.png" },

                    { label: "Storyblok", logo: "storyblok.png" },
                    { label: "WordPress", logo: "wp.png" },
                    { label: "Handlebars", logo: "hb.png" },
                    { label: "Sendinblue", logo: "sendinblue.png" },

                    { label: "SQL" },
                    { label: "PostgreSQL", logo: "postgresql.png" },
                    { label: "PostGIS", logo: "postgis.png" },
                    { label: "Supabase", logo: "supabase.png" },
                    { label: "MongoDB", logo: "mongo.png" },
                    { label: "Metabase", logo: "metabase.png" },

                    { label: "Node.js", logo: "node.png" },
                    { label: "Java", logo: "java.png" },
                    { label: "J2EE", logo: "java.png" },
                    { label: "Python", logo: "py.png" },
                    { label: "Django", logo: "django.png" },
                    { label: "Flask", logo: "flask.webp" },
                    { label: "PHP", logo: "php.png" },
                    /*
                        Leftovers:
                        - Markup: md, xml, yml
                        - CSS: tailwind
                        - JS: jquery, lodash, knockout
                        - Infra: turborepo, ansible, jenkins
                        - SSR: nuxt, astro
                        - CMS: strapi, drupal
                        - Programming: C
                    */
                ],
                media: [
                    { label: "Audacity", logo: "audacity.png" },
                    { label: "Illustrator", logo: "ai.png" },
                    { label: "Photoshop", logo: "ps.png" },
                    { label: "InDesign", logo: "id.png" },
                    { label: "Premiere Pro", logo: "premiere.png" },
                    { label: "After Effects", logo: "ae.png" },
                ],
                languages: [
                    { label: "French (mother tongue)", logo: "fr.png" },
                    { label: "English (fluent, C1 level)", logo: "en.png" },
                    { label: "German (basic knowledge)", logo: "de.png" },
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
        width: 100%;
        background: $primary;
        color: $light;
        position: fixed;
        z-index: $zIndexNav;
        // top: calc(var(--nav-button-padding-vertical) * -2) - 16px; // TODO $font-size
        top: 0 - var(--nav-button-padding-vertical) - var(--nav-button-padding-vertical) - 16px; // TODO $font-size

        &-burger {
            display: none;
        }

        &-item {
            @include cta;

            letter-spacing: 3px;
            text-transform: uppercase;
            font-family: 'headline-font';

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

    &-skills {
        &-stack {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        &-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
    }

    &-contact {
        text-shadow: 0 0 20px $liquorice;
        background-color: $dark;
        // background-image: url('@/assets/images/photos/skate.jpg');
        background-image: url('@/assets/images/photos/bono.jpeg');
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

        &-copyright {
            text-shadow: 0 0 3px $liquorice;
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
