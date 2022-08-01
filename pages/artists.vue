<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>Artists</h1>
                    <h2>A few of our featured 19th Century artists</h2>
                    <span class="hr"></span>
                </div>

                <div class="col_100">
                    <ArtistPreview
                        v-for="(artist, index) in artists"
                        :key="index"
                        :artist="artist"
                        :painting-to-grid-image="paintingToGridImage"
                    />
                </div>
            </section>
        </div>

        <div
            class="container footer_test"
            style="padding-top: 24px; width: 100%; margin: 0px auto; background-color: rgba(16, 88, 185, 1)"
        >
            <section class="wrapper" style="max-width: 860px; margin: auto">
                <TestimonialsScroll />
            </section>
        </div>
    </div>
</template>

<script>
import { loadPaintingToGridImage } from '~/libs/painting-images'
import ArtistPreview from '~/components/ArtistPreview'

export default {
    components: { ArtistPreview },
    async asyncData({ $content }) {
        const artists = await $content('artists').sortBy('name', 'asc').fetch()
        const paintingSlugs = artists.map((artist) => artist.paintings[0])

        return {
            artists,
            paintingToGridImage: await loadPaintingToGridImage({ $content, paintingSlugs }),
        }
    },
}
</script>

<router>
  {
    path: '/Artists.html'
  }
</router>
