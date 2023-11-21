<template>
<component :is="href ? 'a' : 'button'" class="button" :class="`button--${color}`">
    <slot />
</component>
</template>

<script>
export default {
    name: "Button",
    props: {
        color: {
            type: String,
            required: true,
            validator(value) {
                return ["primary", "secondary", "tertiary", "quaternary", "quinary"].includes(value)
            },
        },
        href: {
            type: String,
        },
        target: {
            type: String,
        },
    },
}
</script>
