import VueMq from "vue-mq"

export default {
    install(Vue) {
        Vue.use(VueMq, {
            breakpoints: {
                responsive: 1024 + 1, // Synchronize with breakpoints.scss
                wide: Infinity,
            }
        })
    }
}
