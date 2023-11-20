<template>
<div class="l-card" >
    <div class="l-card-main">
        <slot />
    </div>
    <div class="l-card-image" :style="{ backgroundImage: `url(${image})` }"></div>
</div>
</template>

<script>
export default {
    name: "Card",
    props: {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: undefined,
        },
        imageAlt: {
            type: String,
            default: undefined,
        },
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.l-card {
    display: flex;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    background: $tertiary;

    &-main {
        padding: 28px;
        padding-right: 0; // Clip-path serves as padding
        background: $tertiary;
        width: 50%;
    }
    
    &-image {
        width: 50%;
        clip-path: polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0% 40%);
        background-size: cover;
        background-position: center;
    }
}

@media all and (max-width: $responsive) {
    .l-card {
        flex-direction: column-reverse;

        &-main {
            width: auto;
            padding: 20px;
        }

        &-image {
            height: 60px;
            width: 100%;
            clip-path: none;
            background-position: top;
        }
    }
}
</style>
