<template>
    <div>
        <div class="container secondary">
            <section class="wrapper clearfix">
                <div class="pagination_sub">
                    <ul>
                         <li><nuxt-link to="/aristist-bios/" class="active">All</nuxt-link></li>
                        <li><nuxt-link to="/landscape-artwork/">Landscape</nuxt-link></li>
                        <li><nuxt-link to="/marine-artwork.html/">Marine</nuxt-link></li>
                        <li><nuxt-link to="/still-life_artwork/">Still Life</nuxt-link></li>
                        <li><nuxt-link to="/genre-artwork/">Genre</nuxt-link></li>
                        <li><nuxt-link to="/historical-and_political-artwork/">American Historic / Political</nuxt-link></li>
                        <li><nuxt-link to="/sporting-art/">Sporting Art</nuxt-link></li>
                        <li><nuxt-link to="/animal-artwork/">Animal</nuxt-link></li>
                        <li><nuxt-link to="/sculpture/">Sculpture</nuxt-link></li>
                        <li><nuxt-link to="/notable-sales/">Recently Sold</nuxt-link></li>
                    </ul>
                </div>
   <input type="text" class="form-control " placeholder="Filter by Artist Name" v-model="search_filter">
                <ul id="myUL" class="productGrid2" style="padding-top: 15px">
                    <GalleryNew />
                    <GalleryReg />
                </ul>
            </section>
        </div>
    </div>
</template>




<style scoped>
.secondary {
    background-image: none;
    background-repeat: repeat;
    background: #222;
}
</style>

<router>
  {
    path: '/Artists--Bios.html'
  }
</router>