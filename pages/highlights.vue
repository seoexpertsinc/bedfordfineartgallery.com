<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>Articles</h1>
                    <span class="hr"></span>
                </div>

                <div class="highlights_thumbnail">
                    <a href="highlights-article/"
                        ><nuxt-img
                            src="/highlights_thumb.jpg"
                            width="412"
                            height="216"
                            alt="19th Century Fine Art Legacy
"
                            style="width: 100%; height: auto; border: 1px solid #222222"
                    /></a>
                </div>
                <div class="highlights_prev">
                    <h2>19th Century Fine Art Legacy</h2>
                    <p>
                        The land upon which the Barclay house is built was part of a larger land grant given to Colonel
                        Hugh Barclay by William Penn. Hugh Barclay, who served during the Revolutionary War, was
                        Bedford’s first Post Master and patriarch of the Barclay family. The Barclay family rose to
                        prominence in Bedford in the century following the war.
                    </p>

                    <p><a class="readmore" href="/highlights-article/">Read More</a></p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1.5em;
                    "
                ></span>
            </section>
        </div>
    </div>
</template>

<router>
  {
    path: '/highlights.html'
  }
</router>