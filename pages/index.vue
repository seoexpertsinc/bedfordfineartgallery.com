<template>
    <div>
        <div class="container primary">
            <section class="wrapper">
                <div class="flex_wrap">
                    <div class="flex_4 flex_sub">
                        <div class="flex_3 flex_3_no_100">
                            <nuxt-img
                                class="home_logo"
                                src="/logo.png"
                                width="123"
                                height="124"
                                alt="19th Century Paintings"
                            />
                        </div>
                        <div class="flex_7 flex_center flex_7_no_100">
                            <h2 class="home_tagline">
                                Fine art you will cherish forever. <span>Trust your instincts.</span
                                ><span>Trust yourself. </span>
                            </h2>
                        </div>
                        <div style="display: block; width: 100%; padding-top: 10px">
                            <div class="breadcrumb" style="margin-top: 10px">
                                <nuxt-link to="/artists-bios/"
                                    style="display: block; width: 100%"
                                    class="content_btn home_btn_small"
                                    ><span class="btn_text_break">click now to find a painting</span>
                                    <span class="btn_text_break">that "speaks to you"</span></nuxt-link
                                >
                            </div>
                            <div class="breadcrumb" style="margin-top: 10px">
                                <nuxt-link to="/art-lovers-niche/"
                                    style="display: block; width: 100%"
                                    class="content_btn home_btn_small"
                                    ><span class="btn_text_break">Join us at </span> Art Lovers' Niche.
                                    <span class="btn_text_break">Don't miss out!</span></nuxt-link>
                            </div>
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
                    <div class="flex_6">
                        <div style="max-width: 550px; margin: auto">
                            <div class="video-container">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/9-yObV8vpLc?rel=0"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
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
                    <TestimonialsScroll />
                </div>
                <nuxt-link to="/testimonials/"
                    class="rd_more rd_more_blue"
                    style="
                        text-decoration: none;
                        background: #742924;
                        max-width: 200px;
                        text-align: center;
                        margin-bottom: 0px;
                    "
                    >See More Reviews</nuxt-link>
            </section>
        </div>

        <div class="container primary" style="padding-top: 0px">
            <section class="wrapper">
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

                <div style="border-bottom: 1px solid #dddd85; padding-bottom: 20px; margin-bottom: 20px">
                    <ul class="productGrid2" style="max-width: 1260px; margin: 0px auto 0px auto; padding-top: 10px">
                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>
                    </ul>

                     <ul v-if="showMessage" class="productGrid2" style="max-width: 1260px; margin: 0px auto 0px auto; padding-top: 10px">
                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div class="sold">
                                <span class="soldTag">sold</span
                                ><a href="octavius_white_niagra.html"
                                    ><nuxt-img
                                        src="IMG_4142_grid.jpg"
                                        alt="Octavius White (19th Century Canadian School)
"
                                    />
                                    <p class="artist_gallery_title">Octavius White (19th Century Canadian School)</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                     <button v-on:click="showMessage = !showMessage" class="rd_more rd_more_blue" style="text-decoration:none; background: #742924; max-width:200px; text-align:center; margin-bottom:0px;">See More Notable Sales</button>
                </div>
                <CustomerSlidingImages />
                <div class="breadcrumb">
                    <nuxt-link to="/artists-bios/">click to view over 250 unique paintings for sale now</nuxt-link>
                </div>
            </section>
        </div>

        <div class="container secondary" style="padding-bottom: 24px">
            <section class="wrapper clearfix" style="max-width: 860px; margin: auto">
                <h2 id="testimonialsAnchor" class="reverse_header" style="margin-top: 0px">
                    For over 30 years we have had the great pleasure to work with leaders who share our passion for fine
                    art - here are some of the kind words they had to say:
                </h2>

                <nuxt-img
                    style="width: 100%; height: auto; max-width: 150px; margin: auto; display: block; padding: 20px 0px"
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

                <nuxt-img
                    style="width: 100%; height: auto; max-width: 150px; margin: auto; display: block; padding: 20px 0px"
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

                <nuxt-img
                    style="width: 100%; height: auto; max-width: 150px; margin: auto; display: block; padding: 20px 0px"
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

                <nuxt-img
                    style="width: 100%; height: auto; max-width: 150px; margin: auto; display: block; padding: 20px 0px"
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

        <div class="container primary" style="padding-bottom: 24px">
            <section class="wrapper clearfix as_seen_in_container">
                <nuxt-img
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

        <div class="container secondary_dk" style="padding-bottom: 24px">
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
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/cFAempT0P1Y?rel=0"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
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
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/iQuzsnwvbM8?rel=0"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div class="breadcrumb">
                  <nuxt-link to="/artists-bios/" class="content_btn">show me a painting i will love</nuxt-link>
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
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/UlgTd5n_CEE?rel=0"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
                <p style="color: #742924; font-weight: bold; text-align: center; margin-top: 20px">
                    <span>Want to read our story?</span
                    ><nuxt-link to="/gallery-value/"
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

                        >ABOUT THE GALLERY</nuxt-link>
                </p>
            </section>
        </div>

        <div class="container secondary_dk" style="padding-bottom: 24px">
            <section class="wrapper clearfix scondary_dk_divider">
                <div class="flex_wrap">
                    <div class="flex_3">
                        <div class="video-container">
                            <iframe
                                width="660"
                                height="415"
                                src="https://www.youtube.com/embed/5I8BEyiGICs?rel=0"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    <div class="flex_3">
                        <div class="video-container">
                            <iframe
                                width="660"
                                height="415"
                                src="https://www.youtube.com/embed/3asJzvyy-ZQ?rel=0"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    <div class="flex_3">
                        <div class="video-container">
                            <iframe
                                width="660"
                                height="415"
                                src="https://www.youtube.com/embed/o6PhOHhaA5M?rel=0"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div class="breadcrumb">
                    <nuxt-link to="/artists/" class="content_btn">view over 250 well listed artists</nuxt-link>
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
                        <a href="Artists--Bios.html"
                            ><nuxt-img
                                class="art_detail"
                                src="gallery_logo.jpg"
                                width="798"
                                height="515"
                                alt="19th Centruy Art from Bedford Fine Art Gallery
"
                        /></a>
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



  <button class="rd_more" @click="readMore =! readMore">
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
                    <li><nuxt-link to="landscape_artwork.html">Landscape</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link to="marine_artwork.html">Marine</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link to="still_life_artwork.html">Still Life</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link to="genre_artwork.html">Genre</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link to="historical_and_political_artwork.html">American Historical / Political</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link to="sporting_art.html">Sporting Art</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link to="animal_artwork.html">Animal Theme</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link to="sculpture.html">Sculptures</nuxt-link></li>
                    <li class="divider">/</li>
                    <li><nuxt-link to="Artists--Bios.html">All 19th Century Paintings</nuxt-link></li>
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
                        <nuxt-link to="/artists-bios/" class="internalLinkReverse">Gallery page</nuxt-link>. Our current inventory
                        boasts a wide diversity of subject matter from
                        <nuxt-link to="/landscape-artwork/" class="internalLinkReverse">landscape</nuxt-link>,<nuxt-link
                            class="internalLinkReverse"
                            to="/marine-artwork/"
                        >
                            marine</nuxt-link>, <nuxt-link class="internalLinkReverse" to="/still-life-artwork/">still life</nuxt-link>,
                        <nuxt-link class="internalLinkReverse" to="/genre-artwork/">genre</nuxt-link>,

                        <a class="internalLinkReverse" href="historical_and_political_artwork.html"
                            >American historical/political</a
                        >, <a class="internalLinkReverse" href="sporting_art.html">sporting art</a>, and
                        <a class="internalLinkReverse" href="animal_artwork.html">animal</a> themes. Our gallery
                        features both American and European 19th century painters such as
                        <a class="internalLinkReverse" href="john_henry_dolph_duo.html">John Henry Dolph</a>,
                        <a class="internalLinkReverse" href="george_hetzel.html">George Hetzel</a>,
                        <a href="william_bromley_III.html" class="internalLinkReverse">William Bromley III</a>, and
                        <nuxt-link class="internalLinkReverse" to="barton_stone_hays_apple.html">Barton Stone Hays</nuxt-link>, to
                        name a few. To see more of our 19th century artists, please visit our
                        <a class="internalLinkReverse" href="Artists.html">Artists page</a>. Good art is timeless and
                        only you know what &quot;wows&quot; you. You know it when you see it and we hope you make that
                        connection with a stunning painting from Bedford Fine Art Gallery. Thank you.
                    </p>
                </div>
                <div class="clear">
                    <ArtworkSlidingImagesSmall />
                </div>
                <div class="breadcrumb"><nuxt-link to="Artists--Bios.html">click to view over 250 unique paintings</nuxt-link></div>
            </section>
        </div>

        <div style="text-align: center; background-color: #efefde; padding: 24px 12px">
            <div class="flex_2" style="max-width: 1060px; margin: auto">
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
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/6cJ4bSC_AGw?rel=0"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <div style="max-width: 1200px; margin: 0px auto 0px auto; border-top: 1px solid #dddd85; padding-top: 15px">
                <div class="flex_wrap" style="align-content: flex-start">
                    <div class="flex_3">
                        <p style="color: #742924; font-weight: bold">
                            <span>First time buying fine art?</span
                            ><nuxt-link to="/how-to-buy-fine-art/"
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
                                >READ HOW-TOs</nuxt-link>
                        </p>
                    </div>
                    <div class="flex_3">
                        <p style="color: #742924; font-weight: bold">
                            <span>Want to see a painting on <u>your</u> wall?</span
                            ><nuxt-link to="/how-to-view-a-painting-on-your-wall/"
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
                                >LEARN HOW</nuxt-link>
                        </p>
                    </div>
                    <div class="flex_3">
                        <p style="color: #742924; font-weight: bold">
                            <span>Want to learn about our gallery?</span
                            ><nuxt-link to="/faq/"
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
                                >GALLERY FAQs</nuxt-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>






    </div>
</template>

<script>
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
    data() {



        return {
            showMessage: false,
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
ul.productGrid2 li {
    display: inline-block;
    text-align: center;
    margin: 0;
    transition: all 0.8s ease;
    font-size: 16px;
    width: 10%;
    vertical-align: top;
}

.artist_gallery_title {
  display: none;
}

.soldTag {
    position: absolute;
    background-color: #f2f2f2;
    color: #AB1719;
    padding: 4px;
    font-size: 10px;
    text-transform: uppercase;
}
.home_test span {
    color: #f2f2f2 !important;
}
</style>
