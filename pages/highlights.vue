<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>Articles</h1>
                    <span class="hr"></span>
                </div>

                <HighlightPreview v-for="(highlight, index) in highlights" :key="index" :highlight="highlight"/>
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
import HighlightPreview from '~/components/HighlightPreview.vue'

export default {
    components: { HighlightPreview },
    async asyncData({ $content }) {
        return {
            highlights: await $content("articles").sortBy("date", "desc").fetch()
        };
    },
}
</script>

<router>
  {
    path: '/highlights.html'
  }
</router>
