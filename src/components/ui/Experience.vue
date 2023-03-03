<template>
<div class="experience">
    <img class="experience-image" :src="require(`@/assets/images/logos/${logo}`)" :alt="logoAlt">
    <h4 class="title title--5" v-if="$mq === 'responsive'">
        <div class="text--primary">{{ position }}</div>
        <a class="link text--secondary" :href="href" target="_blank" v-if="href">{{ company }}</a>
        <div v-else>{{ company }}</div>
    </h4>
    <h4 class="title title--5" v-else>
        <span class="text--primary">{{ position }} - </span>
        <a class="link text--secondary" :href="href" target="_blank" v-if="href">{{ company }}</a>
        <span v-else>{{ company }}</span>
    </h4>
    <div class="experience-description" v-if="description">{{ description }}</div>
    <div class="experience-duration">{{ period }}</div>
    <div class="experience-localisation text--secondary">{{ localisation }}</div>
    <ul class="experience-list">
        <li class="experience-list-item" v-for="task, index in tasks" :key="index">{{ task }}</li>
    </ul>
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
        description: {
            type: String,
            default: null,
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
