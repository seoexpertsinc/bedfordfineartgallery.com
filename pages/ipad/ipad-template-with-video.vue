<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>
                        <span class="artistTitle">George Hetzel (American 1826 – 1899) </span> River Landscape in
                        Rose Point
                    </h1>
                    <p class="dimensions">Oil on canvas, 13.5 x 19.5 inches/Signed lower right</p>
                    <span class="hr"></span>
                </div>

                <div class="col_40 artwork">
                    <a id="btn" href="#"
                        ><nuxt-picture
                            class="art_detail"
                            alt="Eugene Alonzo Poole (American 1841 – 1912)
\"
                            height="910"
                            src="hetzel_point_small.jpg"
                            width="1139"
                        />
                        <p class="zoom">Click image to zoom</p></a
                    >
                </div>

                <div class="col_60 artwork_details">
                    <div class="video-container" style="clear:both; margin: 20px 20px;"><iframe width="560" height="315" src="https://www.youtube.com/embed/Mcb6O7iZ4Us?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

                </div>
                             <p class="artist_bio">George Hetzel was born in the French province of Alsace, but immigrated with his family to America in 1828, settling in Allegheny City (Pittsburgh’s North Side).  In his teens Hetzel began an apprenticeship with a painter with whom he helped decorate river boat cabins and murals for Pittsburgh saloons.  Recognizing his artistic talent, George’s father sent him to the Dusseldorf Art Academy for formal training.  After returning to Pittsburgh, Hetzel quickly established himself as one of Pittsburgh’s leading artists, obtaining commissions for portraits, still lifes and landscapes.  His early paintings reflect his Dusseldorf training--the use of chiaroscuro and the realism for which the Academy was known. Hudson River school landscape artists, Asher B. Durand and Jasper Cropsey, were among Hetzel’s friends, and he owned some of their paintings. A fishing trip for mountain trout 1866 exposed him to the beauty of the Paint Creek and Little Paint Creek areas, near Scalp Level, Pennsylvania.  The following summer he returned, bringing with him the faculty of the Pittsburgh School of Design to paint landscapes from nature.  Every summer through the late 1860s to circa 1890, artists from Pittsburgh traveled to Scalp Level to study nature and to sketch and paint. Hetzel exhibited at the National Academy of Design (New York City, 1857-58, 1865, 1875, 1879-1882); the Pennsylvania Academy of the Fine Arts, the Centennial International Exhibition (Philadelphia, 1876) and the World’s Columbian Exhibition (Chicago, 1983). Hetzel was the only Pittsburgh artist invited to exhibit at the 1876 Centennial International Exhibition in Philadelphia.
</p>
                <div class="breadcrumb"><a href="javascript:window.history.back();">Back to Gallery</a></div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'ipad',
}
</script>

<style scoped>
body {
    background-color: #f9f9f2;
}
.compliment {
    display: none;
}
.breadcrumb {
    clear: both;
    text-align: center;
    position: absolute;
    top: 10px;
    left: 10px;
}
.breadcrumb a {
    border: none;
    background-color: #742924;
    padding: 8px 12px;
    color: #f9f9f2;
    text-transform: uppercase;
    font-size: 15px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    display: block;
}
.artist_bio {
  clear: both;
  max-width: 960px;
  padding-top: 10px;
}
</style>

<router>
  {
    path: '/ipad_template_with_video.html',
    caseSensitive: true,
  }
</router>
