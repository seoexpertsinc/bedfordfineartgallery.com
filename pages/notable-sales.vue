<template>
    <Gallery :category="category" :paintings="paintings" />
</template>

<script>
import Gallery from "~/components/Gallery";
import { loadGalleryPaintings } from '~/libs/paintings'

const category = 'Recently Sold'

export default {
    components: { Gallery },
    async asyncData({ $content }) {
        return {
            paintings: await loadGalleryPaintings({ $content, sold: true }),
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
    path: '/notable_sales.html'
  }
</router>
