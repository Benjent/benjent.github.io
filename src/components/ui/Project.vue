<template>
<div class="experience l-project">
    <Card :image="image" :alt="imageAlt" >
        <h4 class="l-project-title title title--4 text--secondary">{{ title }}</h4>
        <div class="l-project-description">
            <p class="paragraph">{{ description }}</p>
            <Button color="secondary" class="l-project-link" :href="href" target="_blank">See the project live</Button>
            <h5 class="l-project-conditions title title--6" v-if="conditions.length > 0">Conditions:</h5>
            <ul class="experience-list">
                <li class="experience-list-item" v-for="condition, index in conditions" :key="index">{{ condition }}</li>
            </ul>
        </div>
    </Card>
</div>
</template>

<script>
import Button from "./Button.vue"
import Card from "./Card.vue"

export default {
    name: "Project",
    components: {
        Button,
        Card,
    },
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
    &-main {
        max-width: 40%;
    }

    &-title {
        margin-bottom: 20px;
    }

    &-description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
}

@media all and (max-width: $responsive) {
    .l-project {
        &-main {
            max-width: 100%;
        }
    }
}
</style>