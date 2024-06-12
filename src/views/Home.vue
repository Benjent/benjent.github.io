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
            I enjoy designing the front-end architecture to make sure a corporate identity and style guide is correctly implemented.
            While not being a pixel-perfect enthusiast, I would rather focus on storybooks, UI kits or design systems.
        </p>
        <p class="paragraph paragraph--big text--light scroll-fade">
            When it comes to building large applications for a brand, I am heavily influenced by <a class="link text--secondary" href="http://smacss.com/"><abbr title="Scalable and Modular Architecture for Cascading Style Sheets">SMACSS</abbr></a> and <a class="link text--secondary" href="http://getbem.com/"><abbr title="Block Element Modifier">BEM</abbr></a> frameworks (with a less strict approach fueled by UI components) and generally speaking have a preference for business classes topped with utility classes over the other way around.
            I do love using <a class="link text--secondary" href="https://tailwindcss.com/">Tailwind CSS</a> when integrating smaller-sized web applications.
        </p>
        <p class="paragraph paragraph--big text--light scroll-fade">
            My favorite front-end framework is <a class="link text--secondary" href="https://vuejs.org/">Vue.js</a> and I like having a JS/TS-written back-end.
        </p>
        <img class="home-profile-photo" src="../assets/images/photos/square-briac.jpg" alt="Profile photo" />
    </PageSection>
    <PageSection ref="experience" id="experience" class="home-experience" title="Professional experience" titleColor="primary" color="light">
        <Experience
            class="text--dark scroll-fade"
            v-for="item in experience" :key="item.company"
            :position="item.position"
            :company="item.company"
            :href="item.link"
            :note="item.note"
            :period="item.period"
            :localisation="item.localisation"
            :about="item.about"
            :tasks="item.tasks"
            :tools="item.tools"
            :logo="item.logo"
            :logoAlt="item.alt"
        />
    </PageSection>
    <PageSection ref="education" id="education" class="home-education" title="Education" titleColor="secondary" color="tertiary">
        <Education
            class="scroll-fade"
            v-for="item in education" :key="item.institution"
            :title="item.title"
            :diploma="item.diploma"
            :href="item.link"
            :period="item.period"
            :institution="item.institution"
            :note="item.note"
            :logo="item.logo"
            :logoAlt="item.alt"
        />
    </PageSection>
    <PageSection ref="projects" id="projects" class="home-projects" title="Projects" titleColor="tertiary" color="secondary" breakout>
        <Project
            class="text--quaternary scroll-fade"
            v-for="item in projects"
            :key="item.title"
            :title="item.title"
            :href="item.link"
            :description="item.description"
            :conditions="item.conditions"
            :image="$getImageUrl(item.image, 'projects')"
            :imageAlt="item.alt"
            :logo="$getImageUrl(item.image, 'logos')"
            :logoAlt="`${item.title} logo`"
            :tools="item.tools"
        />
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
import education from "@/assets/data/education"
import experience from "@/assets/data/experience"
import projects from "@/assets/data/projects"
import skills from "@/assets/data/skills"

// TODO setup prettier + eslint + a11y + conventional commits

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
            experience,
            education,
            projects,
            skills,
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

<style lang="scss" scoped>
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
        // top: 0 - var(--nav-button-padding-vertical) - var(--nav-button-padding-vertical) - 16px; // TODO $font-size

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
            margin-top: 2.2rem;
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
        background-size: cover;
        background-attachment: fixed;
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
            background-attachment: scroll;
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
            background-attachment: scroll;
            background-size: 180%;
        }
    }
}
</style>
