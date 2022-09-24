<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>how to...</h1>
                    <span class="hr"></span>
                </div>

                <div class="highlights_prev" style="float: left; margin-top: 0px">
                    <h2>
                        <a
                            style="color: #732824; text-decoration: none; line-height: 1.4em"
                            href="how_to_buy_fine_art_for_the_first_time.html"
                            >How to buy fine art for the first time</a
                        >
                    </h2>

                    <p>
                        <a style="margin-top: 4px" class="readmore" href="how_to_buy_fine_art_for_the_first_time.html"
                            >Read More</a
                        >
                    </p>
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

                <div class="highlights_prev" style="float: left; margin-top: 0px">
                    <h2>
                        <a
                            style="color: #732824; text-decoration: none; line-height: 1.4em"
                            href="how_to_understand_the_difference_between_decorative_art_and_fine_art.html"
                            >How to understand the difference between decorative art and fine art and decorative
                            paintings</a
                        >
                    </h2>

                    <p>
                        <a
                            style="margin-top: 4px"
                            class="readmore"
                            href="how_to_understand_the_difference_between_decorative_art_and_fine_art.html"
                            >Read More</a
                        >
                    </p>
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

                <div class="highlights_prev" style="float: left; margin-top: 0px">
                    <h2>
                        <a
                            style="color: #732824; text-decoration: none; line-height: 1.4em"
                            href="how_to_evaluate_an_art_gallery.html"
                            >How to evaluate an art gallery</a
                        >
                    </h2>

                    <p>
                        <a style="margin-top: 4px" class="readmore" href="how_to_evaluate_an_art_gallery.html"
                            >Read More</a
                        >
                    </p>
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

                <div class="highlights_prev" style="float: left; margin-top: 0px">
                    <h2>
                        <a
                            style="color: #732824; text-decoration: none; line-height: 1.4em"
                            href="highlights_article_13.html"
                            >How to Conserve, Restore, and Maintain 19th Century Paintings</a
                        >
                    </h2>

                    <p><a style="margin-top: 4px" class="readmore" href="highlights_article_13.html">Read More</a></p>
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

                <div class="highlights_prev" style="float: left; margin-top: 0px">
                    <h2>
                        <a
                            style="color: #732824; text-decoration: none; line-height: 1.4em"
                            href="how_to_display_fine_art.html"
                            >How to Display Fine Art</a
                        >
                    </h2>

                    <p><a style="margin-top: 4px" class="readmore" href="how_to_display_fine_art.html">Read More</a></p>
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

                <div class="highlights_prev" style="float: left; margin-top: 0px">
                    <h2>
                        <a
                            style="color: #732824; text-decoration: none; line-height: 1.4em"
                            href="how_to_judge_the_value_of_fine_art.html"
                            >How to Judge the Value of Fine Art</a
                        >
                    </h2>

                    <p>
                        <a style="margin-top: 4px" class="readmore" href="how_to_judge_the_value_of_fine_art.html"
                            >Read More</a
                        >
                    </p>
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

<router>
  {
    path: '/how_to_buy_fine_art.html'
  }
</router>
