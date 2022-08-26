import Vue from 'vue'

if (!Vue.__nextlead_head_mixin__) {
    Vue.__nextlead_head_mixin__ = true
    Vue.mixin({
        head() {
            return {
                meta: [{ hid: 'theme-color', name: 'theme-color', content: '#742924' }],
            }
        },
    })
}
