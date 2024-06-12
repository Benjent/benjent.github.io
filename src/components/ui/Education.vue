<template>
<div class="experience">
    <header class="experience-header">
        <div>
            <h4 class="title title--5">
                <span class="text--secondary">{{ title }}</span> {{ diploma }}
            </h4>
            <div class="experience-duration">{{ period }}</div>
            <a class="experience-localisation link" :href="href" target="_blank" v-if="href">{{ institution }}</a>
            <div class="experience-localisation" v-else>{{ institution }}</div>
            <p class="experience-note text--secondary" v-if="note">{{ note }}</p>
        </div>
        <div>
            <img class="experience-logo" :src="$getImageUrl(logo)" :alt="logoAlt">
        </div>
    </header>
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
        note: {
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
