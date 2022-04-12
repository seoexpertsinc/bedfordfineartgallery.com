<template>
    <div>
        <div class="container secondary">
            <section class="wrapper clearfix">
                <div class="pagination_sub">
                    <ul>
                        <li><a class="active" href="Artists--Bios.html">All</a></li>
                        <li><a href="landscape_artwork.html">Landscape</a></li>
                        <li><a href="marine_artwork.html">Marine</a></li>
                        <li><a href="still_life_artwork.html">Still Life</a></li>
                        <li><a href="genre_artwork.html">Genre</a></li>
                        <li><a href="historical_and_political_artwork.html">American Historic / Political</a></li>
                        <li><a href="sporting_art.html">Sporting Art</a></li>
                        <li><a href="animal_artwork.html">Animal</a></li>
                        <li><a href="sculpture.html">Sculpture</a></li>
                        <li><a href="notable_sales.html">Recently Sold</a></li>
                    </ul>
                </div>

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


