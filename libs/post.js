import removeMd from 'remove-markdown'

export const getPostPreview = (body) => {
    const bodyWithoutMarkdown = removeMd(body)
    const nonMidWordSubstringIndex = bodyWithoutMarkdown.indexOf(' ', 300)
    if (nonMidWordSubstringIndex === -1) {
        return bodyWithoutMarkdown
    }

    return bodyWithoutMarkdown.substring(0, nonMidWordSubstringIndex) + '...'
}
