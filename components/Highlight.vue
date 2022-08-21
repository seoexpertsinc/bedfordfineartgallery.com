<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>Highlights</h1>
                    <h2>{{ highlight.title }}</h2>
                    <span class="hr"></span>
                </div>
                <div class="highlights_thumbnail">
                    <nuxt-img
                        loading="lazy"
                        class="art_detail"
                        :src="highlight.image"
                        alt="19th Century Fine Art Legacy"
                        style="width: 100%; height: auto; border: 1px solid #222222"
                    />
                </div>
                <div class="highlights_prev">
					<YouTubeVideo v-if="highlight.youtubeEmbedLink" :link="highlight.youtubeEmbedLink" />
					<br v-if="highlight.youtubeEmbedLink" />

					<div v-interpolation v-html="$md.render(highlight.body)" />
                    <p v-if="highlight.additionalLink">
						<nuxt-link :to="highlight.additionalLink.link" class="readmore">{{ highlight.additionalLink.text }}</nuxt-link>
					</p>
                    <p><nuxt-link :to="{ name: 'highlights' }" class="readmore">Back to Highlights</nuxt-link></p>
                </div>
            </section>
        </div>
        <div
            class="container footer_test"
            style="padding-top: 24px; width: 100%; margin: 0px auto; background-color: rgba(16, 88, 185, 1)"
        >
            <section class="wrapper" style="max-width: 860px; margin: auto">
                <TestimonialsScroll />
            </section>
        </div>
    </div>
</template>

<script>
import YouTubeVideo from '~/components/YouTubeVideo'

export default {
	components: { YouTubeVideo },
	props: {
		highlight: {
			type: Object,
			required: true,
		}
	},
}
</script>