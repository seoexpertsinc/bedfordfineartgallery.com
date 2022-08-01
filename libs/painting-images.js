export const loadPaintingToGridImage = async ({ $content, paintingSlugs }) => {
    const paintingSlugsAndGridImages = await $content('paintings').only(['slug', 'gridImage']).where({ slug: { $in: paintingSlugs } }).fetch()
	return paintingSlugsAndGridImages.reduce((map, slugAndGridImage) => {
		map[slugAndGridImage.slug] = slugAndGridImage.gridImage
		return map
	}, {})
}