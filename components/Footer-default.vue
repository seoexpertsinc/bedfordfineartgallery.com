<template>
    <div class="container compliment">
        <section class="wrapper clearfix">
            <ul class="footerNav">
                 <li><nuxt-link to="/">home</nuxt-link></li>
                    <li><nuxt-link to="/artists-bios/">gallery</nuxt-link></li>
                    <li><nuxt-link to="/artists/">artists</nuxt-link></li>
                    <li><nuxt-link to="/gallery-value/">about</nuxt-link></li>
                    <li><nuxt-link to="/highlights/">articles</nuxt-link></li>
                    <li><nuxt-link to="/faq/">faqs</nuxt-link></li>

                    <li><nuxt-link to="/">visit</nuxt-link></li>
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
                        <a style="color: #ccb38d" href="remove.htm">Unsubscribe from our mailing list</a>
                        <a style="color: #ccb38d; margin-left: 10px" href="privacy.htm">Privacy</a>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
