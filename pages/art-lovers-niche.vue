<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>Art Lovers' Niche</h1>
                    <span class="hr"></span>
                </div>

                <div class="lead_callout">
                    <p
                        style="
                            text-align: center;
                            color: #222;
                            max-width: 660px;
                            margin: auto;
                            line-height: 1.4em;
                            padding-bottom: 16px;
                        "
                    >
                        Art Lovers' Niche provides you access to brief once-a-month exclusive updates. Explore unique,
                        newly discovered and featured fine art. Enter your email address below to join our mailing list:
                    </p>

                    <div class="search">
                        <form
                            id="remsform"
                            action="https://accept.nittanyweb.com/remote_add_name.cgi"
                            method="post"
                            name="remsform"
                        >
                            <input id="e" type="text" placeholder="Email Address" name="e" />
                            <input id="m2" name="m" type="hidden" value="88" />
                            <input id="l2" name="l" type="hidden" value="1263" />
                            <input
                                id="r"
                                name="r"
                                type="hidden"
                                value="https://www.bedfordfineartgallery.com/mailing_list_thanks.htm"
                            />
                            <input type="submit" value="Join the Movement" />
                        </form>
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

<style scoped>
.search {
    border: 1px solid #222;
    overflow: auto;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    max-width: 550px;
    margin: 0 auto 300px auto;
}

.search input[type='text'] {
    border: 0px;
    width: 50%;
    padding: 10px 10px;
    background: #f9f9f2;
}
@media only screen and (min-width: 650px) {
    .search input[type='text'] {
        border: 0px;
        width: 70%;
        padding: 10px 10px;
        background: #f9f9f2;
    }
}

.search input[type='text']:focus {
    outline: 0;
}

.search input[type='submit'] {
    border: 0px;
    background: none;
    background-color: rgba(16, 88, 185, 1);
    color: #fff;
    float: right;
    padding: 10px;
    border-radius-top-right: 5px;
    -moz-border-radius-top-right: 5px;
    -webkit-border-radius-top-right: 5px;
    border-radius-bottom-right: 5px;
    -moz-border-radius-bottom-right: 5px;
    -webkit-border-radius-bottom-right: 5px;
    cursor: pointer;
}

.search input {
    width: auto;
}

/* ===========================
   ====== Medua Query for Search Box ======
   =========================== */

@media only screen and (min-width: 150px) and (max-width: 780px) {
    .search {
        width: 95%;
        margin: 0 auto 200px auto;
    }
}
</style>

<router>
  {
    path: '/art_lovers_niche.htm',
  }
</router>
