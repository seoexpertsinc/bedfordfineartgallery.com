<template>
	<Highlight :highlight="object"/>
</template>

<script>
import Highlight from '~/components/Highlight.vue'
import { urlSlugToSlug } from '~/libs/slug'

export default {
	components: { Highlight },
    async asyncData({ $content, params, error }) {
        let object, type
        try {
            try {
                object = await $content('articles', urlSlugToSlug(params.slug)).fetch()
				type = 'highlight'
            } catch (e) {
				console.log(e)
			}

            // if (!object) {
            // }
        } catch (e) {
            error({ statusCode: 404, message: 'Page not found' })
        }

        return { object, type }
    },
}
</script>