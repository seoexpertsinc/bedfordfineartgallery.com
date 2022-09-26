<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>Unsubscribe</h1>
                    <span class="hr"></span>
                </div>

                <div class="lead_callout">
                    <p style="text-align: center; color: #222">
                        Enter your email address below to unsubscribe from the mailing list:
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
                            <input id="rem" name="rem" type="hidden" value="y" />
                            <input
                                id="r"
                                name="r"
                                type="hidden"
                                value="https://www.bedfordfineartgallery.com/remove_thank_you.htm"
                            />
                            <input type="submit" value="Submit" />
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
                <TestimonialsScroll :testimonials="testimonials" />
            </section>
        </div>
    </div>
</template>

<script>
import { loadShortTestimonials } from '~/libs/testimonials'

export default {
    async asyncData({ $content }) {
        return {
            testimonials: await loadShortTestimonials($content),
        }
    },
}
</script>

<style scoped>
.lead_callout img {
    display: block;

    max-width: 300px;
    margin: 0px auto 10px auto;
}

.lead_callout p {
    font-size: 1.1em;

    line-height: 1.8em;
    margin-bottom: 1em;
}

@media screen and (min-width: 550px) {
    .lead_callout img {
        float: left;
        margin: 0px 10px 10px 0px;
        max-width: 300px;
    }
}

.search {
    border: 1px solid #222;
    overflow: auto;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    max-width: 450px;
    margin: 0 auto 300px auto;
}

.search input[type='text'] {
    border: 0px;
    width: 80%;
    padding: 10px 10px;
    background: #f9f9f2;
}

.search input[type='text']:focus {
    outline: 0;
}

.search input[type='submit'] {
    border: 0px;
    background: none;
    background-color: #222;
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
    path: '/remove.htm',
    caseSensitive: true,
  }
</router>
