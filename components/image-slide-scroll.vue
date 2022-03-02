<template>
    <div>
<VueSlickCarousel v-bind="settings">
<div><nuxt-img style="width: 100%; height:auto;" src="/mural_1.jpg" width="864" height="864" alt="19th Century Artwork
"/></div>
 <div><nuxt-img style="width: 100%; height:auto;" src="/mural_2.jpg" width="864" height="864" alt="19th century artists

"/></div>
 <div><nuxt-img style="width: 100%; height:auto;" src="mural_3.jpg" width="864" height="864" alt="nineteenth century art

"/></div>
 <div><nuxt-img style="width: 100%; height:auto;" src="/mural_4.jpg" width="864" height="864" alt="19th century art for sale

"/></div>
 <div><nuxt-img style="width: 100%; height:auto;" src="/mural_5.jpg" width="864" height="864" alt="1800s art

"/></div>
 <div><nuxt-img style="width: 100%; height:auto;" src="/mural_6.jpg" width="864" height="864" alt="nineteenth century paintings

"/></div>
 <div><nuxt-img style="width: 100%; height:auto;" src="/mural_7.jpg" width="864" height="864" alt="nineteenth century artists

"/></div>
 <div><nuxt-img style="width: 100%; height:auto;" src="/mural_8.jpg" width="864" height="864" alt="19th century paintings for sale

"/></div>
 <div><nuxt-img style="width: 100%; height:auto;" src="/mural_9.jpg" width="864" height="864" alt="nineteenth century artists

"/></div>
 <div><nuxt-img style="width: 100%; height:auto;" src="/mural_10.jpg" width="864" height="864" alt="19th century artwork

"/></div>
 <div><nuxt-img style="width: 100%; height:auto;" src="/mural_11.jpg" width="864" height="864" alt="1800s paintings

"/></div>

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
          autoplay: true,
          autoplaySpeed: 10000,
          adaptiveHeight: true,
        },
      }
    },
  }
</script>