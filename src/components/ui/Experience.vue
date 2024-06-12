<template>
<div class="experience l-experience">
    <header class="experience-header l-experience-header">
        <div>
            <div class="experience-duration text--primary">{{ period }}</div>
            <h4 class="experience-title title title--4 text--primary">{{ position }}</h4>
            <a class="link text--secondary experience-company" :href="href" target="_blank" v-if="href">{{ company }}</a>
            <div class="experience-company" v-else>{{ company }}</div>
        </div>
        <div>
            <img class="experience-logo" :src="$getImageUrl(logo)" :alt="logoAlt">
        </div>
    </header>
    <!-- <div class="experience-localisation">{{ localisation }}</div> -->
    <!-- <ExperienceDescription :about="about" :tasks="tasks" :tools="tools" /> -->
    <p class="paragraph experience-about">{{ about }}</p>
    <ul class="experience-list" v-if="tasks.length">
        <li class="experience-list-item" v-for="task, index in tasks" :key="index">{{ task }}</li>
    </ul>
    <div class="experience-tools l-experience-tools" v-if="tools && tools.length">
        <div>Tools used</div>
        <div class="experience-tools-item" v-for="tool, index in tools" :key="index">
            <img class="experience-tools-item-image" :src="$getImageUrl(tool.logo, 'logos')" :alt="`${tool.label} logo`" :title="tool.label" />
        </div>
    </div>
</div>
</template>

<script>
// import ExperienceDescription from "./ExperienceDescription.vue";

export default {
    name: "Experience",
    // components: {
    //     ExperienceDescription,
    // },
    props: {
        position: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        href: {
            type: String,
            default: null,
        },
        note: {
            type: String,
            default: null,
        },
        about: {
            type: String,
            required: true,
        },
        period: {
            type: String,
            required: true,
        },
        localisation: {
            type: String,
            required: true,
        },
        tasks: {
            type: Array,
            default: () => [],
        },
        tools: {
            type: Array,
            default: () => [],
        },
        logo: {
            type: String,
            required: true,
        },
        logoAlt: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.l-experience {
    // @include shadow();
    position: relative;
    // background: white;
    // padding: 2rem;
    // border-radius: 1rem;

    &-header {
        padding-bottom: 1rem;
        border-bottom: solid 2px $light;

        &-details {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }

    &-tools {
        justify-self: end;
    }
}
</style>
