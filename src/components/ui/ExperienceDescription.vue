<template>
<div class="l-experience-description" >
    <p class="paragraph experience-about l-experience-description-about">{{ about }}</p>
    <ul class="experience-list l-experience-description-list" v-if="tasks.length">
        <li class="experience-list-item" v-for="task, index in tasks" :key="index">{{ task }}</li>
    </ul>
    <div class="experience-tools l-experience-description-tools" v-if="tools && tools.length">
        <div>Tools used</div>
        <div class="experience-tools-item" v-for="tool, index in tools" :key="index">
            <img class="experience-tools-item-image" :src="$getImageUrl(tool.logo, 'logos')" :alt="`${tool.label} logo`" :title="tool.label" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ExperienceDescription",
    props: {
        about: {
            type: String,
            required: true,
        },
        tasks: {
            type: Array,
            default: () => [],
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

.l-experience-description {
    &-about {
        position: relative;
        top: 0.75rem;
        width: fit-content;
        margin-top: 2.5rem;
        padding: 0 1rem;
        margin-left: 2rem;
        background: $light;
    }

    &-list {
        padding: 1rem;
        border-style: solid;
        border-width: 1px;
        border-color: darken($color: $light, $amount: 5);
        border-radius: 1rem;
        // margin-top: -0.5rem;
    }

    &-tools {
        position: relative;
        bottom: 2.25rem;
        width: fit-content;
        margin-left: auto;
        margin-right: 2rem;
        padding: 0 1rem;
        background: $light;
        justify-content: end;
    }
}

@media all and (max-width: $responsive) {
    .l-experience-description {
    }
}
</style>
