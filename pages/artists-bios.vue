<template>
    <Gallery :category="category" :featuredPaintings="featuredPaintings" :paintings="paintings" />
</template>

<script>
import Gallery from "~/components/Gallery";
import { loadGalleryPaintings } from '~/libs/paintings'

export default {
    components: { Gallery },
    async asyncData({ $content }) {
        const paintings = await loadGalleryPaintings({ $content, additionalColumns: ['featured'] })

        return {
            featuredPaintings: paintings.filter((painting) => painting.featured),
            paintings: paintings.filter((painting) => !painting.featured),
        }
    },
    data() {
        return {
            category: 'All'
        }
    },
}
</script>

<router>
  {
    path: '/Artists--Bios.html',
    caseSensitive: true,
  }
</router>
