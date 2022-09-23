<template>
    <div>
        <VueSlickCarousel v-bind="settings">
            <div><nuxt-picture src="/customer-images/1.jpg" /></div>
            <div><nuxt-picture src="/customer-images/2.jpg" /></div>
            <div><nuxt-picture src="/customer-images/3.jpg" /></div>
            <div><nuxt-picture src="/customer-images/4.jpg" /></div>
            <div><nuxt-picture src="/customer-images/5.jpg" /></div>
            <div><nuxt-picture src="/customer-images/6.jpg" /></div>
            <div><nuxt-picture src="/customer-images/7.jpg" /></div>
            <div><nuxt-picture src="/customer-images/8.jpg" /></div>
            <div><nuxt-picture src="/customer-images/9.jpg" /></div>
            <div><nuxt-picture src="/customer-images/10.jpg" /></div>
             <div><nuxt-picture src="/customer-images/11.jpg" /></div>
            <div><nuxt-picture src="/customer-images/12.jpg" /></div>
            <div><nuxt-picture src="/customer-images/13.jpg" /></div>
            <div><nuxt-picture src="/customer-images/14.jpg" /></div>
            <div><nuxt-picture src="/customer-images/15.jpg" /></div>
            <div><nuxt-picture src="/customer-images/16.jpg" /></div>
            <div><nuxt-picture src="/customer-images/17.jpg" /></div>
            <div><nuxt-picture src="/customer-images/18.jpg" /></div>
            <div><nuxt-picture src="/customer-images/19.jpg" /></div>
            <div><nuxt-picture src="/customer-images/20.jpg" /></div>
            <div><nuxt-picture src="/customer-images/21.jpg" /></div>
            <div><nuxt-picture src="/customer-images/22.jpg" /></div>
            <div><nuxt-picture src="/customer-images/23.jpg" /></div>
            <div><nuxt-picture src="/customer-images/24.jpg" /></div>
            <div><nuxt-picture src="/customer-images/25.jpg" /></div>
            <div><nuxt-picture src="/customer-images/26.jpg" /></div>
            <div><nuxt-picture src="/customer-images/27.jpg" /></div>
            <div><nuxt-picture src="/customer-images/28.jpg" /></div>
            <div><nuxt-picture src="/customer-images/29.jpg" /></div>
            <div><nuxt-picture src="/customer-images/30.jpg" /></div>
             <div><nuxt-picture src="/customer-images/31.jpg" /></div>
            <div><nuxt-picture src="/customer-images/32.jpg" /></div>
            <div><nuxt-picture src="/customer-images/33.jpg" /></div>
            <div><nuxt-picture src="/customer-images/34.jpg" /></div>
            <div><nuxt-picture src="/customer-images/35.jpg" /></div>
            <div><nuxt-picture src="/customer-images/36.jpg" /></div>
            <div><nuxt-picture src="/customer-images/37.jpg" /></div>
            <div><nuxt-picture src="/customer-images/38.jpg" /></div>
            <div><nuxt-picture src="/customer-images/39.jpg" /></div>
            <div><nuxt-picture src="/customer-images/40.jpg" /></div>
             <div><nuxt-picture src="/customer-images/41.jpg" /></div>
            <div><nuxt-picture src="/customer-images/42.jpg" /></div>
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
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },
        }
    },
}
</script>
