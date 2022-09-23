export const loadPaintings = async ({ $content, paintingSlugs, columns = ['slug', 'gridImage'] }) => {
    const paintingSlugsAndGridImages = await $content('paintings').only(columns).where({ slug: { $in: paintingSlugs } }).fetch()
	return paintingSlugsAndGridImages.reduce((map, slugAndGridImage) => {
		map[slugAndGridImage.slug] = slugAndGridImage
		return map
	}, {})
}

async function loadArtists ({ $content, artistSlugs }) {
    const artists = await $content('artists').only(['name', 'tinyDescription', 'slug']).where({ slug: { $in: artistSlugs } }).fetch()
	return artists.reduce((map, artist) => {
		map[artist.slug] = artist
		return map
	}, {})
}

export const loadGalleryPaintings = async ({ $content, category, sold = false, scrollingHomepageImage = false, columns = ['title', 'slug', 'galleryCropImage', 'gridImage', 'mediumResImage', 'artist', 'status'], additionalColumns = [] }) => {
	let query = $content('paintings').only([...columns, ...additionalColumns])

	if (sold) {
		query = query.where({ status: { $eq: 'Sold' } })
	} else {
		query = query.where({ status: { $ne: 'Sold' } })
	}

	if (scrollingHomepageImage) {
		query = query.where({ scrollingHomepageImage: true })
	}

	if (category) {
		query = query.where({ categories: { $contains: category } })
	}
	const paintings = await query.fetch()
	const artistSlugs = paintings.map((painting) => painting.artist)
	const artistSlugToArtist = await loadArtists({ $content, artistSlugs })

	paintings.forEach((painting) => { painting.artist = artistSlugToArtist[painting.artist] || { name: '' } })
	paintings.sort((a, b) => {
		return a.artist.name.split(' ').pop().toLowerCase().localeCompare(b.artist.name.split(' ').pop().toLowerCase())
	})

	return paintings
}