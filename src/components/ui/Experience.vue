<template>
<div class="experience">
    <img class="experience-logo" :src="$getImageUrl(logo)" :alt="logoAlt">
    <h4 class="experience-title title title--4">
        <div class="text--primary">{{ position }}</div>
        <a class="link text--secondary experience-company" :href="href" target="_blank" v-if="href">{{ company }}</a>
        <div class="experience-company" v-else>{{ company }}</div>
    </h4>
    <div class="experience-note" v-if="note">{{ note }}</div>
    <div class="experience-duration">{{ period }} <span class="experience-localisation text--secondary">{{ localisation }}</span></div>
    <div class="experience-about">{{ about }}</div>
    <ul class="experience-list">
        <li class="experience-list-item" v-for="task, index in tasks" :key="index">{{ task }}</li>
    </ul>
    <div class="experience-tools" v-if="tools && tools.length">
        <div>Tools used</div>
        <div class="experience-tools-item" v-for="tool, index in tools" :key="index">
            <img class="experience-tools-item-image" :src="$getImageUrl(tool.logo, 'logos')" :alt="`${tool.label} logo`" :title="tool.label" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Experience",
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
