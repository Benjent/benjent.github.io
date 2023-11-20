<template>
<div class="experience l-project">
    <a v-if="$mq !== 'responsive'" :href="href" target="_blank">
        <img class="l-project-image" :src="$getImageUrl(image, 'projects')" :alt="imageAlt">
    </a>
    <div class="l-project-main">
        <h4 class="l-project-title title title--4 text--quaternary">{{ title }}</h4>
        <img v-if="$mq === 'responsive'" class="l-project-image" :src="$getImageUrl(image, 'projects')" :alt="imageAlt">
        <div class="l-project-description text--light">
            <p class="paragraph">{{ description }}</p>
            <p class="paragraph"><a class="link l-project-link text--tertiary" :href="href" target="_blank">See the project live</a></p>
            <h5 class="l-project-conditions title title--6" v-if="conditions.length > 0">Conditions:</h5>
            <ul class="experience-list">
                <li class="experience-list-item" v-for="condition, index in conditions" :key="index">{{ condition }}</li>
            </ul>
        </div>
    </div>
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
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.l-project {
    &-image {
        @include gradient();
        float: right;
        margin-left: -100%;
        position: relative;
        z-index: -1;
        width: 90%;
        box-sizing: border-box;
        border-radius: var(--border-radius);

        &:hover {
            mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1));
        }
    }

    &-main {
        max-width: 60%;
        padding-left: 40px;
    }

    &-title {
        margin-bottom: 20px;
    }

    &-description {
        padding-left: 40px;
    }

    &-conditions {
        margin-top: 20px;
    }

    &-link {
        font-style: italic;
    }
}

@media all and (max-width: $responsive) {
    .l-projects {
        &-image {
            @include gradient(bottom);
            float: none;
            display: block;
            margin: auto;
            margin-top: 10px;
            margin-bottom: -45%;
            filter: opacity(0.6);
            width: 100%;
            border: none;
            border-radius: var(--border-radius);
        }

        &-main {
            max-width: 100%;
            padding-left: 0;
        }

        &-title {
            margin: 0;
        }

        &-description {
            padding: 30px 20px;
            padding-top: 50px; // Let background image be visible
        }
    }
}
</style>