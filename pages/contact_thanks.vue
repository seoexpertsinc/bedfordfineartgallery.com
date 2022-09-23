<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="flex">
                    <div>
                    <nuxt-picture
                            src="gallery_thanks.jpg"
                            width="660"
                            height="792"
                            alt="The Lookout"
                            :img-attrs="{class:'art_detail_img'}"
                        />
                    </div>
                    <div class="mobile_1">
                        <div class="artwork_header">
                            <h1>Thank You!</h1>
                        </div>
                        <p>
                            We appreciate your inquiry. We look forward to answering your questions and will respond
                            soon. <span style="display: block; padding-top: 10px">Jerry and Joan</span>
                        </p>
                        <p style="text-align: left; padding-top: 20px">
                            <span style="display: block; padding-bottom: 10px; font-weight: bold"
                                >Here's what a customer said:</span
                            >
                            "Jerry and his wife are wonderful people. They go above and beyond to help the customer get
                            exactly what they were looking for, even if the customer is unsure. In this age of internet
                            shopping, few can pull off personalized and professional customer service, but Bedford Fine
                            Art Gallery has perfected it! Very responsive and no nonsense with true knowledge on all of
                            their paintings. Shipped safely and fast, I’m deciding on my next painting and would trust
                            nobody more."
                        </p>
                        <span style="display: block; font-weight: bold; padding-left: 0px; padding-top: 10px"
                            >Christopher K.
                        </span>
                    </div>
                    <div>
                        <nuxt-picture
                            :img-attrs="{class:'art_detail_img'}"
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
      path: '/contact_thanks.htm',
      caseSensitive: true,
    }
  </router>
