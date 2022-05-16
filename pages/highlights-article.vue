<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>Highlights</h1>
                    <h2>19th Century Fine Art Legacy</h2>
                    <span class="hr"></span>
                </div>
                <div class="highlights_thumbnail">
                    <nuxt-img
                        class="art_detail"
                        src="highlights1.jpg"
                        width="847"
                        height="1387"
                        alt="19th Century Fine Art Legacy
"
                        style="width: 100%; height: auto; border: 1px solid #222222"
                    />
                </div>
                <div class="highlights_prev">
                    <p>
                        The land upon which the Barclay house is built was part of a larger land grant given to Colonel
                        Hugh Barclay by William Penn. Hugh Barclay, who served during the Revolutionary War, was
                        Bedford’s first Post Master and patriarch of the Barclay family. The Barclay family rose to
                        prominence in Bedford in the century following the war. Their prominence was likely due, in
                        part, to their strongly-held belief in providing service to their community. John Jacob Barclay,
                        grandson of Hugh Barclay, had practiced law in Perry County, Pennsylvania for many years before
                        he retired to Bedford and built the house that now houses the artworks comprising the Bedford
                        Fine Art Gallery. Barclay raised five children in this house—daughters, Jessie and Hetty and
                        sons, William, Hugh, and Joseph.
                    </p>

                    <p>
                        Jessie, the eldest child, after attending Wheaton Academy, returned to Bedford to become
                        “Mistress of the Household”, and looked after her father and her two younger brothers, Joe and
                        Will. Jessie Barclay was a veritable dynamo. At only 4 feet nine inches tall, she was always
                        available to help anyone in need. She was instrumental with founding the first Children’s Aid in
                        the Commonwealth of Pennsylvania. In addition, she variously served as a founder, officer or
                        committee chairman for the Bedford Piano Club, the Civic Club, the Bedford Emergency Aid Canteen
                        of the American Red Cross, Bedford County Chautauqua Association, Bedford County Tuberculosis
                        and Health Society, and the Bedford County Library.
                    </p>

                    <p>
                        Miss Jessie was the last Barclay to occupy the house. After her death in 1965, the house passed
                        out of Barclay hands. For a time it served as the Bedford County Public Library and later the
                        location for County offices. The house eventually returned to private ownership and was
                        purchased by Jerry and Joan Hawk (owners of Bedford Fine Art Gallery). Unbeknownst to them at
                        the time, was that in addition to the many organizations that Jessie Barclay founded or
                        co-founded, she also founded the Bedford Art Club. A cultural institution in Bedford for many
                        years the club would routinely display 19th and early 20th century fine art, mostly from
                        Pittsburgh and Philadelphia, PA regional artists. In 1926, the club sponsored an exhibition of
                        10 important Philadelphia women artists. Known as the “Philadelphia Ten” and composed entirely
                        of women artists, it was their goal to promote the work of female artists in what was then a
                        male-dominated field. “The Ten” studied art during the rise of Impressionism and many of their
                        works were executed in this style and en plein air (out of doors). These artists were popular,
                        well-known and very successful in their lifetimes. It was quite a coup for the Bedford Art Club
                        to secure an exhibition of these important artists.
                    </p>
                    <p>Members of "The Ten" exhibiting in Bedford in 1926:</p>

                    <table class="table" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td>Theresa Ferber Bernstein (1890 – 2002)</td>
                                <td>Nancy Maybin Ferguson (1872 – 1967)</td>
                            </tr>
                            <tr>
                                <td>Cora Brooks (1885 – 1930)</td>
                                <td>Edith Lucille Howard (1885 – 1960)</td>
                            </tr>
                            <tr>
                                <td>Isabel Parke Branson Cartwright (1885 – 1966)</td>
                                <td>Helen Kiner McCarthy (1884 – 1927)</td>
                            </tr>
                            <tr>
                                <td>Constance Cochrane (1888 – 1962)</td>
                                <td>Mary Elizabeth Price (1877 – 1965)</td>
                            </tr>
                            <tr>
                                <td>Fern Isabel Kuns Coppedge (1883 – 1951)</td>
                                <td>Mary Russell Ferrell Colton (1889 – 1971)</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        Although the Barclay House has gone through several transformations since it passed from Barclay
                        hands, its architectural integrity and charm remains, as does the legacy of art espoused by
                        Jessie Barclay and now the Bedford Fine Art Gallery.
                    </p>

                    <p><nuxt-link :to="{ name: 'highlights' }" class="readmore">Back to Highlights</nuxt-link></p>
                </div>
            </section>
        </div>
                <div class="container footer_test" style="padding-top: 24px; width: 100%; margin:0px auto; background-color: rgba(16,88,185,1.00);">
<section class="wrapper" style="max-width: 860px; margin:auto;">

<TestimonialsScroll />

</section>
</div>
    </div>
</template>
