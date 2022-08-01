<template>
	<Highlight v-if="type === 'highlight'" :highlight="object"/>
	<ArtistBio v-else-if="type === 'artist'" :artist="object"/>
</template>

<script>
import Highlight from '~/components/Highlight'
import ArtistBio from '~/components/ArtistBio'
import { urlSlugToSlug } from '~/libs/slug'
import { loadPaintings } from '~/libs/paintings'

export default {
	components: { Highlight, ArtistBio },
    async asyncData({ $content, params, error }) {
        let object, type
        try {
            try {
                object = await $content('articles', urlSlugToSlug(params.slug)).fetch()
				type = 'highlight'
            } catch (e) { }

            try {
                object = await $content('artists', urlSlugToSlug(params.slug)).fetch()
				object.paintingToObj = await loadPaintings({ $content, paintingSlugs: object.paintings, columns: ['slug', 'gridImage', 'status'] })
				type = 'artist'
            } catch (e) { }

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