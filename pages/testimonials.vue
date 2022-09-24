<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>Testimonials</h1>
                    <h2>What Our Customers are Saying</h2>
                    <span class="hr"></span>
                </div>

                <div style="max-width: 960px; margin: auto">
                    <div
                        v-for="(testimonial, index) in testimonials"
                        :id="`testimonial-${index + 1}`"
                        :key="index"
                        style="padding: 0px 10px 10px 10px; border-bottom: 1px solid #dfe1bc"
                    >
                        <p style="text-align: left">"{{ testimonial.longTestimonial }}"</p>
                        <span style="display: block; font-weight: bold; padding-top: 5px">{{ testimonial.name }}</span>
                    </div>

                    <div class="breadcrumb">
                        <nuxt-link to="/" style="width: 90%; margin: 0 auto 24px auto; max-width: 320px"
                            >Back to Home</nuxt-link
                        >
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { loadLongTestimonials } from '~/libs/testimonials'

export default {
    async asyncData({ $content }) {
        return {
            testimonials: await loadLongTestimonials($content),
        }
    },
}
</script>

<style scoped>
strong {
    font-weight: bold;
}
</style>

<router>
  {
    path: '/testimonials.htm',
  }
</router>
