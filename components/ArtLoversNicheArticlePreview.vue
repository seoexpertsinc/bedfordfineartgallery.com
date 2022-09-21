<template>
    <div>
        <div class="highlights_thumbnail">
            <nuxt-link :to="artLoversNicheArticle.slug.replace('-html', '.html')"
                ><nuxt-img
                    loading="lazy"
                    src="/images/Top-Banner.jpg"
                    width="397"
                    height="126"
                    :img-attrs="{alt: 'Art Lovers\' Niche', style: 'width: 100%; height:auto; border:1px solid #222222;margin-bottom: 1.5em;'}"
            /></nuxt-link>
        </div>
        <div class="highlights_prev">
            <h2>{{ artLoversNicheArticle.title }}</h2>
            <p>
				{{ getPostPreview(artLoversNicheArticle.body) }}
            </p>

            <p><nuxt-link :to="artLoversNicheArticle.slug.replace('-html', '.html')" class="readmore">Read More</nuxt-link></p>
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
        artLoversNicheArticle: {
            type: Object,
            required: true,
        }
    },
	methods: { getPostPreview },
}
</script>