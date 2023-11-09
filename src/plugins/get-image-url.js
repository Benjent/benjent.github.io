export default {
    install(Vue) {
        Vue.prototype.$getImageUrl = (image, folder = "logos") => {
            // return image && new URL(`@/assets/images/${folder}/${image}`, import.meta.url).href alias are badly resolved
            return image && new URL(`/src/assets/images/${folder}/${image}`, import.meta.url).href
        }
    }
}
