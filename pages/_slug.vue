<template>
    <Painting v-if="type === 'painting'" :painting="object" />
    <Highlight v-else-if="type === 'highlight'" :highlight="object" />
    <ArtistBio v-else-if="type === 'artist'" :artist="object" />
</template>

<script>
import Highlight from '~/components/Highlight'
import ArtistBio from '~/components/ArtistBio'
import Painting from '~/components/Painting'
import { urlSlugToSlug } from '~/libs/slug'
import { loadPaintings } from '~/libs/paintings'

export default {
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
    components: { Highlight, ArtistBio, Painting },
    async asyncData({ $content, params, error }) {
        let object, type
        try {
            try {
                object = await $content('paintings', urlSlugToSlug(params.slug)).fetch()
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
                throw new Error('unknown page')
            }
        } catch (e) {
            error({ statusCode: 404, message: 'Page not found' })
        }

        return { object, type }
    },
}
</script>
