<template>
    <div style="border-bottom: 1px solid #dddd85; padding-bottom: 20px; margin-bottom: 20px">
        <ul class="productGrid2" style="max-width: 1260px; margin: 0px auto 0px auto; padding-top: 10px">
            <li v-for="painting in visibleSoldPaintings" :key="painting.slug">
                <div class="sold">
                    <span class="soldTag">sold</span
                    ><nuxt-link :to="painting.slug.replace('-html', '.html')"
                        ><nuxt-picture
                            loading="lazy"
                            :src="painting.gridImage || painting.mediumResImage || ''"
                            :img-attrs="{alt: nameWithTinyDescription(painting.artist)}"
                        />
                        <p class="artist_gallery_title">{{ nameWithTinyDescription(painting.artist) }}</p>
                    </nuxt-link>
                </div>
            </li>
        </ul>
        <button
            class="rd_more rd_more_blue"
            style="text-decoration: none; background: #742924; max-width: 200px; text-align: center; margin-bottom: 0px"
            @click="showAllNotableSales = !showAllNotableSales"
        >
            {{ buttonText }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        soldPaintings: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            showAllNotableSales: false,
        }
    },
    computed: {
        buttonText() {
            return this.showAllNotableSales ? 'Close' : 'See More Notable Sales'
        },
        visibleSoldPaintings() {
            return this.showAllNotableSales ? this.soldPaintings : this.soldPaintings.slice(0, 30)
        },
    },
    methods: {
        nameWithTinyDescription(artist) {
            let nameWithTinyDescription = artist.name
            if (artist.tinyDescription) {
                nameWithTinyDescription += ` (${artist.tinyDescription})`
            }

            return nameWithTinyDescription
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
    color: #ab1719;
    padding: 4px;
    font-size: 10px;
    text-transform: uppercase;
}
.home_test span {
    color: #f2f2f2 !important;
}
</style>
