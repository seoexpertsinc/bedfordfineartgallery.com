<template>
    <div>
        <!-- <Modal /> -->
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>
                        <span class="artistTitle">{{ artistNameWithTinyDescription }}</span>
                        <span v-if="painting.artist.alias" class="alias"
                            >(&nbsp;&nbsp;aka&nbsp;&nbsp;{{ painting.artist.alias }}&nbsp;&nbsp;)</span
                        >
                        {{ painting.title }}
                    </h1>

                    <p v-if="painting.dimensions" class="dimensions">{{ painting.dimensions }}</p>

                    <span class="hr"></span>
                </div>

                <div class="col_40 artwork">
                    <p class="mobile_phone_cta">
                        Interested in this painting? Call
                        <a
                            href="tel:1-724-459-0612"
                            style="text-decoration: none; color: #000"
                            class="mobile_phone_cta_link"
                            >724-459-0612</a
                        >
                    </p>
                    <template v-if="sold">
                        <div class="sold">
                            <span class="soldTag">sold</span>
                            <nuxt-picture
                                loading="lazy"
                                class="art_detail"
                                :alt="artistNameWithTinyDescription"
                                :src="painting.mediumResImage"
                                :width="painting.mediumResImageWidth"
                                :height="painting.mediumResImageHeight"
                            />
                        </div>
                    </template>
                    <template v-else>
                        <div class="zoom_desktop">
                            <Zoom :mobile="false" :painting="painting" />
                        </div>
                        <div class="zoom_mobile">
                            <Zoom :mobile="true" :painting="painting" />
                        </div>
                    </template>
                    <p v-if="!sold" class="zoom">Click image to zoom</p>

                    <div class="mobile_cta">
                        <div class="breadcrumb" style="margin-top: 2px; text-align: center">
                            <a
                                v-if="!sold"
                                href="#contact_anchor"
                                style="display: inline-block; margin: 0 auto 24px auto; background-color: #2c57ac"
                                class="mobile_buy_cta"
                                >Buy Painting / Contact Us</a
                            >
                        </div>
                        <ul
                            v-if="painting.highlights.length > 0 && !sold"
                            class="checkmark"
                            style="width: 100%; max-width: 350px; margin: auto"
                        >
                            <li v-for="(highlight, index) in painting.highlights" :key="index">
                                {{ highlight.highlight }}
                            </li>
                        </ul>
                    </div>
                    <div class="breadcrumb view_on_wall" style="margin-top: 10px">
                        <artplacer
                            gallery="3188"
                            type="1"
                            text="VIEW THIS PAINTING ON YOUR WALL"
                            classname="btn_wall_view"
                            artwork_url="https://www.bedfordfineartgallery.com/images/perspective_crop/fredericks_winter_full.jpg"
                            frames="false"
                            catalog="false"
                            size="36 x 29.75"
                            height="29.75"
                        ></artplacer>
                    </div>

                    <div v-if="!sold" style="width: 100%; max-width: 340px; margin: auto">
                        <p style="text-align: left; padding-bottom: 10px; padding-top: 20px; font-weight: bold">
                            Click the button above, then 3 easy steps:
                        </p>
                        <div class="list_flex">
                            <div class="list_cirlce">1</div>
                            <div>Upload a photo of your room.</div>
                        </div>
                        <div class="list_flex">
                            <div class="list_cirlce">2</div>
                            <div>Define an area in the photo.</div>
                        </div>
                        <div class="list_flex">
                            <div class="list_cirlce">3</div>
                            <div>Choose the <span style="font-weight: bold">HEIGHT OF THE AREA.</span></div>
                        </div>
                        <p style="text-decoration: underline; font-size: 13px; text-align: left">
                            <a href="how_to_view_a_painting_on_your_wall.htm" target="_blank" style="color: #5f5f5f"
                                >Full Instructions &raquo;</a
                            >
                        </p>
                    </div>
                    <div v-if="painting.artist.hasLandingPage" class="breadcrumb">
                        <nuxt-link
                            :to="`/${painting.artist.slug.replace('-html', '.html')}`"
                            style="width: 90%; margin: 0 auto 24px auto"
                            >View all Paintings from this Artist</nuxt-link
                        >
                    </div>
                    <YouTubeVideo v-if="painting.youtubeEmbedLink" :link="painting.youtubeEmbedLink" />
                    <!-- testimonials desktop -->
                    <div
                        class="container test_int_desktop"
                        style="padding-top: 24px; width: 90%; margin: 20px auto; background-color: rgba(16, 88, 185, 1)"
                    >
                        <section class="wrapper" style="width: 90%; max-width: 860px; margin: auto">
                            <div class="home_test">
                                <TestimonialsScroll />
                            </div>
                            <!--#include virtual="testimonials_scroll.html"-->
                        </section>
                    </div>
                    <!-- end testimonials desktop -->
                </div>

                <div class="col_60 artwork_details">
                    <div class="desktop_cta">
                        <ul v-if="painting.highlights.length > 0 && !sold" class="checkmark">
                            <li v-for="(highlight, index) in painting.highlights" :key="index">
                                {{ highlight.highlight }}
                            </li>
                        </ul>
                        <div class="breadcrumb" style="margin-top: 16px; text-align: left">
                            <a
                                v-if="!sold"
                                href="#contact_anchor"
                                style="display: inline-block; margin: 0 auto 24px auto; background-color: #2c57ac"
                                >Buy Painting / Contact Us</a
                            >
                        </div>
                    </div>

                    <!-- eslint-disable vue/no-v-html -->
                    <div v-interpolation class="detail_content" v-html="$md.render(painting.body)" />
                    <!--eslint-enable-->

                    <div id="contact_anchor" class="more_info">
                        <h3 style="text-transform: none; color: #841012; font-size: 1.1em; line-height: 1.3em">
                            Call now to talk about your interest in this painting:
                            <a
                                href="tel:1-724-459-0612"
                                style="text-decoration: none; color: #841012"
                                class="mobile_phone_link"
                                >724-459-0612</a
                            ><span style="display: block; padding-top: 4px"> Jerry Hawk, Bedford Fine Art Gallery</span
                            ><span style="display: block; padding-top: 16px; padding-bottom: 16px">OR</span
                            ><span
                                style="
                                    display: block;
                                    color: #841012;
                                    max-width: 450px;
                                    margin: auto;
                                    line-height: 24px;
                                "
                                >Email us using the form below to set up a convenient time to talk about any
                                paintings.</span
                            >
                        </h3>

                        <ContactForm form-name="Painting" form-type="desktop" :painting-title="painting.title" :artist-name-with-tiny-description="artistNameWithTinyDescription" />
                        <ContactForm form-name="Painting" form-type="mobile" :painting-title="painting.title" :artist-name-with-tiny-description="artistNameWithTinyDescription" />
                    </div>
                </div>
                <div class="breadcrumb"><nuxt-link :to="{ name: 'artists-bios' }">Back to Gallery</nuxt-link></div>
            </section>
        </div>
    </div>
</template>

<script>
import YouTubeVideo from '~/components/YouTubeVideo'

export default {
    components: { YouTubeVideo },
    props: {
        painting: {
            type: Object,
            required: true,
        },
    },
    computed: {
        artistNameWithTinyDescription() {
            let nameWithTinyDescription = this.painting.artist.name
            if (this.painting.artist.tinyDescription) {
                nameWithTinyDescription += ` (${this.painting.artist.tinyDescription})`
            }

            return nameWithTinyDescription
        },
		sold() {
			return this.painting.status === 'Sold'
		}
    },
}
</script>

<style scoped>
.artwork img {
    width: 90% !important;
    height: auto;
}
</style>
