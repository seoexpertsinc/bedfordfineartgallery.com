<template>
    <div>
        <div class="container primary">
            <section class="wrapper">
                <div class="grid">
                    <div>
                        <div>
                            <div class="flex_home_logo_tagline">
                                <div>
                                    <nuxt-img
                                        loading="lazy"
                                        class="home_logo"
                                        src="/logo.png"
                                        width="123"
                                        height="124"
                                        alt="19th Century Paintings"
                                    />
                                </div>
                                <div>
                                    <h2 class="home_tagline">The most honest art gallery in the world</h2>
                                </div>
                            </div>
                            <div style="display: block; width: 100%; padding-top: 10px">
                                <nuxt-img
                                    class="home-lead-photo"
                                    loading="lazy"
                                    src="/joan_jerry22.jpg"
                                    width="1200"
                                    height="1652"
                                    alt=""
                                />

                                <div class="breadcrumb" style="margin-top: 10px">
                                    <a
                                        style="display: block; width: 100%"
                                        href="tel:1-724-459-0612"
                                        class="content_btn home_btn_small"
                                        ><span class="btn_text_break">Call us anytime: 724-459-0612</span></a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div style="max-width: 550px; margin: auto">
                            <div class="video-container">
                                <iframe src="https://www.youtube.com/embed/xQjafbqEYWI?playlist=xQjafbqEYWI&loop=1&rel=0&autoplay=1&mute=1&controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="breadcrumb" style="margin-top: 10px">
                            <nuxt-link
                                :to="{ name: 'art-lovers-niche' }"
                                style="display: block; width: 100%"
                                class="content_btn home_btn_small"
                                ><span class="btn_text_break">Join us at </span> Art Lovers' Niche.
                                <span class="btn_text_break">Don't miss out!</span></nuxt-link
                            >
                        </div>
                    </div>

                    <div>
                        <div style="max-width: 550px; margin: auto">
                            <div class="video-container">
                                <YouTubeVideo link="https://www.youtube.com/embed/TGu-5wpJxGw?rel=0" />
                            </div>
                        </div>
                        <div class="breadcrumb" style="margin-top: 10px">
                            <nuxt-link
                                :to="{ name: 'artists-bios' }"
                                style="display: block; width: 100%"
                                class="content_btn home_btn_small"
                                ><span class="btn_text_break">click now to find a painting</span>
                                <span class="btn_text_break">that "speaks to you"</span></nuxt-link
                            >
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="container secondary" style="padding-top: 24px">
            <section class="wrapper" style="max-width: 860px; margin: auto">
                <h2 id="testimonialsAnchor" class="reverse_header" style="margin-top: 0px">
                    Our Customers are the best! There is a reason over 40,000 people flock to our website annually to
                    find fine art they love - It's because we earn your trust. Here's what our customers have to say:
                </h2>

                <div class="home_test">
                    <TestimonialsScroll :testimonials="testimonials" />
                </div>
                <nuxt-link
                    :to="{ name: 'testimonials' }"
                    class="rd_more rd_more_blue"
                    style="
                        text-decoration: none;
                        background: #742924;
                        max-width: 200px;
                        text-align: center;
                        margin-bottom: 0px;
                    "
                    >See More Reviews</nuxt-link
                >
            </section>
        </div>

        <div class="container primary" style="padding-top: 32px">
            <section class="wrapper">
                <div style="padding-bottom: 24px">
                    <CustomerSlidingImages />
                </div>
                       <div class="home_sales">
                    <p class="home_thumbnails" style="color: rgba(16, 88, 185, 1); text-align: center">
                        Bedford Fine Art Gallery is your best resource for finding paintings with that "wow factor",
                        that are the focal point in any room. The best testimonials to the fine art people have fallen
                        in love with are our notable sales to many happy customers throughout the United States and in
                        select locations around the world.
                    </p>

                    <h2
                        id="testimonialsAnchor"
                        class="reverse_header"
                        style="margin-top: 0px; color: rgba(16, 88, 185, 1)"
                    >
                        Some notable sales to many happy customers
                    </h2>
                </div>

                <NotableSales :sold-paintings="soldPaintings" />

                <div class="flex_wrap" style="clear: both; padding-top: 15px">
                    <div class="flex_3">
                        <h2
                            style="
                                color: #742924;
                                text-transform: capitalize;
                                text-align: center;
                                padding: 10px;
                                font-size: 20px;
                                font-weight: bold;
                            "
                        >
                            Virtual Tour
                        </h2>
                        <div class="video-container">
                            <YouTubeVideo link="https://www.youtube.com/embed/iQuzsnwvbM8?rel=0" />
                        </div>
                        <div class="breadcrumb desktop_hide" style="margin-top: 15px; margin-bottom: 15px">
                            <nuxt-link :to="{ name: 'artists-bios' }"
                        >Show me a painting I will love</nuxt-link>
                        </div>
                    </div>
                    <div class="flex_3">
                        <h2
                            style="
                                color: #742924;
                                text-transform: capitalize;
                                text-align: center;
                                padding: 10px;
                                font-size: 20px;
                                font-weight: bold;
                            "
                        >
                            Art Lovers' Niche
                        </h2>
                        <div class="video-container">
                            <YouTubeVideo link="https://www.youtube.com/embed/oY3C5t3A1zQ?rel=0" />
                        </div>
                        <div class="breadcrumb desktop_hide" style="margin-top: 15px; margin-bottom: 15px">
                            <nuxt-link :to="{ name: 'art-lovers-niche' }"
                        >Join us at art lovers' niche<br />don't miss out!</nuxt-link>
                        </div>
                    </div>
                    <div class="flex_3">
                        <h2
                            style="
                                color: #742924;
                                text-transform: capitalize;
                                text-align: center;
                                padding: 10px;
                                font-size: 20px;
                                font-weight: bold;
                            "
                        >
                            Instagram
                        </h2>
                        <a href="https://www.instagram.com/bedfordfineartgallery/" target="_blank"
                            ><nuxt-img src="instagram_invite.jpg" width="675" height="525" alt=""
                        /></a>
                        <div class="breadcrumb desktop_hide" style="margin-top: 15px; margin-bottom: 15px">
                            <a href="https://www.instagram.com/bedfordfineartgallery/" target="_blank"
                                >Follow us on Instagram</a
                            >
                        </div>
                    </div>
                </div>

                <div class="flex_wrap desktop_show" style="clear: both; padding-top: 15px">
                    <div class="flex_3">
                        <div class="breadcrumb" style="margin-top: 0">
                            <a class="home_btn_small" href="Artists--Bios.html">Show me a painting<br />I will love</a>
                        </div>
                    </div>

                    <div class="flex_3">
                        <div class="breadcrumb" style="margin-top: 0">
                            <a class="home_btn_small" href="art_lovers_niche.htm"
                                >Get more of Bedford Fine<br />Art Gallery! Subscribe</a
                            >
                        </div>
                    </div>

                    <div class="flex_3">
                        <div class="breadcrumb" style="margin-top: 0">
                            <a
                                class="home_btn_small"
                                href="https://www.instagram.com/bedfordfineartgallery/"
                                target="_blank"
                                >Follow us<br />on Instagram</a
                            >
                        </div>
                    </div>
                </div>
                <div style="padding-top: 32px; padding-bottom: 24px">
                    <nuxt-img
                        loading="lazy"
                        class="img_full"
                        src="/whats_in_it.jpg"
                        width="1200"
                        height="872"
                        alt="19th Century Paintings"
                    />
                </div>

                <ArtworkSlidingImagesHome :scrolling-homepage-images="scrollingHomepageImages" />


            </section>
        </div>

        <div class="container secondary" style="padding-bottom: 24px">
            <section class="wrapper clearfix" style="max-width: 860px; margin: auto">
                <h2 id="testimonialsAnchor" class="reverse_header" style="margin-top: 0px">
                    For over 30 years we have had the great pleasure to work with leaders who share our passion for fine
                    art - here are some of the kind words they had to say:
                </h2>

                <nuxt-picture
                    :img-attrs="{ class: 'star_img' }"
                    loading="lazy"
                    src="star_reviews.png"
                    width="1566"
                    height="283"
                    alt=""
                />
                <div>
                    <p class="more" style="text-align: left">
                        "I first met Joan and Jerry through a recommendation from my sister to go see their wonderful
                        collection. Once I started to talk with them, I could see how much they loved learning about the
                        psychology of art like me! I had the privilege to speak about Dialectical Behavioral Therapy art
                        viewing and how the brain works when you view art. Art creates a safe place to bring forth
                        emotions and Bedford Fine Art Gallery provided a relaxed environment, helping people find the
                        art they love."
                    </p>
                    <span style="display: block; font-weight: bold; color: #f2f2f2; padding-top: 10px"
                        >Dr. Terri Nicole Sawyer, LCSW, CFLE + C-DBT</span
                    >
                </div>

                <nuxt-picture
                    :img-attrs="{ class: 'star_img' }"
                    loading="lazy"
                    src="star_reviews.png"
                    width="1566"
                    height="283"
                    alt=""
                />
                <div>
                    <p class="more" style="text-align: left">
                        "My interest in art conservation began as an undergraduate student at Boston University's
                        College of Fine Arts, from which I earned my BFA in Painting and Printmaking. This experience
                        led me to entry into the three year graduate program in Painting Conservation sponsored by
                        Dominican University ( Rosary College ), River Forest, IL conducted at the Villa Schifanoia,
                        Florence Italy, from which I earned my MFA in Painting Conservation. I am approaching my
                        fiftieth year as a practitioner and for at least half of that time, it has been my pleasure to
                        include in my clientele, Joan and Jerry Hawk, proprietors of Bedford Fine Art Gallery, Bedford
                        PA. They are conscientious and attentive to the requirements of caring for and maintaining art
                        work in the most responsible manner and I see the attention applied to the interest of their
                        prospective clients as well."
                    </p>
                    <span style="display: block; font-weight: bold; color: #f2f2f2; padding-top: 10px"
                        >Michael Max Mosorjak, MFA, BFA, Proprietor of Painting Conservation Laboratory</span
                    >
                </div>

                <nuxt-picture
                    :img-attrs="{ class: 'star_img' }"
                    loading="lazy"
                    src="star_reviews.png"
                    width="1566"
                    height="283"
                    alt=""
                />
                <div>
                    <p class="more" style="text-align: left">
                        "As the site director to the Southern Alleghenies Museum of Art in Bedford, I have worked with
                        Jerry as the head of SAMA's Acquisitions Committee, Vice President of Development, and as an
                        active board member. His unyielding passion for fine art is ever-present. Additionally, I have
                        had the pleasure of working with his wife, Joan. Her exquisite taste in fine art has been a
                        tremendous resource when working together to display selections from our permanent collection
                        that numbers over 7,000 works from local, regional, national and international artists. They
                        both have a sharp eye for detail, and together, Jerry and Joan have been continual key figures
                        in the procuring and exhibiting of art for SAMA. I find their support and dedication to the
                        organization to be significant, substantial, and detailed."
                    </p>
                    <span style="display: block; font-weight: bold; color: #f2f2f2; padding-top: 10px"
                        >Morgan Young, BFA, Bedford Site Director Southern Alleghenies Museum of Art.</span
                    >
                </div>

                <nuxt-picture
                    :img-attrs="{ class: 'star_img' }"
                    loading="lazy"
                    src="star_reviews.png"
                    width="1566"
                    height="283"
                    alt=""
                />
                <div>
                    <p class="more" style="text-align: left">
                        "I make it a point to visit other gallery's whenever I travel. Sadly, I'm usually disappointed
                        by both the quality of the artwork shown and the presentation. I was very pleasantly surprised
                        by the Bedford Gallery's Collection in both depth and quality. The gallery exhibited an
                        interesting collection of 19th and early 20th Century artists supported with meaningful
                        biographical data. The exhibition spaces were complimentary and an unusual surprise in a quaint
                        historic city. Far superior to most of the galleries that I've visited in most big American
                        cities."
                    </p>
                    <span style="display: block; font-weight: bold; color: #f2f2f2; padding-top: 10px"
                        >Sam Berkovitz, Certified Appraiser, Appraisers Association of America.</span
                    >
                </div>
            </section>
        </div>

        <div class="container secondary_dk" style="padding-bottom: 24px">
            <section class="wrapper clearfix" style="margin: auto; max-width: 1000px">
                <div class="grid_2">
                    <div id="start_vid">
                        <h2
                            style="
                                color: #742924;
                                text-transform: capitalize;
                                text-align: center;
                                padding: 10px;
                                font-size: 20px;
                                font-weight: bold;
                            "
                        >
                            Dr. Terri Nicole Sawyer
                        </h2>
                        <div class="video-container">
                            <YouTubeVideo link="https://www.youtube.com/embed/cFAempT0P1Y?rel=0" />
                        </div>
                    </div>

                    <div id="video_anchor">
                        <h2
                            style="
                                color: #742924;
                                text-transform: capitalize;
                                text-align: center;
                                padding: 10px;
                                font-size: 20px;
                                font-weight: bold;
                            "
                        >
                            Charles Augustus (Shorty) Lasar Artist Quotes
                        </h2>
                        <div id="video_anchor" class="video-container">
                            <YouTubeVideo link="https://www.youtube.com/embed/6cJ4bSC_AGw?rel=0" />
                        </div>
                    </div>
                </div>
                <div style="padding: 24px 0px">
                    <ArtworkSlidingImagesHome :scrolling-homepage-images="scrollingHomepageImages" />
                </div>
                <div class="breadcrumb">
                    <nuxt-link :to="{ name: 'artists' }" class="content_btn"
                        >view over 250 well listed artists</nuxt-link
                    >
                </div>
            </section>
        </div>

        <div class="container primary" style="padding-bottom: 24px">
            <section class="wrapper clearfix as_seen_in_container">
                <nuxt-img
                    loading="lazy"
                    class="home_logo"
                    src="logo.png"
                    width="123"
                    height="124"
                    style="width: 100%; height: auto"
                    alt="19th Century Paintings"
                /><span>As Seen In:</span>

                <div class="as_seen_in">
                    <div>American Art Review</div>
                    <div>Pittsburgh Quarterly</div>
                    <div>Carnegie Magazine</div>
                    <div>Johnstown Magazine</div>
                    <div>Elan Magazine</div>
                    <div>Allegany Magazine</div>
                    <div>Bedford Gazette</div>
                </div>
            </section>
        </div>

        <!--<div class="container secondary_dk" style="padding-bottom: 24px">
            <section class="wrapper clearfix">
                <div class="flex_2">
                    <div id="start_vid" style="max-width: 550px; margin: 23px auto 0px auto">
                        <h2
                            style="
                                color: #742924;
                                text-transform: capitalize;
                                text-align: center;
                                padding: 10px;
                                font-size: 20px;
                                font-weight: bold;
                            "
                        >
                            Dr. Terri Nicole Sawyer
                        </h2>
                        <div class="video-container" style="margin: 0px auto 30px auto; width: 90%">
                            <YouTubeVideo link="https://www.youtube.com/embed/cFAempT0P1Y?rel=0" />
                        </div>
                    </div>

                    <div id="video_anchor" style="max-width: 550px; margin: 23px auto 0px auto">
                        <h2
                            style="
                                color: #742924;
                                text-transform: capitalize;
                                text-align: center;
                                padding: 10px;
                                font-size: 20px;
                                font-weight: bold;
                            "
                        >
                            Virtual Tour
                        </h2>
                        <div id="video_anchor" class="video-container" style="margin: 0px auto 30px auto; width: 90%">
                            <YouTubeVideo link="https://www.youtube.com/embed/iQuzsnwvbM8?rel=0" />
                        </div>
                    </div>
                </div>

                <div class="breadcrumb">
                    <nuxt-link :to="{ name: 'artists-bios' }" class="content_btn"
                        >show me a painting i will love</nuxt-link
                    >
                </div>

                <h2
                    style="
                        color: #742924;
                        text-transform: capitalize;
                        text-align: center;
                        padding: 10px;
                        font-size: 20px;
                        font-weight: bold;
                        padding-top: 40px;
                    "
                    class="secondary_dk_divider"
                >
                    Our Story
                </h2>
                <div style="max-width: 660px; margin: auto">
                    <div class="video-container2" style="clear: both">
                        <YouTubeVideo link="https://www.youtube.com/embed/UlgTd5n_CEE?rel=0" />
                    </div>
                </div>
                <p style="color: #742924; font-weight: bold; text-align: center; margin-top: 20px">
                    <span>Want to read our story?</span
                    ><nuxt-link
                        :to="{ name: 'gallery-value' }"
                        style="
                            display: block;
                            max-width: 300px;
                            background: rgba(16, 88, 185, 1);
                            color: #f2f2f2;
                            text-decoration: none;
                            padding: 12px;
                            margin: auto;
                            margin-top: 12px;
                            text-align: center;
                        "
                        >ABOUT THE GALLERY</nuxt-link
                    >
                </p>
            </section>
        </div>-->

        <div class="container secondary_dk" style="padding-bottom: 24px">
            <section class="wrapper clearfix scondary_dk_divider">
                <div class="flex_wrap">
                    <div class="flex_3">
                        <div class="video-container">
                            <YouTubeVideo link="https://www.youtube.com/embed/5I8BEyiGICs?rel=0" />
                        </div>
                    </div>
                    <div class="flex_3">
                        <div class="video-container">
                            <YouTubeVideo link="https://www.youtube.com/embed/3asJzvyy-ZQ?rel=0" />
                        </div>
                    </div>
                    <div class="flex_3">
                        <div class="video-container">
                            <YouTubeVideo link="https://www.youtube.com/embed/o6PhOHhaA5M?rel=0" />
                        </div>
                    </div>
                </div>

                <div class="breadcrumb">
                    <nuxt-link :to="{ name: 'artists-bios' }" class="content_btn"
                        >click to view over 250 unique paintings for sale now</nuxt-link
                    >
                </div>
            </section>
        </div>

        <div class="container primary" style="padding-bottom: 0px">
            <section class="wrapper clearfix">
                <div class="col_40">
                    <h2 id="homeGallery" class="h1">
                        Bedford Fine Art<span class="hr"></span><span class="headingSub">gallery</span>
                    </h2>

                    <div class="artwork leadPhoto">
                        <nuxt-link to="Artists--Bios.html"
                            ><nuxt-picture
                                :img-attrs="{ class: 'art_detail_img' }"
                                loading="lazy"
                                class="art_detail"
                                src="gallery_logo.jpg"
                                width="798"
                                height="515"
                        /></nuxt-link>
                    </div>
                    <div class="scroll_container scroller_show" style="margin-top: 46px">
                        <ArtworkSlidingImages />
                    </div>
                </div>
                <div class="col_60">
                    <h2
                        style="
                            clear: both;
                            font-size: 22px;
                            color: #732824;
                            border-bottom: 1px solid #ddddb5;
                            margin-bottom: 12px;
                        "
                    >
                        Bedford Fine Art Gallery is the ultimate destination for fine art.
                    </h2>

                    <div class="p_list_hide">
                        <ul class="p_list" style="background: none; padding-top: 0px; padding-bottom: 0px">
                            <li>
                                <span style="font-weight: bold">ART IS SMART:</span> Your home is typically your biggest
                                investment, so it makes sense to enrich your beautiful home with the perfect complement
                                – fine art.
                            </li>
                            <li>
                                <span style="font-weight: bold">BEST OF THE BEST:</span> We specialize in the sale of
                                unique original 19th century paintings by well-listed 19th century artists at the
                                pinnacle of their prestigious careers.
                            </li>
                        </ul>
                        <ul class="p_list hide" style="background: none; padding-top: 0px; padding-bottom: 0px">
                            <li>
                                <span style="font-weight: bold">OLD IS THE NEW NEW!:</span> Like the beautiful
                                architecture of an older building or the sleek lines of a classic automobile, good art
                                is timeless.
                            </li>
                            <li>
                                <span style="font-weight: bold">EXPERIENCE COUNTS:</span> With over 30 years of
                                experience collecting fine art, we exceed expectations for both the new buyer and the
                                seasoned fine art collector.
                            </li>
                            <li>
                                <span style="font-weight: bold">IMPECCABLE ETHICS:</span> You can trust our reputation
                                by viewing the paintings we have sold, throughout the years, to many happy customers.
                            </li>
                            <li>
                                <span style="font-weight: bold">OUTSTANDING SELECTION:</span> Over 200 paintings for you
                                to fall in love with.
                            </li>
                            <li>
                                <span style="font-weight: bold">YOUR LEGACY:</span> You acquire a piece of history that
                                preserves your legacy and lives on forever.
                            </li>
                            <li>
                                <span style="font-weight: bold">PAINTING QUALITY</span>: Unlike most galleries and
                                auction houses, the painting you purchase from Bedford Fine Art Gallery is ready to hang
                                on your wall from day-one, for many years of enjoyment.
                                <span v-if="readMore"></span>
                                <span v-else></span>
                            </li>
                        </ul>

                        <ul v-show="readMore" class="p_list">
                            <li>
                                <span style="font-weight: bold">PAINTING IMAGE:</span> Our in-house photo studio ensures
                                you get representative images.
                            </li>

                            <li>
                                <span style="font-weight: bold">UP-TO-DATE WEBSITE:</span> We pride ourselves with
                                bringing you a user-friendly website that is always up-to-date with artwork currently
                                available as well as listing sold items.
                            </li>
                            <li>
                                <span style="font-weight: bold">ZOOM / SUPER ZOOM:</span> We have a feature on our
                                website that allows you to view a painting up close in great detail, perhaps as well or
                                better than in person.
                            </li>
                            <li>
                                <span style="font-weight: bold">CUSTOM APP:</span> Our App allows you to see how a
                                painting will look on YOUR wall.
                            </li>
                            <li>
                                <span style="font-weight: bold">AUTHENTICITY GUARANTEE:</span> You get a guarantee of
                                authenticity.
                            </li>
                            <li>
                                <span style="font-weight: bold">TRADE-IN GUARANTEE:</span> You get a trade-in guarantee,
                                so the value of your artwork never decreases.
                            </li>
                            <li>
                                <span style="font-weight: bold">PRIVATE VIEWING:</span> We can bring art to you, within
                                a set distance, to preview in private.
                            </li>
                            <li>
                                <span style="font-weight: bold">PREMIUM SHIPPING:</span> We take the painting you
                                purchase to a local business and the owner properly packages your artwork, ensuring the
                                best possible protection.
                            </li>
                            <li>
                                <span style="font-weight: bold">BIG CITY ART AT SMALL TOWN PRICES:</span> Unlike big
                                city galleries in New York, Washington DC or large auction houses, we do not have
                                overhead costs (building rental, consignment mark-ups, staff salaries/benefits, buyer’s
                                premium, etc.) and we pass these savings onto you to ensure you get the best painting at
                                the best value.
                            </li>
                        </ul>

                        <button class="rd_more" @click="readMore = !readMore">
                            <span v-if="readMore">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>

        <div class="container primary" style="padding: 0px; padding-bottom: 24px">
            <section class="wrapper clearfix">
                <ul class="callout_nav">
                    <li style="font-weight: bold">View Categories:</li>
                    <li><nuxt-link :to="{ name: 'landscape-artwork' }">Landscape</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link :to="{ name: 'marine-artwork' }">Marine</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link :to="{ name: 'still-life-artwork' }">Still Life</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link :to="{ name: 'genre-artwork' }">Genre</nuxt-link></li>
                    <li class="divider">/</li>
                    <li>
                        <nuxt-link :to="{ name: 'historical-and-political-artwork' }"
                            >American Historical / Political</nuxt-link
                        >
                    </li>
                    <li class="divider">/</li>
                    <li><nuxt-link :to="{ name: 'sporting-art' }">Sporting Art</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link :to="{ name: 'animal-artwork' }">Animal Theme</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link :to="{ name: 'sculpture' }">Sculptures</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link :to="{ name: 'artists-bios' }">All</nuxt-link></li>
                </ul>
            </section>
        </div>

        <div class="container secondary">
            <section class="wrapper clearfix">
                <div class="col_40">
                    <h1 id="homeArt" class="reverse">
                        19th Century<span class="hr_reverse"></span><span class="headingSub">paintings</span>
                    </h1>
                </div>
                <div class="col_60">
                    <p class="reverse">
                        Welcome to Bedford Fine Art Gallery. Located in historic Bedford, Pennsylvania, the gallery
                        offers a wide variety of works from some of the greatest and most well-known 19th century
                        artists, early 20th century artists, and contemporary realism artists. You can see all of our
                        available 19th century artwork on our
                        <nuxt-link :to="{ name: 'artists-bios' }" class="internalLinkReverse">Gallery page</nuxt-link>.
                        Our current inventory boasts a wide diversity of subject matter from
                        <nuxt-link :to="{ name: 'landscape-artwork' }" class="internalLinkReverse">landscape</nuxt-link
                        >, <nuxt-link :to="{ name: 'marine-artwork' }" class="internalLinkReverse">marine</nuxt-link>,
                        <nuxt-link :to="{ name: 'still-life-artwork' }" class="internalLinkReverse"
                            >still life</nuxt-link
                        >, <nuxt-link :to="{ name: 'genre-artwork' }" class="internalLinkReverse">genre</nuxt-link>,

                        <nuxt-link :to="{ name: 'historical-and-political-artwork' }" class="internalLinkReverse"
                            >American historical/political</nuxt-link
                        >
                        ,
                        <nuxt-link :to="{ name: 'sporting-art' }" class="internalLinkReverse">sporting art</nuxt-link>,
                        and
                        <nuxt-link :to="{ name: 'animal-artwork' }" class="internalLinkReverse">animal</nuxt-link>
                        themes and <nuxt-link :to="{ name: 'sculpture' }" class="internalLinkReverse">sculptures</nuxt-link>. Our gallery features both American and European 19th century painters such as
                        <nuxt-link to="john_henry_dolph_art.html" class="internalLinkReverse"
                            >John Henry Dolph</nuxt-link
                        >, <nuxt-link to="george_hetzel.html" class="internalLinkReverse">George Hetzel</nuxt-link>,
                        <nuxt-link to="william_bromley_III.html" class="internalLinkReverse"
                            >William Bromley III</nuxt-link
                        >, and
                        <nuxt-link to="barton_stone_hays_art.html" class="internalLinkReverse"
                            >Barton Stone Hays</nuxt-link
                        >, to name a few. To see more of our 19th century artists, please visit our
                        <nuxt-link :to="{ name: 'artists' }" class="internalLinkReverse">Artists page</nuxt-link>. Good
                        art is timeless and only you know what &quot;wows&quot; you. You know it when you see it and we
                        hope you make that connection with a stunning painting from Bedford Fine Art Gallery. Thank you.
                    </p>
                </div>
                <div class="clear">
                    <ArtworkSlidingImagesHome :scrolling-homepage-images="scrollingHomepageImages" />
                </div>
                <div class="breadcrumb">
                    <nuxt-link :to="{ name: 'artists-bios' }">click to view over 250 unique paintings</nuxt-link>
                </div>
            </section>
        </div>

        <div style="text-align: center; background-color: #efefde; padding: 24px 12px">
            <!--<div class="flex_2" style="max-width: 1060px; margin: auto">
                <div>
                    <h2
                        style="
                            color: #742924;
                            text-transform: capitalize;
                            text-align: center;
                            padding: 10px;
                            font-size: 20px;
                            font-weight: bold;
                        "
                    >
                        Downtown Bedford, Inc. - Initial interview
                    </h2>
                    <div class="video-container" style="clear: both; width: 100%">
                        <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FDowntownBedford%2Fvideos%2F516727528841595%2F&show_text=0&width=560&mute=0"
                            width="560"
                            height="315"
                            style="border: none; overflow: hidden"
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"
                            allowFullScreen="true"
                        ></iframe>
                    </div>
                </div>

                <div>
                    <h2
                        style="
                            color: #742924;
                            text-transform: capitalize;
                            text-align: center;
                            padding: 10px;
                            font-size: 20px;
                            font-weight: bold;
                        "
                    >
                        Charles Augustus (Shorty) Lasar Artist Quotes
                    </h2>
                    <div class="video-container" style="width: 100%; padding-top: 0">
                        <YouTubeVideo link="https://www.youtube.com/embed/6cJ4bSC_AGw?rel=0" />
                    </div>
                </div>
            </div>-->

            <div style="max-width: 1200px; margin: 0px auto 0px auto; border-top: 1px solid #dddd85; padding-top: 15px">
                <div class="flex_wrap" style="align-content: flex-start">
                    <div class="flex_3">
                        <p style="color: #742924; font-weight: bold">
                            <span>First time buying fine art?</span
                            ><nuxt-link
                                :to="{ name: 'how-to-buy-fine-art' }"
                                style="
                                    display: block;
                                    max-width: 300px;
                                    background: #222222;
                                    color: #f2f2f2;
                                    text-decoration: none;
                                    padding: 12px;
                                    margin: auto;
                                    margin-top: 12px;
                                "
                                >READ HOW-TOs</nuxt-link
                            >
                        </p>
                    </div>
                    <div class="flex_3">
                        <p style="color: #742924; font-weight: bold">
                            <span>Want to see a painting on <u>your</u> wall?</span
                            ><nuxt-link
                                :to="{ name: 'how-to-view-a-painting-on-your-wall' }"
                                style="
                                    display: block;
                                    max-width: 300px;
                                    background: #222222;
                                    color: #f2f2f2;
                                    text-decoration: none;
                                    padding: 12px;
                                    margin: auto;
                                    margin-top: 12px;
                                "
                                >LEARN HOW</nuxt-link
                            >
                        </p>
                    </div>
                    <div class="flex_3">
                        <p style="color: #742924; font-weight: bold">
                            <span>Want to learn about our gallery?</span
                            ><nuxt-link
                                :to="{ name: 'faq' }"
                                style="
                                    display: block;
                                    max-width: 300px;
                                    background: #222222;
                                    color: #f2f2f2;
                                    text-decoration: none;
                                    padding: 12px;
                                    margin: auto;
                                    margin-top: 12px;
                                "
                                >GALLERY FAQs</nuxt-link
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NotableSales from '~/components/NotableSales'
import YouTubeVideo from '~/components/YouTubeVideo'
import { loadGalleryPaintings } from '~/libs/paintings'
import { loadShortTestimonials } from '~/libs/testimonials'

const defaultConfig = {
    displayAmount: 4,
    autoplay: true,
    speed: 1500,
    interval: 3000,
    loop: true,
    height: 80,
    itemWidth: 120,
    pauseOnHover: true,
    timingFunction: 'ease',
    arrowVisible: 'default',
}
const kebabize = (str) => {
    return str
        .split('')
        .map((letter, idx) => {
            return letter.toUpperCase() === letter ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}` : letter
        })
        .join('')
}
export default {
    name: 'App',
    components: { NotableSales, YouTubeVideo },
    async asyncData({ $content }) {
        return {
            soldPaintings: await loadGalleryPaintings({
                $content,
                sold: true,
                columns: ['title', 'slug', 'gridImage', 'mediumResImage', 'artist'],
            }),
            scrollingHomepageImages: await loadGalleryPaintings({
                $content,
                scrollingHomepageImage: true,
                columns: ['title', 'slug', 'gridImage', 'mediumResImage'],
            }),
            testimonials: await loadShortTestimonials($content),
        }
    },
    head() {
        return {
            script: [
                {
                    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
                    async: true,
                    defer: true,
                },
            ],
        }
    },
    data() {
        return {
            readMore: false,
            itemAmount: 6,
            option: { ...defaultConfig },
            timingFuntionOptions: [
                {
                    value: 'ease',
                    label: 'ease',
                },
                {
                    value: 'ease-in',
                    label: 'ease-in',
                },
                {
                    value: 'ease-out',
                    label: 'ease-out',
                },
                {
                    value: 'ease-in-out',
                    label: 'ease-in-out',
                },
                {
                    value: 'linear',
                    label: 'linear',
                },
                {
                    value: 'steps(2, start)',
                    label: 'steps(2, start)',
                },
                {
                    value: 'cubic-bezier(0.06, 0.29, 0.19, 1.4)',
                    label: 'cubic-bezier(0.06, 0.29, 0.19, 1.4)',
                },
            ],
        }
    },
    computed: {
        diffConfig() {
            const keys = Object.keys(defaultConfig)
            const result = {}
            keys.forEach((key) => {
                if (this.option[key] !== defaultConfig[key]) {
                    result[key] = this.option[key]
                }
            })
            return result
        },
        componentCode() {
            const optionString = Object.entries(this.diffConfig)
                .map(([key, value]) => {
                    const stringKey = ['timingFunction', 'arrowVisible']
                    return `${stringKey.includes(key) ? '' : ':'}${kebabize(key)}="${value}"`
                })
                .join(' ')
            return `
<SplitCarousel ${optionString}>
  <SplitCarouselItem v-for="item in ${this.itemAmount}" :key="item">
    {{ item }}
  </SplitCarouselItem>
</SplitCarousel>
`
        },
    },
}
</script>

<style scoped>
.home_test span {
    color: #f2f2f2 !important;
}
.art_detail_img {
    max-width: 175px;
}

.grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
}
.grid_2 {
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr;
}
.flex_home_logo_tagline {
    display: flex;
    gap: 1em;
    align-items: center;
}
.flex_home_logo_tagline div {
    flex: 1;
}

@media screen and (min-width: 700px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
    .grid_2 {
        grid-template-columns: repeat(2, 1fr);
    }
}

.flex_3 img {
    margin: auto;
    display: block;
}

.desktop_show {
    display: none;
}
.desktop_hide {
    display: block;
}
@media screen and (min-width: 600px) {
    .desktop_show {
        display: flex;
    }
    .video-container {
        /* padding-bottom: 70%; */
    }
    .desktop_hide {
        display: none;
    }
}
.img_full {
    width: 100%;
    height: auto;
}
@media screen and (max-width: 600px) {
    .flex_wrap .flex_3 {
        margin-bottom: 1em;
    }
}
</style>