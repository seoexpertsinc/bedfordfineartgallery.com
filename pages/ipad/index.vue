<template>
    <div>
        <div class="container secondary">
            <section class="wrapper clearfix">
                <ul class="productGrid2">
                    <li v-for="painting in paintings" :key="painting.slug">
                        <nuxt-link :to="`/ipad/${painting.slug.replace('-html', '.html')}`"
                            ><nuxt-picture
                                :src="getPaintingImage(painting)"
                                :alt="artistNameWithTinyDescription(painting.artist)"
                            />
                            <p class="artist_gallery_title">{{ artistNameWithTinyDescription(painting.artist) }}</p>
                        </nuxt-link>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import { artistNameWithTinyDescription } from '~/libs/artist'
import { loadGalleryPaintings } from '~/libs/paintings'

export default {
    layout: 'ipad',
    async asyncData({ $content }) {

        return {
            paintings: await loadGalleryPaintings({ $content })
        }
    },
    methods: {
      artistNameWithTinyDescription,
      getPaintingImage(painting) {
        return painting.gridImage || painting.mediumResImage || ''
      }
    },
}
</script>

<style scoped>
.secondary {
    background-color: #222;
}
</style>

<router>
  {
    path: '/ipad/'
  }
</router>

