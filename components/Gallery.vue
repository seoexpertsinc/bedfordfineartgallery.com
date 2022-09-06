<template>
    <div>
        <div class="container secondary">
            <section class="wrapper clearfix">
                <div class="pagination_sub">
                    <ul>
                        <li v-for="link in headerLinks" :key="link.name">
                            <nuxt-link :to="{ name: link.routeName }" :class="{ active: category === link.name }">{{
                                link.name
                            }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="flex">
                    <div>
                <input v-model="filter" type="text" class="form-control search-box" placeholder="Filter by Artist Name" autocomplete="off" />
                    </div>
                    <div class="txt_right">

Please click photos for a COMPLETE image and description. </div></div>
                <ul id="myUL" class="productGrid2" style="padding-top: 15px">
                    <div
                        v-if="filteredFeaturePaintings.length"
                        style="border: 4px solid #712621; padding: 10px 5px; margin-bottom: 20px"
                    >
                        <h2
                            id="featured"
                            style="font-size: 24px; color: #fff; margin-bottom: 5px; padding-bottom: 20px"
                        >
                            FEATURED
                        </h2>
                        <GalleryTile v-for="painting in filteredFeaturePaintings" :key="painting.slug" :painting="painting" />
                    </div>

                    <GalleryTile v-for="painting in filteredPaintings" :key="painting.slug" :painting="painting" />
                </ul>

                <div
                    v-if="category === 'Recently Sold'"
                    style="
                        max-width: 860px;
                        margin: auto;
                        color: #edebdb;
                        border-top: 1px solid #444;
                        padding-top: 15px;
                    "
                >
                    <p style="font-size: 16px; padding-bottom: 10px; text-align: center">
                        In addition to the above listed artists, we are also interested in acquiring works by the
                        following artists:
                    </p>
                    <div style="display: flex; justify-content: space-between; max-width: 660px; margin: auto">
                        <ul
                            class="p_list"
                            style="
                                list-style-type: disc;
                                text-align: left;
                                margin-left: 16px;
                                padding: 0px;
                                background: none;
                            "
                        >
                            <li>James Bonar</li>
                            <li>Emil Bott</li>
                            <li>Aaron Gorson</li>
                            <li>William Harnett</li>
                            <li>Annie Henderson</li>
                            <li>Rachael Henderson</li>
                            <li>Hermann Ottomar Herzog</li>
                            <li>Carrie Holmes</li>
                            <li>Annie Kerfoot</li>
                            <li>Jasper Lawman</li>
                            <li>William Sanford Mason</li>
                        </ul>
                        <ul
                            class="p_list"
                            style="
                                list-style-type: disc;
                                text-align: left;
                                margin-left: 16px;
                                padding: 0px;
                                background: none;
                            "
                        >
                            <li>Malcolm Parcell</li>
                            <li>Mary Jane Peale</li>
                            <li>John Peto</li>
                            <li>William Trost Richards</li>
                            <li>Severin Roesen</li>
                            <li>Joshua Shaw</li>
                            <li>Russel Smith</li>
                            <li>Alfred Wall</li>
                            <li>Bessie Wall</li>
                            <li>Christian Walter</li>
                            <li>Agnes Way</li>
                        </ul>
                    </div>
                </div>

                <h2
                    style="
                        clear: both;
                        font-size: 22px;
                        color: #edebdb;
                        border-bottom: 1px solid #444444;
                        margin-bottom: 12px;
                        margin-top: 24px;
                    "
                >
                    About the Gallery
                </h2>
                <YouTubeVideo link="https://www.youtube.com/embed/5I8BEyiGICs" preview-image-size="maxresdefault" />
            </section>
        </div>
    </div>
</template>

<script>
import YouTubeVideo from '~/components/YouTubeVideo'
import { whitespaceEmpty } from '~/libs/empty'

function filterPaintings (paintings, filter) {
    if (whitespaceEmpty(filter)) {
        return paintings
    }

    return paintings.filter(painting => painting.artist.name.toLowerCase().includes(filter.toLowerCase()))
}

export default {
    components: { YouTubeVideo },
    props: {
        paintings: {
            type: Array,
            required: true,
        },
        featuredPaintings: {
            type: Array,
            required: false,
            default: () => [],
        },
        category: {
            type: String,
            required: true,
            validator(value) {
                return [
                    'All',
                    'Landscape',
                    'Marine',
                    'Still Life',
                    'Genre',
                    'American Historic / Political',
                    'Sporting Art',
                    'Animal',
                    'Sculpture',
                ].includes(value)
            },
        },
    },
    data() {
        return {
            filter: '',
            headerLinks: [
                { routeName: 'artists-bios', name: 'All' },
                { routeName: 'landscape-artwork', name: 'Landscape' },
                { routeName: 'marine-artwork', name: 'Marine' },
                { routeName: 'still-life-artwork', name: 'Still Life' },
                { routeName: 'genre-artwork', name: 'Genre' },
                { routeName: 'historical-and-political-artwork', name: 'American Historic / Political' },
                { routeName: 'sporting-art', name: 'Sporting Art' },
                { routeName: 'animal-artwork', name: 'Animal' },
                { routeName: 'sculpture', name: 'Sculpture' },
                { routeName: 'notable-sales', name: 'Recently Sold' },
            ],
        }
    },
    computed: {
        filteredFeaturePaintings() {
            return filterPaintings(this.featuredPaintings, this.filter)
        },
        filteredPaintings() {
            return filterPaintings(this.paintings, this.filter)
        },
    },
}
</script>

<style scoped>
.secondary {
    background-image: none;
    background-repeat: repeat;
    background: #222;
}
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    color: #fff;
    padding-top: 1em;
}
.flex > * {
    flex: 1;
}
.txt_right {
    text-align: right;
}
@media only screen and (max-width:800px) {
.flex {
    flex-direction: column
}
.flex > * {
    width: 100%;
}
.txt_right {
    text-align: center;
}
}
</style>
