<template>
    <li>
        <div :class="{ sold: isSold }">
            <span v-if="isSold" class="soldTag">sold</span>

            <nuxt-link :to="painting.slug.replace('-html', '.html')">
                <nuxt-picture
                    loading="lazy"
                    :src="galleryImage"
                    :alt="artistNameWithTinyDescription"
                    width="392"
                    height="261"
                />
                <p class="artist_gallery_title">
                    <span v-if="isNew" class="gallery_new_label label">NEW</span>
                    {{ artistNameWithTinyDescription }}
                </p>
                <p class="artist_gallery_artwork">{{ painting.title }}</p>
            </nuxt-link>
        </div>
    </li>
</template>

<script>
import { artistNameWithTinyDescription } from '~/libs/artist'

export default {
	props: {
		painting: {
			type: Object,
			required: true
		}
	},
	computed: {
		artistNameWithTinyDescription() {
            return artistNameWithTinyDescription(this.painting.artist)
        },
		isNew() {
			return this.painting.status === 'New'
		},
        isSold() {
			return this.painting.status === 'Sold'
		},
        galleryImage() {
            return this.painting.galleryCropImage || this.painting.gridImage || this.painting.mediumResImage || ''
        }
	}
}
</script>

<style scoped>
.gallery_new_label {
    padding: 5px;
    display: inline-block;
    margin-right: 5px;
    border-radius: 2px;
    background: #b90d0f;
    color: #ffffff;
    font-size: 12px;
    line-height: 12px;
    text-decoration: none;
    font-weight: normal;
}
</style>