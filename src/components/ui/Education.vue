<template>
<div class="experience">
    <img class="experience-image" :src="require(`@/assets/images/logos/${logo}`)" :alt="logoAlt">
    <h4 class="title title--5">
        <span class="text--secondary">{{ title }}</span> {{ diploma }}
    </h4>
    <div class="experience-duration">{{ period }}</div>
    <a class="experience-localisation link" :href="href" target="_blank" v-if="href">{{ institution }}</a>
    <div class="experience-localisation" v-else>{{ institution }}</div>
    <p class="experience-description text--light" v-if="description">{{ description }}</p>
</div>
</template>

<script>
export default {
    name: "Education",
    props: {
        title: {
            type: String,
            required: true,
        },
        diploma: {
            type: String,
            required: true,
        },
        href: {
            type: String,
            default: null,
        },
        period: {
            type: String,
            required: true,
        },
        institution: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: null,
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
