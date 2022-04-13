<template>
    <div class="containerNav compliment">
        <section class="wrapper clearfix">
            <header>
                <div class="logo">
                    <nuxt-link to="/"><nuxt-img src="/logo.png" width="123" height="124" alt="American Sporting Art"
                    /></nuxt-link>
                </div>

                <div class="headerTagline">
                    <p>Enriching today’s décor with exceptional paintings from the past</p>
                </div>
            </header>

            <nav id="menu">
                <ul id="menu-closed">
                    <li><nuxt-link to="/">home</nuxt-link></li>
                    <li><nuxt-link to="/artists-bios/">gallery</nuxt-link></li>
                    <li><nuxt-link to="/artists/">artists</nuxt-link></li>
                    <li><nuxt-link to="/gallery-value/">about</nuxt-link></li>
                    <li><nuxt-link to="/highlights/">articles</nuxt-link></li>
                    <li><nuxt-link to="/faq/">faqs</nuxt-link></li>

                    <li><nuxt-link to="/">visit</nuxt-link></li>
                    <li><a href="#menu-closed">&#215; Close</a></li>
                    <li><a href="#menu">&#9776; More</a></li>
                </ul>
            </nav>
        </section>
    </div>
</template>
