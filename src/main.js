import Vue from "vue"

import mq from "./plugins/mq"
import smoothScroll from "./plugins/smooth-scroll"

import App from "./App.vue"

Vue.config.productionTip = false

Vue.use(mq)
Vue.use(smoothScroll)

new Vue({
    render: (h) => h(App),
}).$mount("#app")
