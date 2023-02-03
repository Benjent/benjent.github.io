<template>
<div class="tag">
    <span class="tag-label">{{ label }}</span>
    <img class="tag-image" v-if="image" :src="image" :alt="`${label} logo`">
</div>
</template>

<script>
export default {
    name: "Tag",
    props: {
        label: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: undefined,
        },
    },
}
</script>
