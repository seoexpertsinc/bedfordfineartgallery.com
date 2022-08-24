<template>
    <div class="artist_wrap">
        <div class="artist_col_img">
            <nuxt-link :to="artistLink"
                ><nuxt-img
					loading="lazy"
                    :src="gridImage"
                    :alt="nameWithTinyDescription"
					width="392"
                    height="261"
            /></nuxt-link>
        </div>
        <div class="artist_col_links">
            <div class="artist_container">
                <p>{{ nameWithTinyDescription }}</p>
                <ul>
                    <li class="artistheader">Painting:</li>
                    <li v-for="(painting, index) in artist.paintings" :key="index">
						<nuxt-link :to="`/${painting.replace('-html', '.html')}`">{{ index + 1 }}</nuxt-link>
					</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	props: {
		artist: {
			type: Object,
			required: true,
		},
		paintingToGridImage: {
			type: Object,
			required: true,
		},
	},
	computed: {
		artistLink() {
			return this.artist.hasLandingPage ? this.artist.slug.replace('-html', '.html') : this.artist.paintings.length > 0 ? this.artist.paintings[0].replace('-html', '.html') : ''
		},
		nameWithTinyDescription() {
			let nameWithTinyDescription = this.artist.name
			if (this.artist.tinyDescription) {
				nameWithTinyDescription += ` (${this.artist.tinyDescription})`
			}

			return nameWithTinyDescription
		},
        gridImage() {
			return this.paintingToGridImage[this.artist.paintings[0]].gridImage
		}
	},
}
</script>