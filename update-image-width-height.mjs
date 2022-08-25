import sizeOf from 'image-size'
import fs from 'fs'

function maybeUpdateImageDimensions(painting, imageType) {
	const dimensions = sizeOf(`static/${painting[imageType].replace('/', '')}`)
	painting[`${imageType}Width`] = dimensions.width
	painting[`${imageType}Height`] = dimensions.height
}

const paintingsDir = fs.opendirSync('cms/paintings')
let dirent
while ((dirent = paintingsDir.readSync()) !== null) {
  console.log(`Processing: ${dirent.name}`)
  const path = `cms/paintings/${dirent.name}`

  const painting = JSON.parse(fs.readFileSync(path))

  if (painting.gridImage) {
	maybeUpdateImageDimensions(painting, 'gridImage')
  }
  if (painting.mediumResImage) {
	maybeUpdateImageDimensions(painting, 'mediumResImage')
  }
  if (painting.highResImage) {
	maybeUpdateImageDimensions(painting, 'highResImage')
  }

  console.log(`Writing: ${dirent.name}`)
  fs.writeFileSync(path, JSON.stringify(painting, null, 2))
}

paintingsDir.closeSync()