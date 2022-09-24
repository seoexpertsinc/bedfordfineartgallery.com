<template>
    <Painting v-if="type === 'painting'" :painting="object" :testimonials="testimonials" />
    <Highlight v-else-if="type === 'highlight'" :highlight="object" :testimonials="testimonials"/>
    <ArtistBio v-else-if="type === 'artist'" :artist="object" :testimonials="testimonials"/>
    <ArtLoversNicheArticle v-else-if="type === 'artLoversNicheArticle'" :art-lovers-niche-article="object" :testimonials="testimonials"/>
</template>

<script>
import Highlight from '~/components/Highlight'
import ArtLoversNicheArticle from '~/components/ArtLoversNicheArticle'
import ArtistBio from '~/components/ArtistBio'
import Painting from '~/components/Painting'
import { urlSlugToSlug } from '~/libs/slug'
import { loadPaintings } from '~/libs/paintings'
import { loadShortTestimonials } from '~/libs/testimonials'

export default {
    components: { Highlight, ArtLoversNicheArticle, ArtistBio, Painting },
    async asyncData({ $content, params, error }) {
        const testimonials = await loadShortTestimonials($content)
        let object, type
        try {
            try {
                object = await $content('paintings', urlSlugToSlug(params.slug)).fetch()
                object.highlights = object.highlights || []

                for (let i = 0; i < object.highlights.length; i++) {
                    if (object.highlights[i].pairedPainting) {
                        const pairedPainting = await $content('paintings', object.highlights[i].pairedPainting).only(['title']).fetch()
                        object.highlights[i].pairedPainting = {
                            slug: object.highlights[i].pairedPainting,
                            title: pairedPainting.title,
                        }
                    }
                }

                object.artist = await $content('artists', object.artist).only(['name', 'tinyDescription', 'slug', 'alias', 'hasLandingPage']).fetch()
                type = 'painting'
            } catch (e) {}

            if (!object) {
                try {
                    object = await $content('articles', urlSlugToSlug(params.slug)).fetch()
                    type = 'highlight'
                } catch (e) {}
            }

            if (!object) {
                try {
                    object = await $content('artists', urlSlugToSlug(params.slug)).fetch()
                    object.paintingToObj = await loadPaintings({
                        $content,
                        paintingSlugs: object.paintings,
                        columns: ['slug', 'gridImage', 'status'],
                    })
                    type = 'artist'
                } catch (e) {}
            }

            if (!object) {
                try {
                    object = await $content('artLoversNicheArticles', urlSlugToSlug(params.slug)).fetch()
                    type = 'artLoversNicheArticle'
                } catch (e) {}
            }

            if (!object) {
                throw new Error('unknown page')
            }
        } catch (e) {
            error({ statusCode: 404, message: 'Page not found' })
        }

        return { object, type, testimonials }
    },
    head() {
        const script =
            this.type === 'painting'
                ? [
                      {
                          src: '//widget.artplacer.com/js/script.js',
                      },
                  ]
                : []
        return {
            script,
        }
    },
}
</script>
