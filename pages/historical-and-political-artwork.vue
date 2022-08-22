<template>
    <Gallery :category="category" :paintings="paintings" />
</template>

<script>
import Gallery from "~/components/Gallery";
import { loadGalleryPaintings } from '~/libs/paintings'

const category = 'American Historic / Political'

export default {
    components: { Gallery },
    async asyncData({ $content }) {
        return {
            paintings: await loadGalleryPaintings({ $content, category }),
        }
    },
    data() {
        return {
            category,
        }
    },
}
</script>

<router>
  {
    path: '/historical_and_political_artwork.html'
  }
</router>
