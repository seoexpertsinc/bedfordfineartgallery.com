<template>
    <div>
        <VueSlickCarousel v-bind="settings">
            <div v-for="(testimonial, index) in testimonials" :key="index">
                <p class="reverse" style="text-align: left">
                    {{ testimonial.shortTestimonial }}
                </p>
                <span style="display: block; font-weight: bold; color: #edebdb; padding-left: 10px">{{
                    testimonial.name
                }}</span>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel },
    props: {
        testimonials: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            settings: {
                arrows: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 10000,
                adaptiveHeight: true,
            },
        }
    },
}
</script>
