import Vue from "vue"

import getImageUrl from "./plugins/get-image-url"
import mq from "./plugins/mq"
import smoothScroll from "./plugins/smooth-scroll"

import App from "./App.vue"

Vue.config.productionTip = false

Vue.use(getImageUrl)
Vue.use(mq)
Vue.use(smoothScroll)

new Vue({
    render: (h) => h(App),
}).$mount("#app")
