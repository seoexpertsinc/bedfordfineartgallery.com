<template>
    <div>
        <div class="container secondary">
            <section class="wrapper clearfix">
                <div class="pagination_sub">
                   <ul>
                        <li><nuxt-link :to="{ name: 'aristist-bios' }" class="active">All</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'landscape-artwork' }">Landscape</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'marine-artwork.html' }">Marine</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'still-life_artwork' }">Still Life</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'genre-artwork' }">Genre</nuxt-link></li>
                        <li>
                            <nuxt-link :to="{ name: 'historical-and_political-artwork' }">American Historic / Political</nuxt-link>
                        </li>
                        <li><nuxt-link :to="{ name: 'sporting-art' }">Sporting Art</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'animal-artwork' }">Animal</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'sculpture' }">Sculpture</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'notable-sales' }">Recently Sold</nuxt-link></li>
                    </ul>
                </div>
                <input v-model="search_filter" type="text" class="form-control" placeholder="Filter by Artist Name" />
                <ul id="myUL" class="productGrid2" style="padding-top: 15px">
                    <GalleryNew />
                    <GalleryReg />
                </ul>

                <h2 style="clear:both; font-size:22px; color: #EDEBDB; border-bottom:1px solid #444444; margin-bottom:12px; margin-top: 24px;">About the Gallery</h2>
                <YouTubeVideo link="https://www.youtube.com/embed/5I8BEyiGICs" previewImageSize="maxresdefault"/>
            </section>
        </div>
    </div>
</template>

<script>
import YouTubeVideo from "~/components/YouTubeVideo";

export default {
    components: { YouTubeVideo }
}
</script>

<style scoped>
.secondary {
    background-image: none;
    background-repeat: repeat;
    background: #222;
}
</style>

<router>
  {
    path: '/Artists--Bios.html',
    caseSensitive: true,
  }
</router>
