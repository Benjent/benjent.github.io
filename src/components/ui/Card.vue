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
    <footer class="l-card-footer">
        <div class="l-card-footer-tool" v-for="tool, index in tools" :key="index">
            <img class="l-card-footer-tool-image" :src="$getImageUrl(tool.logo, 'logos')" :alt="`${tool.label} logo`" :title="tool.label" />
        </div>
    </footer>
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
        tools: {
            type: Array,
            default: () => [],
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
    background: $tertiary;
    border-radius: 20px;

    &-main {
        padding: 28px;
        padding-right: 0; // Clip-path serves as padding
        background: $tertiary;
        width: 50%;
        border-radius: 20px;
    }
    
    &-image {
        width: 50%;
        clip-path: polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0% 40%);
        background-size: cover;
        background-position: center;
        position: relative;
        border-radius: 0 20px 20px 0;

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
            border-radius: 0 20px 20px 0;

            &:hover {
                opacity: 1;
            }

            &-logo {
                width: 33%;
            }
        }
    }

    &-footer {
        position: absolute;
        bottom: -18px;
        right: 10px;
        display: flex;
        gap: 10px;

        &-tool {
            border-radius: 50%;
            border: solid 4px $light;
            background: rgba(255, 255, 255, 0.6);
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            &-image {
                max-width: 30px;
                max-height: 30px;
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
            border-radius: 0 0 20px 20px;
        }

        &-image {
            height: 60px;
            width: 100%;
            clip-path: none;
            background-position: top;
            border-radius: 20px 20px 0 0;
            
            &-overlay {
                border-radius: 20px 20px 0 0;

                &-logo {
                    width: auto;
                    height: 66%;
                }
            }
        }

        &-footer {
            &-tool {
                width: 30px;
                height: 30px;

                &-image {
                    max-width: 20px;
                    max-height: 20px;
                }
            }
        }
    }
}
</style>
