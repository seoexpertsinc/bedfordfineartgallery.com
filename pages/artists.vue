<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>Artists</h1>
                    <h2>A few of our featured 19th Century artists</h2>
                    <span class="hr"></span>
                </div>

                <div class="col_100">
                    <div class="artist_wrap">
                        <div class="artist_col_img">
                            <a href="elias_abberley_delightful.html"
                                ><nuxt-img
                                    src="/ea_grid.jpg"
                                    alt="Elias Abberley (19th - 20th Century)
"
                            /></a>
                        </div>
                        <div class="artist_col_links">
                            <div class="artist_container">
                                <p>Elias Abberley (19th - 20th Century)</p>
                                <ul>
                                    <li class="artistheader">Painting:</li>
                                    <li><a href="elias_abberley_delightful.html">1</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div
            class="container footer_test"
            style="padding-top: 24px; width: 100%; margin: 0px auto; background-color: rgba(16, 88, 185, 1)"
        >
            <section class="wrapper" style="max-width: 860px; margin: auto">
                <TestimonialsScroll />
            </section>
        </div>
    </div>
</template>

<router>
  {
    path: '/Artists.html'
  }
</router>
