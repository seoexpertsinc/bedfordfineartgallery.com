<template>
    <div>
        <div class="clear">
            <VueSlickCarousel v-bind="settings">
                <nuxt-link to="benjamin_f_hawley_fall.html"><nuxt-img src="scroll_large_1.jpg" width="400" height="500" /></nuxt-link>
                <nuxt-link to="frank_bromley_niagra.html"><nuxt-img src="scroll_large_3.jpg" width="400" height="500" /></nuxt-link>
                <nuxt-link to="william_henry_ahrendt_canyon.html"
                    ><nuxt-img src="scroll_large_6.jpg" width="400" height="500"
                /></nuxt-link>
                <nuxt-link to="albert_francis_king_art_creek.html"
                    ><nuxt-img src="scroll_large_7.jpg" width="400" height="500"
                /></nuxt-link>
                <nuxt-link to="john_henry_dolph_duo.html"><nuxt-img src="scroll_large_8.jpg" width="400" height="500" /></nuxt-link>

                <nuxt-link to="harry_herman_roseland_magic.html"
                    ><nuxt-img src="scroll_large_9.jpg" width="400" height="500"
                /></nuxt-link>
                <nuxt-link to="penrhyn_stanlaws_lincoln.html"
                    ><nuxt-img src="scroll_large11.jpg" width="400" height="500"
                /></nuxt-link>
                <nuxt-link to="c_myron_clark_art.html"><nuxt-img src="scroll_large12.jpg" width="400" height="500" /></nuxt-link>

                <nuxt-link to="barton_stone_hays_peaches.html"
                    ><nuxt-img src="scroll_large13.jpg" width="400" height="500"
                /></nuxt-link>
                <nuxt-link to="james_l_adams_boulders.html"><nuxt-img src="scroll_large14.jpg" width="400" height="500" /></nuxt-link>
            </VueSlickCarousel>
        </div>
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
                slidesToShow: 2,
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
