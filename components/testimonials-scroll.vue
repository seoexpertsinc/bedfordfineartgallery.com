<template>
    <div>
        <VueSlickCarousel v-bind="settings">
            <div>
                <p class="reverse" style="text-align: left">
                    "Jerry and his wife are wonderful people. They go above and beyond to help the customer get exactly
                    what they were looking for, even if the customer is unsure. In this age of internet shopping, few
                    can pull off personalized and professional customer service, but Bedford Fine Art Gallery has
                    perfected it! Very responsive and no nonsense with true knowledge on all of their paintings. Shipped
                    safely and fast, I’m deciding on my next painting and would trust nobody more."
                </p>
                <span style="display: block; font-weight: bold; color: #edebdb; padding-left: 10px"
                    >Christopher K.</span
                >
            </div>
            <div>
                <p class="reverse" style="text-align: left">
                    "My wife Theresa and I are pretty ordinary people, who love extraordinary art. Discovering Bedford
                    Fine Art Gallery and working with Jerry and Joan to purchase our first picture from them has been a
                    smooth and joyful experience — and we haven’t even met in person yet. Gotta love internet commerce!
                    And while we anticipate a wonderful visit to the actual gallery one day, our trust in their
                    expertise and integrity is complete. “Stepping Stones,” a beautiful British landscape, is now under
                    our family's care for the second 150 years of its life, and more, I hope, a trust we welcome. Thank
                    you Jerry and Joan!"
                </p>
                <span style="display: block; font-weight: bold; color: #edebdb; padding-left: 10px"
                    >Bob and Theresa L.</span
                >
            </div>
            <div>
                <p class="reverse" style="text-align: left">
                    "From the initial encounter with Jerry I thought, "Now, this is a kind and considerate soul." My
                    initial impression was affirmed through each step of the process, concluding with the purchase of
                    our first piece of 19 th century artwork! Never once did I feel pressured nor was the conversation
                    forced. Jerry readily conveys his passion for and knowledge of the masterful works from this
                    wonderful period in art history. If art speaks, then Jerry ably facilitates the conversation! From
                    the first call through receipt of the expertly packaged artwork, the Bedford Fine Art Gallery
                    excels!"
                </p>
                <span style="display: block; font-weight: bold; color: #edebdb; padding-left: 10px">Randy B.</span>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
                arrows: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 10000,
                adaptiveHeight: true,
            },
        }
    },
}
</script>
