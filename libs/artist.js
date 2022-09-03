export const artistNameWithTinyDescription = (artist) => {
    let nameWithTinyDescription = artist.name
    if (artist.tinyDescription) {
        nameWithTinyDescription += ` (${artist.tinyDescription})`
    }

    return nameWithTinyDescription
}
