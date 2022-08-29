<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="flex">
                    <div>
                        <nuxt-picture
                            :imgAttrs="{class:'art_detail_img'}"
                            src="gallery_thanks.jpg"
                            width="660"
                            height="792"
                            alt="The Lookout
        "
                        />
                    </div>
                    <div class="mobile_1">
                        <div class="artwork_header">
                            <h1>Thank You!</h1>
                        </div>
                        <p>
                            It is always nice to share brief value-added information about once-a-month with those who
                            share our passion for fine art.
                        </p>
                        <p style="text-align: left; padding-top: 20px">
                            <span style="display: block; padding-bottom: 10px; font-weight: bold"
                                >Here's what a customer said:</span
                            >"Thank you for including me on your mailing list. Every time I see Bedford Fine Art Gallery
                            in my mail I know I am in for a treat. It is a bright spot while sheltering in place. "
                        </p>
                        <span style="display: block; font-weight: bold; padding-top: 10px"> Beth L. </span>
                    </div>
                    <div>
                       <nuxt-picture
                            :imgAttrs="{class:'art_detail_img'}"
                            src="Jerry-and-Joan-web.jpg"
                            width="1200"
                            height="1652"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.flex > div {
    width: 32%;
}
.flex img {
    width: 100%;
    height: auto;
}

@media screen and (max-width: 860px) {
    .flex > div {
        width: 100%;
    }
    .mobile_1 {
        order: -1;
    }
    .flex img {
        max-width: 350px;
        margin: 15px auto;
        display: block;
    }
}
</style>

<router>
    {
      path: '/mailing_list_thanks.htm',
      caseSensitive: true,
    }
  </router>
