const _defaultTitle = '19th Century Paintings - Bedford Fine Art Gallery - 19th Century Art for Sale'
const _defaultDescription = 'Historic gallery of 19th century paintings for sale, featuring the 19th century art of European, British and American 19th century artists. Many 1800s paintings including 19th century oil paintings by some of the most renowned 19th century painters.'

export const getMetaTitleAndDescription = ({ content, defaultTitle, defaultDescription }) => {
    if (!content) {
        content = {}
    }

    return {
        title: content.metaTitle || defaultTitle || _defaultTitle,
        description: content.metaDescription || defaultDescription || _defaultDescription,
    }
}
