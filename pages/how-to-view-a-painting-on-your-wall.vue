<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <!--<div class="artwork_header">
  <h1>How to use Artplacer</h1>
  <span class="hr"></span></div>-->

                <div class="artwork_header">
                    <h1>How to view a painting on your wall</h1>
                    <span class="hr"></span>
                </div>
                <div style="max-width: 960px; margin: auto">
                    <div class="step_container" style="margin-top: 10px">
                        <span class="step_number">STEP 1</span>
                        <h3>Upload a photo of your room</h3>
                    </div>
                    <div class="step_content step_flex">
                        <div class="step_flex_img">
                            <nuxt-picture
                        :img-attrs="{class:'wall_img'}"
                        loading="lazy"
                        style="margin-bottom: 12px"
                        src="artplacer_1.jpg"
                        width="570"
                        height="559"
                        alt="Upload a photo of your room"
                    />
                     <nuxt-picture
                        :img-attrs="{class:'wall_img'}"
                        loading="lazy"
                        style="margin-bottom: 12px"
                        src="artplacer_23.jpg"
                        width="570"
                        height="559"
                        alt="Upload a photo of your room"
                    />


                        </div>

                        <div class="step_flex_content">
                            <ul class="checkmark">
                                <li>Take a photo of the room you want to see the painting in.</li>
                                <li>Upload it by clicking the UPLOAD IMAGE button.</li>
                                <li>Click the SAVE AND MOVE NEXT button.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="step_container">
                        <span class="step_number">STEP 2</span>
                        <h3>Define the area on which you want the painting to be placed</h3>
                    </div>

                    <div class="step_content step_flex">
                        <div class="step_flex_img">
                            <nuxt-picture
                        :img-attrs="{class:'wall_img'}"
                        loading="lazy"
                        style="margin-bottom: 12px"
                        src="artplacer_30.jpg"
                        width="1091"
                        height="896"
                        alt="Define the area on which you want the painting to be placed"
                    />
                            <nuxt-picture
                        :img-attrs="{class:'wall_img'}"
                        loading="lazy"
                        style="margin-bottom: 12px"
                        src="artplacer_25.jpg"
                        width="1091"
                        height="896"
                        alt="Define the area on which you want the painting to be placed"
                    />

                        </div>

                        <div class="step_flex_content">
                            <ul class="checkmark">
                                <li>Click on any place of your image to bring up the white square box.</li>
                                <li>
                                    Adjust the white square box over a wall or area where you want the painting to be
                                    placed.
                                </li>

                                <li>
                                    In order to do that, move the box around, put it over the desired area, and
                                    <span style="color: #222">drag its corners to match the wall's corners</span>. This
                                    is important to reproduce wall perspective and scale as accurate as possible.
                                </li>
                            </ul>

                            <p style="font-weight: bold; padding-left: 15px; padding-bottom: 15px; padding-top: 5px">
                                View a video of how to drag the corners of the box:
                            </p>
                            <div class="video-container">
                                <iframe
                                    src="https://player.vimeo.com/video/356216278"
                                    width="640"
                                    height="413"
                                    frameborder="0"
                                    allow="autoplay; fullscreen"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div class="step_container">
                        <span class="step_number">STEP 3</span>
                        <h3>Enter the height for the area you just defined</h3>
                    </div>

                    <div class="step_content step_flex">
                        <div class="step_flex_img">
                            <nuxt-picture
                        :img-attrs="{class:'wall_img'}"
                        loading="lazy"
                        style="margin-bottom: 12px"
                        src="artplacer_27.jpg"
                        width="1091"
                        height="896"
                        alt="preview artwork on the wall"
                    />
                      <nuxt-picture
                        :img-attrs="{class:'wall_img'}"
                        loading="lazy"
                        style="margin-bottom: 12px"
                        src="artplacer_28.jpg"
                        width="1091"
                        height="896"
                        alt="preview artwork on the wall"
                    />

                        </div>
                        <div class="step_flex_content">
                            <ul class="checkmark">
                                <li>
                                    Use slider at the bottom of the window to specify the height of the defined area.
                                    <span style="color: #000">This is important to have a realistic sense of scale</span
                                    >, and see how paintings would really look when placed, based both on painting size
                                    and wall dimensions.
                                </li>
                                <li>
                                    If you don't know the height of the area and you can't measure it, use an
                                    approximate value.
                                </li>
                                <li>Click on the button DONE next to the slider at the bottom, to save.</li>
                                <li>Click the SAVE AND MOVE NEXT button.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="step_container">
                        <span class="step_number">STEP 4</span>
                        <h3>Position the Painting</h3>
                    </div>

                    <div class="step_content step_flex">
                        <div class="step_flex_img">
                             <nuxt-picture
                        :img-attrs="{class:'wall_img'}"
                        loading="lazy"
                        style="margin-bottom: 12px"
                        src="artplacer_29.jpg"
                        width="1091"
                        height="896"
                        alt="preview artwork on the wall"
                    />

                        </div>

                        <div class="step_flex_content">
                            <ul class="checkmark">
                                <li>
                                    Move the painting to the desired position within any of the wall areas that you have
                                    defined in the previous steps.
                                </li>

                                <li>Change its' position, and see what fits best!</li>

                                <li>Click the DOWNLOAD button to save a photo of the painting on your wall.</li>
                            </ul>
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
                <TestimonialsScroll :testimonials="testimonials"/>
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
.step_container {
    border-top: 1px solid #222;
    margin-top: 70px;
}

.step_container h3 {
    font-weight: bold;
    padding-bottom: 30px;
    color: #222;
}

.step_number {
    font-size: 18px;

    text-align: center;

    background: #222;
    color: #f2f2f2;

    padding: 10px;

    display: block;

    border-radius: 0px 0px 55px 55px;

    width: 100px;

    height: 55px;

    margin: auto;
    font-weight: bold;
}

.step_content img {
    width: 100%;
    height: auto;
    display: block;
    vertical-align: top;
    max-width: 480px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    border-radius: 6px;
}

.list_flex {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
}
.list_cirlce {
    background: #ccc;
    color: #666;
    text-align: center;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    line-height: 24px;
    margin-right: 10px;
    font-size: 15px;
}

.step_flex {
    display: flex;
    justify-content: space-between;
}

.step_flex .step_flex_img,
.step_flex .step_flex_content {
    width: 48%;
}

ul.checkmark {
    border-top: 1px dashed #ccc;
    padding-top: 7px;
    margin-top: 0px;
}

ul.checkmark li {
    line-height: 22px;
    margin-bottom: 10px;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 10px;
}
.img2x {
    margin-top: 30px;
}
.step_flex_content {
    border-left: 1px dashed #ccc;
}
@media only screen and (max-width: 560px) {
    .step_flex {
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .step_flex .step_flex_img,
    .step_flex .step_flex_content {
        width: 100%;
    }

    .step_flex_content {
        order: -1;
        padding-bottom: 20px;
    }

    .img2x,
    .img1x {
        margin-bottom: 30px;
    }

    .step_flex_content {
        border: none;
    }

    .step_container {
        margin-top: 40px;
    }
}

ul.checkmark li::after {
    transform: rotate(45deg) translateY(-50%);
    top: 50%;
    margin-top: -7px;
    left: 10px;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    margin-left: 15px;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

<router>
  {
    path: '/how_to_view_a_painting_on_your_wall.htm',
    caseSensitive: true,
  }
</router>
