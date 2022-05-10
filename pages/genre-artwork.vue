<template>
    <div>
        <div class="container secondary">
            <section class="wrapper clearfix">
                <div class="pagination_sub">
                    <ul>
                        <li><nuxt-link to="/aristist-bios/">All</nuxt-link></li>
                        <li><nuxt-link to="/landscape-artwork/">Landscape</nuxt-link></li>
                        <li><nuxt-link to="/marine-artwork.html/">Marine</nuxt-link></li>
                        <li><nuxt-link to="/still-life_artwork/">Still Life</nuxt-link></li>
                        <li><nuxt-link to="/genre-artwork/" class="active">Genre</nuxt-link></li>
                        <li>
                            <nuxt-link to="/historical-and_political-artwork/">American Historic / Political</nuxt-link
                            >/li>
                        </li>
                        <li><nuxt-link to="/sporting-art/">Sporting Art</nuxt-link></li>
                        <li><nuxt-link to="/animal-artwork/">Animal</nuxt-link></li>
                        <li><nuxt-link to="/sculpture/">Sculpture</nuxt-link></li>
                        <li><nuxt-link to="/notable-sales/">Recently Sold</nuxt-link></li>
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
