<template>
<div class="experience l-project">
    <div class="l-project-grid">
        <div class="l-project-grid-main">
            <h4 class="l-project-title title title--4">{{ title }}</h4>
            <aside v-if="$mq === 'responsive'" class="l-project-grid-aside">
                <a :href="href" target="_blank" class="l-project-image" :style="{ backgroundImage: `url(${image})` }" />
            </aside>
            <div class="l-project-description">
                <p class="paragraph title title--6">{{ description }}</p>
                <div>
                    <p class="l-project-conditions" v-if="conditions.length > 0">Conditions:</p>
                    <ul class="experience-list">
                        <li class="experience-list-item" v-for="condition, index in conditions" :key="index">{{ condition }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <aside v-if="$mq !== 'responsive'" class="l-project-grid-aside">
            <a :href="href" target="_blank" class="l-project-image" :style="{ backgroundImage: `url(${image})` }">
                <div class="l-project-image-overlay">
                    <img class="l-project-image-overlay-logo" v-if="logo" :src="logo" :alt="logoAlt" />
                </div>
            </a>
        </aside>
    </div>
    <footer class="l-project-footer">
        <a class="l-project-link link link--underline" :href="href" target="_blank">
            See the project live
        </a>
        <div class="l-project-tools">
            <div>Made with</div>
            <div class="l-project-tools-item" v-for="tool, index in tools" :key="index">
                <img class="l-project-tools-item-image" :src="$getImageUrl(tool.logo, 'logos')" :alt="`${tool.label} logo`" :title="tool.label" />
            </div>
        </div>
    </footer>
</div>
</template>

<script>
export default {
    name: "Project",
    props: {
        title: {
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
        conditions: {
            type: Array,
            default: () => [],
        },
        image: {
            type: String,
            required: true,
        },
        imageAlt: {
            type: String,
            required: true,
        },
        logo: {
            type: String,
            required: true,
        },
        logoAlt: {
            type: String,
            required: true,
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

.l-project {
    margin-bottom: 120px;

    &:nth-child(2n) {
        .l-project-grid {
            flex-direction: row-reverse;
        }
    }

    &-grid {
        display: flex;
        position: relative;
        width: 100%;
        gap: 60px;
    
        &-main {
            width: 40%;
        }

        &-aside {
            flex: 1;
        }
    }

    &-image {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        position: relative;
        border-radius: 10px;
        @include shadow($color: $shadowStrong);

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
            border-radius: 10px;

            &:hover {
                opacity: 1;
            }

            &-logo {
                width: 33%;
            }
        }
    }

    &-title {
        margin-bottom: 20px;
    }

    &-link {
        display: flex;
        &-icon {
            margin-left: 1em;
            width: 20px;
        }
    }

    &-description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    &-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-top: 40px;
    }

    &-tools {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;

        &-item {
            @include shadow();
            border-radius: 50%;
            background: $secondaryStrong;
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
    .l-project {
        margin-bottom: 80px;

        &-grid {
            &-main {
                width: 100%;
            }

            &-aside {
                width: 100%;
                height: 200px;
                margin-bottom: 20px;
            }
        }

        &-image {
            background-position: top;
        }

        &-link {
            display: flex;
            &-icon {
                width: 16px;
            }
        }

        &-footer {
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
        }

        &-tools {
            &-item {
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