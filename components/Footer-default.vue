<template>
    <div class="container compliment">
        <section class="wrapper clearfix">
            <ul class="footerNav">
                <li><nuxt-link to="/">home</nuxt-link></li>
                <li><nuxt-link :to="{ name: 'artists-bios' }">gallery</nuxt-link></li>
                <li><nuxt-link :to="{ name: 'artists' }">artists</nuxt-link></li>
                <li><nuxt-link :to="{ name: 'gallery-value' }">about</nuxt-link></li>
                <li><nuxt-link :to="{ name: 'highlights' }">articles</nuxt-link></li>
                <li><nuxt-link :to="{ name: 'faq' }">faqs</nuxt-link></li>
                <li><nuxt-link :to="{ name: 'directions' }">visit</nuxt-link></li>
            </ul>

            <div class="flex_wrap footer">
                <div class="flex_5">
                    We accept: <nuxt-img class="cc" src="/cc.png" width="286" height="44" alt="" />
                    <p>
                        230 South Juliana St.<br />
                        Bedford PA 15522
                    </p>
                    <p class="home_phone">Phone: 724-459-0612</p>
                </div>
                <div class="flex_5 float_right" style="text-align: center">
                    <p class="disclaimer">
                        All content and photos are copyrighted property of Bedford Fine Art Gallery, 19th century art
                        dealer, Bedford PA and can not be reproduced or copied without consent.
                    </p>
                    <p>
                        <nuxt-link to="/remove/" style="color: #ccb38d">Unsubscribe from our mailing list</nuxt-link>
                        <nuxt-link to="/privacy" style="color: #ccb38d; margin-left: 10px">Privacy</nuxt-link>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
