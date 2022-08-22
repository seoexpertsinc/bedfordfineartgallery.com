<template>
    <Gallery :category="category" :paintings="paintings" />
</template>

<script>
import Gallery from "~/components/Gallery";
import { loadGalleryPaintings } from '~/libs/paintings'

const category = 'Sporting Art'

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
    path: '/sporting_art.html'
  }
</router>
