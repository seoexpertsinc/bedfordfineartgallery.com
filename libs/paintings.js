export const loadPaintings = async ({ $content, paintingSlugs, columns = ['slug', 'gridImage'] }) => {
    const paintingSlugsAndGridImages = await $content('paintings').only(columns).where({ slug: { $in: paintingSlugs } }).fetch()
	return paintingSlugsAndGridImages.reduce((map, slugAndGridImage) => {
		map[slugAndGridImage.slug] = slugAndGridImage
		return map
	}, {})
}