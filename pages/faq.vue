<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>FAQs</h1>
                    <span class="hr"></span>
                </div>

                <div class="highlights_thumbnail">
                    <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="poole_grid2.jpg"
                        width="392"
                        height="260"
                        alt="19th Century Fine Art Legacy"

                    />
                </div>
                <div class="highlights_prev">
                    <h2>Where is your gallery located?</h2>
                    <p class="more2">
                        Bedford Fine Art Gallery is located at 230 South Juliana Street in historic Bedford, a small,
                        but vibrant town in south-central Pennsylvania. Bedford is conveniently located midway between
                        Harrisburg and Pittsburgh, off Exit 146 of the Pennsylvania Turnpike.
                        <span v-if="readMore"></span> <span v-else></span
                        ><span v-show="readMore"
                            >Easy to find, it is housed within the Bedford Mansion, in Bedford’s historic district. It
                            is listed on the Register of Historic Places, the perfect venue for you to view important
                            19th century art.</span
                        ><button class="btn btn-success" @click="readMore = !readMore">
                            <span v-if="readMore">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                      <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="wall_grid.jpg"
                        width="392"
                        height="260"
                        alt="The Perfect 19th Century Paintings for Your Home"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>How long have you been in business?</h2>
                    <p class="more2">
                        We have been passionate collectors of fine art for over 30 years, developing relationships with
                        art galleries, museums, auctioneer houses, conservators and knowledgeable collectors. We decided
                        to open our gallery about 10 years ago. <span v-if="readMore2"></span> <span v-else></span
                        ><span v-show="readMore2"
                            >We offer only the finest 19th century carefully selected artworks by well-listed
                            artists.</span
                        ><button class="btn btn-success" @click="readMore2 = !readMore2">
                            <span v-if="readMore2">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="palmer_grid2.jpg"
                        width="392"
                        height="260"
                        alt="Geology and Landscape Art in 19th Century America"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>What is your experience in fine art?</h2>
                    <p class="more2">
                        We have been passionate collectors of fine 19th century art for over 25 years, developing
                        relationships with art galleries, museums, auctioneer houses, conservators and knowledgeable
                        collectors. As collectors ourselves, we do our due diligence in researching each artist and
                        examples of their work. <span v-if="readMore3"></span> <span v-else></span
                        ><span v-show="readMore3">
                            Some of our paintings have been requested for museum art exhibitions and some have appeared
                            in magazines and books. We are on the board of Southern Alleghenies Museum of Art and guide
                            the selection of new art acquisitions.</span
                        ><button class="btn btn-success" @click="readMore3 = !readMore3">
                            <span v-if="readMore3">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="kaelin_grid.jpg"
                        width="392"
                        height="260"
                        alt="Featured Artist - Harry Herman Roseland"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>I am not familiar with fine art, how can you help me?</h2>
                    <p class="more2">
                        Since you intuitively know what you like (although you may not realize it), we start there. You
                        will likely be drawn to a specific type of painting (e.g., landscape, marine, still-life, genre,
                        American historic/political, sporting art, or animal theme). You do not need to visit in person
                        (but it is recommended). We have a user-friendly website that allows you to view each of our
                        paintings, complete with a biography of the artist. <span v-if="readMore4"></span>
                        <span v-else></span
                        ><span v-show="readMore4">
                            With our zoom and super-zoom feature, you can “put your nose right on the painting”. We also
                            have articles on our website that provide you with an introduction to art, plus we welcome
                            your phone calls and emails to answer questions about 19th century art and our artists. Our
                            diverse inventory boasts some of the best examples of 19th century artists. Our paintings
                            are carefully selected so that we are able offer you the highest level of quality. We
                            believe we are safeguarding you, our customers, purchase by providing the best quality works
                            available. If you decide to visit us in person, we can offer you “concierge-style
                            service”—taking time to introduce to us, our gallery and our paintings, a “grand tour” so to
                            speak.</span
                        ><button class="btn btn-success" @click="readMore4 = !readMore4">
                            <span v-if="readMore4">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="jones_grid.jpg"
                        width="392"
                        height="260"
                        alt="Geology and Landscape Art in 19th Century America"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>Where do you find your paintings?</h2>
                    <p class="more2">
                        We are not looking for just any 19th century paintings but the best quality works available. We
                        are on a continual quest to find quintessential works representative of 19th century artists. We
                        spend two to three hours every single evening in our search to find the best quality paintings.
                        Paintings don’t just come to us--although sometimes they do! <span v-if="readMore5"></span>
                        <span v-else></span
                        ><span v-show="readMore5">
                            People have found our website and contact us regarding artwork they would like to sell. If
                            we are interested and it meets our standards, we may purchase it. Auction houses are another
                            source; however, we are very selective in which ones we deal with and we perform up front
                            “due-diligence” to ensure that the painting offered is not misrepresented. Sometimes an
                            institution goes through deaccession, which also provides opportunities to purchase fine
                            art. We extensively research every painting and only the absolute best paintings meet our
                            standards.</span
                        ><button class="btn btn-success" @click="readMore5 = !readMore5">
                            <span v-if="readMore5">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="hays12_grid.jpg"
                        width="392"
                        height="260"
                        alt="Location. Location. Location."
                    />
                </div>
                <div class="highlights_prev">
                    <h2>Does your gallery have paintings only by local artists?</h2>
                    <p class="more2">
                        No. Nor do we have paintings by contemporary artists or artists who painted after the 1920s. We
                        do offer a selection of paintings by 19th century Scalp Level School artists, a group of
                        Pittsburgh artists who painted at Scalp Level, Paint Creek and Shade Creek about 30 miles from
                        our gallery. <span v-if="readMore6"></span> <span v-else></span
                        ><span v-show="readMore6">
                            We also have paintings by artists who painted at many of the popular 19th century art
                            colonies in the United States, France and Great Britain. Other selections include fine
                            examples of British and French academic art.</span
                        ><button class="btn btn-success" @click="readMore6 = !readMore6">
                            <span v-if="readMore6">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="moser_grid.jpg"
                        width="392"
                        height="260"
                        alt="Bedford Fine Art Gallery"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>Do you sell prints?</h2>
                    <p class="more2">
                        No. Bedford Fine Art Gallery sells only original 19th to early 20th century paintings, unlike
                        most present day galleries that offer mostly modern art and decorative prints.
                        <span v-if="readMore7"></span> <span v-else></span
                        ><span v-show="readMore7"
                            >It is our belief that nothing captures the essence better than the original, whose hand the
                            artist has personally touched. The talent of our artists is intuitively obvious to even the
                            most casual observer. </span
                        ><button class="btn btn-success" @click="readMore7 = !readMore7">
                            <span v-if="readMore7">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="thieme_grid.jpg"
                        width="392"
                        height="260"
                        alt="Bedford Fine Art Gallery"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>Do you sell only oil paintings?</h2>
                    <p>
                        No. We also have a selection of fine original pastel, gouache, pen and ink, and water color
                        paintings.
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="marr_grid.jpg"
                        width="392"
                        height="260"
                        alt="Bedford Fine Art Gallery"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>What is the age of a painting?</h2>
                    <p class="more2">
                        With few exceptions, the paintings offered by Bedford Fine Art Gallery were painted between
                        circa 1860s through the 1920s. Unless the artist added the date when he or she painted it, it is
                        difficult to state unequivocally when a particular piece was painted by an artist.
                        <span v-if="readMore8"></span> <span v-else></span
                        ><span v-show="readMore8"
                            >There are some clues that we use to bracket the timeframe a bit. Most artists begin their
                            career with one style or genre and as they mature and widen their spheres of artistic
                            influence, settle into a particular subject for which they become well-known. </span
                        ><button class="btn btn-success" @click="readMore8 = !readMore8">
                            <span v-if="readMore8">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="crane_grid.jpg"
                        width="392"
                        height="260"
                        alt="Bedford Fine Art Gallery"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>Who is the artist that painted it?</h2>
                    <p class="more2">
                        The paintings we sell are signed so that the artist who painted them is not in doubt. Most of
                        our artwork is American, but we also have works by British and French academic artists, as well.
                        Another important item related to “who” is--why is this artist important? Was he or she a
                        founder of an art school, the leader of an art movement, did he accompany the important
                        government and railroad surveys of the 1800s, or did they fight in the Civil War—which side? We
                        have paintings by many artists who not only led interesting lives, but were also influential
                        figures in the world of 19th century art. <span v-if="readMore9"></span> <span v-else></span
                        ><span v-show="readMore9"
                            >The “who” also tells you something about the “what”—the subject that is usually associated
                            with that artist. If the painting you are looking at is a still-life, but the signature is
                            of an artist that is better known for landscapes, then it is likely that you are looking at
                            either an earlier or later work by this artist. Often the artist can be identified merely by
                            looking at the subject and composition, which by itself can be a “signature”.</span
                        ><button class="btn btn-success" @click="readMore9 = !readMore9">
                            <span v-if="readMore9">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="mulhaupt_grid.jpg"
                        width="392"
                        height="260"
                        alt="Bedford Fine Art Gallery"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>Does each painting have a known history?</h2>
                    <p class="more2">
                        The known history or “provenance” of a painting is often unknown regarding the identity of the
                        original owner or subsequent owners, prior to its arrival at our gallery. We do, however, have
                        some paintings that we purchased from descendants of the original owner, who had bought them
                        directly from the artist. <span v-if="readMore10"></span> <span v-else></span
                        ><span v-show="readMore10"
                            >The artists carried by Bedford Fine Art Gallery exhibited their paintings and sometimes an
                            exhibition catalog is discovered that mentions the painting and the year it was exhibited.
                            Other paintings have as their only documentation historic auction house records. Our
                            research sometimes provides clues regarding where and at what point in their career it was
                            painted, and possibly former owners. Buying a painting from Bedford Fine Art Gallery ensures
                            that you are getting an original painting from a well-recognized artist. </span
                        ><button class="btn btn-success" @click="readMore10 = !readMore10">
                            <span v-if="readMore10">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="linford_grid.jpg"
                        width="392"
                        height="260"
                        alt="Bedford Fine Art Gallery"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>Do I need to visit your gallery to purchase a painting?</h2>
                    <p class="more2">
                        No. Bedford Fine Art Gallery has sold paintings all over the United States, for example, without
                        the buyers stepping foot in our gallery. We have a user-friendly website that allows you to look
                        at each of our paintings, with zoom and super-zoom, so that you can “put your nose right on the
                        painting” for close examination. <span v-if="readMore11"></span> <span v-else></span
                        ><span v-show="readMore11"
                            >In addition, we have an app on our website that allows you place one of our paintings
                            directly on your wall, to scale, so that you can see how it would look in YOUR personal
                            space. We welcome your phone calls and emails to answer questions about 19th century art and
                            our artists. If you do decide to visit us, the added bonus is that we will give you the
                            “grand gallery tour”, so that you can view paintings and ask questions in person. </span
                        ><button class="btn btn-success" @click="readMore11 = !readMore11">
                            <span v-if="readMore11">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="black_grid.jpg"
                        width="392"
                        height="260"
                        alt="How to Conserve, Restore, and Maintain 19th Century Paintings"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>How do I purchase fine art from you?</h2>
                    <p class="more2">
                        We accept checks (via mail or in person) and major credit cards (in person or over the phone).
                        We also offer a lay-away-plan. We ask that you put down a portion of the painting’s purchase
                        price to hold it and then make regular payments. <span v-if="readMore12"></span>
                        <span v-else></span
                        ><span v-show="readMore12"
                            >You will not be able to take receipt of the painting until the final payment has been made. </span
                        ><button class="btn btn-success" @click="readMore12 = !readMore12">
                            <span v-if="readMore12">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="gruppe_grid.jpg"
                        width="392"
                        height="260"
                        alt="FEATURED ARTIST – ALBERT FRANCIS KING"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>Can a painting be shipped to me?</h2>
                    <p class="more2">
                        Bedford Fine Art Gallery does not provide in-house packaging and shipping; however, we know our
                        customers can rely on a local Bedford specialized packaging and shipping associate. Our
                        customers are serviced exclusively by the owner. Her packaging and shipping services are
                        outstanding. Packaging is customized according to the specific fine art painting, with
                        specialized wrapping, boxing and cushioning materials being used.
                        <span v-if="readMore13"></span> <span v-else></span
                        ><span v-show="readMore13"
                            >If requested, MasterPak® shipping boxes for framed artwork can be utilized. These provide
                            three layers of foam protection that snugly encases the artwork, all within a strong
                            corrugated container that offers plywood strength without the weight, cost, and shipping
                            expense. The cost of shipping is the responsibility of the buyer. </span
                        ><button class="btn btn-success" @click="readMore13 = !readMore13">
                            <span v-if="readMore13">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="hgs_grid.jpg"
                        width="392"
                        height="260"
                        alt="FEATURED ARTIST – JOHN HENTRY DOLPH"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>How is the value of a painting determined?</h2>
                    <p class="more2">
                        "Nowadays people know the price of everything and the value of nothing." – Oscar Wilde<br /><br />

                        Today the term "fine art" encompasses many types of art movements, including modernism. When
                        viewing modern abstract art, you typically just see colors and shapes. These so-called works of
                        art are built more upon the contemporary artist’s brand and less upon their talent as an artist.
                        We have all seen the articles where these so-called pieces of modern art have sold for millions
                        of dollars. <span v-if="readMore14"></span> <span v-else></span
                        ><span v-show="readMore14"
                            >Unlike modern art, when a quality 19th century fine art painting is hanging on your wall,
                            you do not need to try to explain what it is you are seeing. People intuitively know that
                            the work of a very talented 19th century artist captured true beauty and the painting is not
                            some modern fad hung for shock value or another emotional response, not aligned with
                            beauty.<br /><br />
                            An original piece of fine art tends to be considered more of a luxury item purchase using
                            discretionary funds. Fine art is typically not your average commodity, such as a new
                            automobile, big screen TV, or basic necessities such as food and shelter. Fine art is
                            subjective and the value of fine art is also, therefore, totally subjective. People who love
                            19th century fine art know that this style of art brings true beauty to the décor within
                            their home. Fine art, however, is not for everyone and some folks view a purchase of fine
                            art as unnecessary or frivolous.<br /><br />
                            An article published at the end of 2017 states that the fine art market has grown 113% in 10
                            years. For every article such as this, however, there are an equal number of articles that
                            discuss the cyclical nature of the fine art market. Like most luxury items, fine art tends
                            to sell well in good economic times and poorly in times of an economic downturn. It is
                            unfortunate, but there are folks who view fine art strictly as an investment vehicle. In our
                            opinion, these people would be better off to speculate on the stock market or flip a house
                            for a short-term return on their investment. In summary, buying fine art is primarily an
                            aesthetic investment and not purely a financial investment.<br /><br />
                            The price of an item is typically considered when purchasing a needed commodity. For
                            example, when comparison shopping on the internet, you can view thousands of mass produced
                            items that are identical, except for their price. Fine art is unlike standard commodities,
                            where one brand can typically be substituted for another. Rare one-of-a-kind original 19th
                            century paintings are by definition irreplaceable and they are, therefore, valued
                            accordingly. People don’t purchase fine art because they have to buy it for a day-to-day
                            necessity; they buy fine art because they want to buy it. Customers buy a particular 19th
                            century painting from Bedford Fine Art Gallery because they love it. A connection is made
                            and our customers bond with the artist and the painting. Our customers love many aspects of
                            the particular unique original 19th century painting they select, such as: the composition,
                            the artist’s palette of color, its quality, its style, the craftsmanship, the artist’s
                            history/talent, etc. Every painting has a story and they love to share this with friends and
                            family.<br /><br />
                            Unfortunately, in today’s fine art market, a certified appraisal of a piece of fine art may
                            not be worth the paper it is written on. This is not because certified appraisers are not
                            professional or ethical, but it is instead due to the high volatility in what paintings are
                            sold for at auction houses (where the appraisers typically review data to determine the fair
                            market value of a particular piece of fine art). As an example, a specific painting had an
                            estimated price of $2,000 to $3,000 at a May 6, 2017 auction. The painting failed to sell at
                            that auction. The same painting was then estimated at $1,000 to $1,500 for a November 11,
                            2017 sale at the same auction house. This time, six months later, the same painting at the
                            same auction house was sold for $5,940. Another painting by this same artist was estimated
                            at $10,000 to $15,000 at a different auction house for a April 18, 2018 sale. The painting
                            exceeded the expert’s estimate, of between $10,000 to $15,000, and sold for $37,500.<br /><br />
                            The bottom-line is that, in a somewhat unpredictable fine art market, we are honored our
                            customers trust the value we place on each of our paintings, knowing that we are honest,
                            fair and reasonable. Bedford Fine Art Gallery is unlike any other gallery or auction house.
                            Whether it is a visit to our website, their first phone call to us, or a visit to our
                            gallery, customers immediately sense our passion for 19th century fine art. Unlike other
                            galleries and auction houses, selling fine art is not our primary or only job. We are both
                            full-time geologists and our gallery is a direct off-shoot of our love of fine art for the
                            past 30 years. We do not have the overhead that almost all galleries and auction houses
                            have, because we own our building (which is our 1889 Victorian home in historic Bedford,
                            PA!), we own almost all of the fine art we sell (i.e. we only have a few pieces on
                            consignment), and we do not have any employees. This coupled with the fact that we sell only
                            the highest quality paintings from well listed artists, ensures that our customers get the
                            best value. Finally, it is important to mention that, although we have no control over the
                            overall fine art market, we give all our customers a trade-in promise that guarantees the
                            value of the original fine art they purchase from Bedford Fine Art Gallery will never
                            decrease in value. </span
                        ><button class="btn btn-success" @click="readMore14 = !readMore14">
                            <span v-if="readMore14">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
                    </p>
                    <!--<p class="more">Because we sell only original 19th century artwork, it is one of a kind—there will be no other like it.  It is therefore rare.  That is one aspect of “value”.  The cost for us to acquire the painting is only a portion of the value we are asking for it.  Paintings do not simply come to us; we have to do extensive searches to find paintings that meet our high standards.  Further, our paintings are over 100 years old and usually will require some work to meet our quality standards.  If we believe a painting to be too damaged to be able to provide it at a good value to you, we pass.  We at Bedford Fine Art Gallery are “minimalists” with respect to what it takes to make a painting ready to hang on the walls of your home, unlike a painting you may acquire through an auction house or some galleries.  A painting may need cleaned or re-varnished to bring it back to the way the artist originally intended it to look.  Original frames seem to suffer the most damage, often to the extent that it is more economical to replace them rather than to restore them.  We use only qualified conservationists to fully assess a painting and its frame to determine what level of conservation work is needed to make it “wall-ready” for you…and at the best value.  Lastly, unlike many other galleries—we do not have high overhead costs and this has a positive impact--we pass this savings onto you.
</p>-->
                </div>

                <span
                    style="
                        height: 1px;
                        width: 100%;
                        display: block;
                        clear: both;
                        background: #c3c4a2;
                        margin-bottom: 1em;
                        margin-top: 1.5em;
                    "
                ></span>

                <div class="highlights_thumbnail">
                     <nuxt-picture
                        :img-attrs="{class:'art_detail_img'}"
                        loading="lazy"
                        src="stanlaws_grid.jpg"
                        width="392"
                        height="260"
                        alt="FEATURED ARTIST – JOHN HENTRY DOLPH"
                    />
                </div>
                <div class="highlights_prev">
                    <h2>What guarantees do you give me on a painting I purchase?</h2>
                    <p class="more2">
                        When you purchase a painting from us, you get our guarantee that it is an authentic 19th century
                        painting by the artist whose signature appears on the canvas. We also offer a trade-in guarantee
                        on the painting you purchase. <span v-if="readMore15"></span> <span v-else></span
                        ><span v-show="readMore15"
                            >If, after having enjoyed the painting for a time, you decide you would like something else
                            instead, simply return the painting to us. If the painting has not been damaged while in
                            your care, we will apply its original purchase price toward the purchase price of another
                            painting of higher value. </span
                        ><button class="btn btn-success" @click="readMore15 = !readMore15">
                            <span v-if="readMore15">Read Less</span>
                            <span v-else>Read More</span>
                        </button>
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
    data() {
        return {
            readMore: false,
            readMore2: false,
            readMore3: false,
            readMore4: false,
            readMore5: false,
            readMore6: false,
            readMore7: false,
            readMore8: false,
            readMore9: false,
            readMore10: false,
            readMore11: false,
            readMore12: false,
            readMore13: false,
            readMore14: false,
            readMore15: false,
            readMore16: false,
        }
    },
}
</script>

<router>
  {
    path: '/faq.html'
  }
</router>
