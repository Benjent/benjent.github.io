<template>
<div class="l-card" >
    <div class="l-card-main">
        <slot />
    </div>
    <a :href="href" target="_blank" class="l-card-image" :style="{ backgroundImage: `url(${image})` }">
        <div class="l-card-image-overlay">
            <img class="l-card-image-overlay-logo" v-if="logo" :src="logo" :alt="logoAlt" />
        </div>
    </a>
</div>
</template>

<script>
export default {
    name: "Card",
    props: {
        image: {
            type: String,
            default: undefined,
        },
        imageAlt: {
            type: String,
            default: undefined,
        },
        logo: {
            type: String,
            default: undefined,
        },
        logoAlt: {
            type: String,
            default: undefined,
        },
        href: {
            type: String,
            default: undefined,
        },
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.l-card {
    @include shadow();
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
        position: relative;

        &-overlay {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.6);
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: all 0.2s;
            cursor: pointer;

            &:hover {
                opacity: 1;
            }

            &-logo {
                width: 33%;
            }
        }
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

            &-overlay {
                &-logo {
                    width: auto;
                    height: 66%;
                }
            }
        }
    }
}
</style>
