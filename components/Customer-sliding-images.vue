<template>
    <div>
        <VueSlickCarousel v-bind="settings">
            <div><nuxt-img src="/customer-images/1.jpg" /></div>
            <div><nuxt-img src="/customer-images/2.jpg" /></div>
            <div><nuxt-img src="/customer-images/3.jpg" /></div>
            <div><nuxt-img src="/customer-images/4.jpg" /></div>
            <div><nuxt-img src="/customer-images/5.jpg" /></div>
            <div><nuxt-img src="/customer-images/6.jpg" /></div>
            <div><nuxt-img src="/customer-images/7.jpg" /></div>
            <div><nuxt-img src="/customer-images/8.jpg" /></div>
            <div><nuxt-img src="/customer-images/9.jpg" /></div>
            <div><nuxt-img src="/customer-images/10.jpg" /></div>
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
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                speed: 9000,
                autoplaySpeed: 2000,
                cssEase: 'linear',
            },
        }
    },
}
</script>
