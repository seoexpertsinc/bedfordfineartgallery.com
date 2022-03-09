<template>
    <div>
<VueSlickCarousel v-bind="settings">
	<a href="jules_frederic_ballavoine_art_flowers.html"><nuxt-img src="scroll_10.jpg" width="290" height="200" /></a>
	<a href="abbot_fuller_graves_fishing.html"><nuxt-img src="scroll_11.jpg" width="290" height="200" /></a>
	<a href="barton_stone_hays_tabletop.html"><nuxt-img src="scroll_12.jpg" width="290" height="200" /></a>
    <a href="barton_stone_hays_moment.html"><nuxt-img src="scroll_13.jpg" width="290" height="200" /></a>
    <a href="auguste_toulmouche_memories.html"><nuxt-img src="scroll_14.jpg" width="290" height="200" /></a>
    <a href="earl_lincoln_poole_titmouse.html"><nuxt-img src="scroll_18.jpg" width="290" height="200" /></a>
    <a href="george_goodwin_kilburne_trysting.html"><nuxt-img src="scroll_15.jpg" width="290" height="200" /></a>
        <a href="william_de_la_montagne_cary_felines.html"><nuxt-img src="scroll_19.jpg" width="290" height="200" /></a>
    <a href="clarence_drew_bartlett_franklin.html"><nuxt-img src="scroll_16.jpg" width="290" height="200" /></a>


    <a href="william_keith_forest.html"><nuxt-img src="scroll_17.jpg" width="290" height="200" /></a>


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
      "arrows": false,
  "dots": false,
  "infinite": true,
  "slidesToShow": 6,
  "slidesToScroll": 1,
  "autoplay": true,
  "speed": 2000,
  "autoplaySpeed": 2000,
  "cssEase": "linear",
        },
      }
    },
  }
</script>