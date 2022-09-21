<template>
    <div>
        <div class="artwork_header">
            <h1>Art Lovers' Niche - {{ date }}</h1>
            <span class="hr"></span>
        </div>

        <div style="max-width: 660px; margin: auto">
            <div style="padding-bottom: 20px">
                <p style="margin: 0px">
                    <nuxt-link to="/"
                        ><nuxt-img
                            src="/images/Top-Banner.jpg"
                            alt="Art Lovers' Niche"
                            style="width: 100%; height: auto; max-width: 660px; margin: auto; display: block"
                    /></nuxt-link>
                </p>

                <div v-interpolation v-html="artLoversNicheArticle.body"></div>
            </div>

            <p style="margin: 0px">
                <nuxt-link to="/"
                    ><nuxt-img
                        loading="lazy"
                        src="/mailers/img/notepad2.jpg"
                        style="width: 100%; height: auto; max-width: 660px; margin: auto; display: block"
                /></nuxt-link>
            </p>

            <p><nuxt-link class="readmore" to="highlights.html">Back to Articles</nuxt-link></p>
        </div>
    </div>
</template>

<script>
import { formatDateNoTime } from '~/libs/format-date'

export default {
    props: {
        artLoversNicheArticle: {
            type: Object,
            required: true,
        },
    },
    computed: {
        date() {
            return formatDateNoTime(this.artLoversNicheArticle.date)
        },
    },
}
</script>
