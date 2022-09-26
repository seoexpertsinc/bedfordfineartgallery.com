<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>Privacy Policy</h1>
                    <span class="hr"></span>
                </div>

                <div class="lead_callout" style="max-width: 800px; margin: auto">
                    <p>
                        We respect your privacy 100%, and will not share any personal information collected through our
                        contact forms with any third parties, and this information will only be used to communicate with
                        you at your request.
                    </p>
                    <p>
                        <span class="subHeader">Our Commitment To Privacy</span> Your privacy is important to us. To
                        make this notice easy to find, we make it available on our homepage and at every point where
                        personally identifiable information may be requested.
                    </p>
                    <p>
                        <span class="subHeader">How We Protect Your Data</span> We will not share any information
                        provided on your order with other parties except those needed to process your order. We may
                        share information with governmental agencies or assisting agencies to investigate fraud and
                        unauthorized transactions.
                    </p>
                    <p>
                        <span class="subHeader">Our Commitment To Data Security</span> To prevent unauthorized access,
                        maintain data accuracy, and ensure the correct use of information, we have put in place
                        appropriate physical, electronic, and managerial procedures to safeguard and secure the
                        information we collect online.
                    </p>
                    <p>
                        <span class="subHeader">Remarketing</span> We may at times use the Remarketing method of
                        advertising, and these details apply to that:
                    </p>
                    <ul
                        class="bullet_list"
                        style="
                            font-size: 1.1em;

                            line-height: 1.8em;
                            list-style-type: square;
                            margin-left: 20px;
                        "
                    >
                        <li>Third party vendors, including Google, show your ads on sites on the internet.</li>
                        <li>
                            Third party vendors, including Google, use cookies to serve ads based on a user's prior
                            visits to your website.
                        </li>
                        <li>
                            Users may opt out of Google's use of cookies by visiting the
                            <a href="https://www.google.com/privacy_ads.html" target="_blank">
                                Google advertising opt-out page</a
                            >.
                        </li>
                        <li>
                            We may at times also use Remarketing Dynamic Ads. You can opt out of DoubleClick's use of
                            cookies by visiting the
                            <a href="https://www.google.com/settings/ads/onweb#display_optout" target="_blank"
                                >DoubleClick opt-out page</a
                            >.
                        </li>
                        <li>
                            You can also opt out of all Remarketing advertising at the
                            <a href="https://www.networkadvertising.org/managing/opt_out.asp" target="_blank"
                                >Network Advertising Initiative Opt Out Form</a
                            >.
                        </li>
                    </ul>
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
</style>

<router>
  {
    path: '/privacy.htm',
    caseSensitive: true,
  }
</router>
