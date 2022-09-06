<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix artist_title_container">
                <PaintingHeader :painting="painting" />

                <div class="col_40 artwork">
                    <Zoom :mobile="false" :painting="painting" />
                    <p class="zoom">Click image to zoom</p>
                </div>

                <div class="col_60 artwork_details">
                    <template v-if="painting.youtubeEmbedLink">
                        <YouTubeVideo :link="painting.youtubeEmbedLink" />
                    </template>
                    <template v-else>
                        <!-- eslint-disable vue/no-v-html -->
                        <div
                            v-interpolation
                            class="artist_bio detail_content"
                            v-html="$md.render(painting.body)"
                        />
                        <!--eslint-enable-->
                    </template>
                </div>

                <div
                    v-if="painting.youtubeEmbedLink"
                    v-interpolation
                    class="artist_bio detail_content"
                    v-html="$md.render(painting.body)"
                />
                <!--eslint-enable-->

                <div class="breadcrumb"><nuxt-link to="/ipad/">Back to Gallery</nuxt-link></div>
            </section>
        </div>
    </div>
</template>

<script>
import { urlSlugToSlug } from '~/libs/slug'
import { artistNameWithTinyDescription } from '~/libs/artist'
import YouTubeVideo from '~/components/YouTubeVideo'

export default {
    components: { YouTubeVideo },
    layout: 'ipad',
    async asyncData({ $content, params, error }) {
        let painting
        try {
            painting = await $content('paintings', urlSlugToSlug(params.slug.replace('/ipad/', ''))).fetch()
            painting.artist = await $content('artists', painting.artist)
                .only(['name', 'tinyDescription', 'slug', 'alias', 'hasLandingPage'])
                .fetch()
        } catch (e) {
            error({ statusCode: 404, message: 'Page not found' })
        }

        return {
            painting,
            artistNameWithTinyDescription: artistNameWithTinyDescription(painting.artist),
        }
    },
}
</script>

<style scoped>
body {
    background-color: #f9f9f2;
}
.compliment {
    display: none;
}
.breadcrumb {
    clear: both;
    text-align: center;
    position: absolute;
    top: 10px;
    left: 10px;
}
.breadcrumb a {
    border: none;
    background-color: #742924;
    padding: 8px 12px;
    color: #f9f9f2;
    text-transform: uppercase;
    font-size: 15px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    display: block;
}
.artist_bio {
    clear: both;
    max-width: 960px;
    padding-top: 10px;
}
</style>
