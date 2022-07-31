<template>
    <div>
        <div class="highlights_thumbnail">
            <nuxt-link :to="highlight.slug.replace('-html', '.html')"
                ><nuxt-img
                    :src="highlight.gridImage"
                    alt="19th Century Fine Art Legacy"
                    style="width: 100%; height: auto; border: 1px solid #222222"
            /></nuxt-link>
        </div>
        <div class="highlights_prev">
            <h2>{{ highlight.title }}</h2>
            <p>
				{{ getPostPreview(highlight.body) }}
            </p>

            <p><nuxt-link :to="highlight.slug.replace('-html', '.html')" class="readmore">Read More</nuxt-link></p>
        </div>

        <span
            style="height: 1px; width: 100%; display: block; clear: both; background: #c3c4a2; margin-bottom: 1.5em"
        ></span>
    </div>
</template>

<script>
import { getPostPreview } from '~/libs/post'

export default {
	props: {
		highlight: {
			type: Object,
			required: true,
		}
	},
	methods: { getPostPreview },
}
</script>