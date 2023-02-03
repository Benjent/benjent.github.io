<template>
<div class="l-separation">
    <div class="separation" :class="`separation--${color}`"></div>
</div>
</template>

<script>
export default {
    name: "Separation",
    props: {
        color: {
            type: String,
            required: true,
            validator(value) {
                return ["primary", "secondary", "tertiary", "quaternary", "quinary", "light", "dark"].includes(value)
            },
        },
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.l-separation {
    filter: drop-shadow(0px 10px 5px $shadow);
    position: relative;
    z-index: $zIndexSeparator;
}
</style>
