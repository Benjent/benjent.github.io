<template>
<section :id="id" class="l-page-section" :class="`l-page-section--${color}`">
    <div class="page">
        <h3 class="title title--3 scroll-fade" :class="`text--${titleColor}`">{{title}}</h3>
        <slot></slot>
    </div>
    <Separation v-if="!separatorless" :color="color" />
</section>
</template>

<script>
import Separation from "./Separation.vue"

export default {
    name: "PageSection",
    components: {
        Separation,
    },
    props: {
        color: {
            type: String,
            required: true,
            validator(value) {
                return ["primary", "secondary", "tertiary", "quaternary", "quinary", "light", "dark"].includes(value)
            },
        },
        title: {
            type: String,
            required: true,
        },
        titleColor: {
            type: String,
            required: true,
            validator(value) {
                return ["primary", "secondary", "tertiary", "quaternary", "quinary", "light", "dark"].includes(value)
            },
        },
        id: {
            type: String,
            required: true,
        },
        separatorless: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.l-page-section {
    @include palette();
}
</style>
