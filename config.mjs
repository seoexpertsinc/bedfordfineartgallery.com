const domain = 'www.bedfordfineartgallery.com'

const dev = {
    nextLeadUrl: 'https://dev.public-api.nextlead.com',
    nextLeadOrigin: `https://${domain}`,
}

const prod = {
    nextLeadUrl: 'https://public-api.nextlead.com',
    nextLeadOrigin: null,
}

// Default to dev if not set
const config = process.env.NODE_ENV === 'production' ? prod : dev

export default {
    ...config,
    domain,
}
