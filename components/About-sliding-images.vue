<template>
    <div>
        <VueSlickCarousel v-bind="settings">
            <div><nuxt-picture src="/mural_1.jpg" /></div>
            <div><nuxt-picture src="/mural_2.jpg" /></div>
            <div><nuxt-picture src="/mural_3.jpg" /></div>
            <div><nuxt-picture src="/mural_4.jpg" /></div>
            <div><nuxt-picture src="/mural_5.jpg" /></div>
            <div><nuxt-picture src="/mural_6.jpg" /></div>
            <div><nuxt-picture src="/mural_7.jpg" /></div>
            <div><nuxt-picture src="/mural_8.jpg" /></div>
            <div><nuxt-picture src="/mural_9.jpg" /></div>
            <div><nuxt-picture src="/mural_10.jpg" /></div>
            <div><nuxt-picture src="/mural_11.jpg" /></div>
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
                autoplay: false,
                speed: 4000,
                autoplaySpeed: 2000,
                cssEase: 'linear',
            },
        }
    },
}
</script>

