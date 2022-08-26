import { v4 as uuidv4 } from 'uuid'
import { getCookie, setCookie, setCookieIfNotEmpty } from '~/libs/cookie'
import { googleConvert } from '~/libs/google-conversion'
import NextLeadService from '~/services/NextLeadService'

export default function setRefererOnAppLoad({ app }, inject) {
    const { referrer: referer } = document
    if (referer && new URL(referer).hostname.toLowerCase() !== window.location.hostname.toLowerCase()) {
        setCookieIfNotEmpty('referer', referer, 3650)
    }

    setCookieIfNotEmpty('landingUrl', window.location.href, 3650)

    // technically, if any one of these is not empty, we should set all of them
    // to get consistent data that goes together...but
    // what if we have some previous value that was never submitted and
    // it's valuable information?
    const url = new URL(window.location.href)
    const utmSource = url.searchParams.get('utm_source')
    const utmMedium = url.searchParams.get('utm_medium')
    const utmCampaign = url.searchParams.get('utm_Campaign') || url.searchParams.get('utm_campaign')
    const utmTerm = url.searchParams.get('utm_term')
    const utmContent = url.searchParams.get('utm_content')
    const utmAdGroup = url.searchParams.get('utm_AdGroup')
    const adPosition = url.searchParams.get('adposition')
    const matchType = url.searchParams.get('matchtype')
    const queryString = window.location.search
    setCookieIfNotEmpty('utmSource', utmSource, 3650)
    setCookieIfNotEmpty('utmMedium', utmMedium, 3650)
    setCookieIfNotEmpty('utmCampaign', utmCampaign, 3650)
    setCookieIfNotEmpty('utmTerm', utmTerm, 3650)
    setCookieIfNotEmpty('utmContent', utmContent, 3650)
    setCookieIfNotEmpty('utmAdGroup', utmAdGroup, 3650)
    setCookieIfNotEmpty('adPosition', adPosition, 3650)
    setCookieIfNotEmpty('matchType', matchType, 3650)
    setCookieIfNotEmpty('queryString', queryString, 3650)

    const userId = getCookie('userId') || uuidv4()
    setCookie('userId', userId, 3650)

    const sessionId = uuidv4()
    inject('sessionId', sessionId)

    window.onNuxtReady(async () => {
        await NextLeadService.logActivity({
            type: 'SITE_LOAD',
            referer,
            utmSource,
            utmMedium,
            utmCampaign,
            utmTerm,
            utmContent,
            utmAdGroup,
            adPosition,
            matchType,
            queryString,
            landingUrl: window.location.href,
            sessionId,
        })

        const pageView = async () =>
            await NextLeadService.logActivity({
                type: 'PAGE_VIEW',
                sessionId,
            })
        let interval = setInterval(pageView, 10000)

        app.router.afterEach(async (to, from) => {
            if (to.name !== from.name) {
                clearInterval(interval)

                try {
                    await pageView()
                } catch (e) {}

                interval = setInterval(pageView, 10000)
            }
        })

        let phoneGoogleConversionMade = false
        document.addEventListener(
            'click',
            async function (event) {
                if (!event.target.matches('a')) {
                    return
                }

                if (['#start', '#hero_form'].includes(event.target.hash)) {
                    await NextLeadService.logActivity({
                        type: 'CLICK_CTA',
                        text: event.target.textContent,
                        target: event.target.hash,
                        sessionId,
                    })
                } else if (event.target.href.startsWith('tel:')) {
                    let type
                    if (event.target.matches('div.mobile_phone a')) {
                        type = 'CLICK_PHONE_MOBILE'
                    } else if (event.target.matches('nav a')) {
                        type = 'CLICK_PHONE_NAV'
                    } else if (event.target.matches('footer a')) {
                        type = 'CLICK_PHONE_FOOTER'
                    } else {
                        type = 'CLICK_PHONE'
                    }

                    await Promise.all([
                        NextLeadService.submitForm({
                            uuid: uuidv4(),
                            formName: 'Phone Call',
                            formValues: [
                                { name: 'dialed_phone', value: event.target.href },
                                { name: 'dialed_phone_text', value: event.target.textContent },
                                { name: 'dialed_phone_type', value: type },
                            ],
                            formPage: window.location.href,
                            sessionId,
                        }),
                        NextLeadService.logActivity({
                            type,
                            text: event.target.textContent,
                            target: event.target.href,
                            sessionId,
                        }),
                    ])

                    if (!phoneGoogleConversionMade) {
                        phoneGoogleConversionMade = true
                        googleConvert(app.$gtag)
                    }
                } else {
                    await NextLeadService.logActivity({
                        type: 'CLICK_LINK',
                        text: event.target.textContent,
                        target: event.target.href,
                        sessionId,
                    })
                }
            },
            false,
        )
    })
}
