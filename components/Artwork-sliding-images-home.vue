<template>
    <div>
        <VueSlickCarousel v-bind="settings">
            <nuxt-link to="jules_frederic_ballavoine_art_flowers.html"
                ><nuxt-img src="scroll_10.jpg" width="290" height="200"
            /></nuxt-link>
            <nuxt-link to="abbot_fuller_graves_fishing.html"><nuxt-img src="scroll_11.jpg" width="290" height="200" /></nuxt-link>
            <nuxt-link to="barton_stone_hays_tabletop.html"><nuxt-img src="scroll_12.jpg" width="290" height="200" /></nuxt-link>
            <nuxt-link to="barton_stone_hays_moment.html"><nuxt-img src="scroll_13.jpg" width="290" height="200" /></nuxt-link>
            <nuxt-link to="auguste_toulmouche_memories.html"><nuxt-img src="scroll_14.jpg" width="290" height="200" /></nuxt-link>
            <nuxt-link to="earl_lincoln_poole_titmouse.html"><nuxt-img src="scroll_18.jpg" width="290" height="200" /></nuxt-link>
            <nuxt-link to="george_goodwin_kilburne_trysting.html"
                ><nuxt-img src="scroll_15.jpg" width="290" height="200"
            /></nuxt-link>
            <nuxt-link to="william_de_la_montagne_cary_felines.html"
                ><nuxt-img src="scroll_19.jpg" width="290" height="200"
            /></nuxt-link>
            <nuxt-link to="clarence_drew_bartlett_franklin.html"><nuxt-img src="scroll_16.jpg" width="290" height="200" /></nuxt-link>

            <nuxt-link to="william_keith_forest.html"><nuxt-img src="scroll_17.jpg" width="290" height="200" /></nuxt-link>
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
                  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
            },
        }
    },
}
</script>
