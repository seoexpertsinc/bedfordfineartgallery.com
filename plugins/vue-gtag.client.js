import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }, inject) => {
    Vue.use(
        VueGtag,
        {
            config: { id: 'UA-71843284-1' },
            includes: [{ id: 'AW-927063623' }],
        },
        app.router,
    )

    Vue.$gtag.set({
        phone_conversion_number: '7244590612',
    })

    inject('gtag', Vue.$gtag)
}
