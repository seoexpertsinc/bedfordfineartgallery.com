<template>
    <div>
        <VueSlickCarousel v-bind="settings">
            <div><nuxt-picture src="/vict_large_5_550.jpg" /></div>
            <div><nuxt-picture src="/vict_large_1_550.jpg" /></div>
            <div><nuxt-picture src="/vict_large_2_550.jpg" /></div>
            <div><nuxt-picture src="/vict_large_3_550.jpg" /></div>
            <div><nuxt-picture src="/vict_large_4_550.jpg" /></div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 4000,
                autoplaySpeed: 8000,
                cssEase: 'linear',
            },
        }
    },
}
</script>
