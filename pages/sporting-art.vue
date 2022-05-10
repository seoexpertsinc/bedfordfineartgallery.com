<template>
    <div>
        <div class="container secondary">
            <section class="wrapper clearfix">
                <div class="pagination_sub">
                   <ul>
                        <li><nuxt-link :to="{ name: 'aristist-bios' }">All</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'landscape-artwork' }">Landscape</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'marine-artwork.html' }">Marine</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'still-life_artwork' }">Still Life</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'genre-artwork' }">Genre</nuxt-link></li>
                        <li>
                            <nuxt-link :to="{ name: 'historical-and_political-artwork' }">American Historic / Political</nuxt-link
                            >/li>
                        </li>
                        <li><nuxt-link :to="{ name: 'sporting-art' }" class="active">Sporting Art</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'animal-artwork' }">Animal</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'sculpture' }">Sculpture</nuxt-link></li>
                        <li><nuxt-link :to="{ name: 'notable-sales' }">Recently Sold</nuxt-link></li>
                    </ul>
                </div>
                <input v-model="search_filter" type="text" class="form-control" placeholder="Search" />
                <ul id="myUL" class="productGrid2" style="padding-top: 15px">
                    <GalleryNew />
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.secondary {
    background-image: none;
    background-repeat: repeat;
    background: #222;
}
</style>
