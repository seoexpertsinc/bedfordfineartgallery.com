import axios from 'axios'
import config from '~/config'
import { getCookie } from '~/libs/cookie'

const { nextLeadUrl } = config

const getConfig = ({ formPage, origin }) => {
    const href = formPage || window.location.href
    return { formPage: origin ? href.replace(window.location.origin, origin) : href }
}

export default {
    logActivity(context) {
        if (!context.sessionId) {
            throw new Error('sessionId required')
        }

        return axios.post(`${nextLeadUrl}/activity`, {
            ...getConfig({ origin: config.nextLeadOrigin }),
            ...context,
            userId: getCookie('userId'),
        })
    },
    updateForm({ uuid, formName, formValues, formPage, sessionId }) {
        if (!sessionId) {
            throw new Error('sessionId required')
        }

        return axios.post(`${nextLeadUrl}/update`, {
            ...getConfig({ formPage, origin: config.nextLeadOrigin }),
            uuid,
            formName,
            formValues,
            landingUrl: getCookie('landingUrl'),
            referer: getCookie('referer'),
            utmSource: getCookie('utmSource'),
            utmMedium: getCookie('utmMedium'),
            utmCampaign: getCookie('utmCampaign'),
            utmTerm: getCookie('utmTerm'),
            utmContent: getCookie('utmContent'),
            utmAdGroup: getCookie('utmAdGroup'),
            adPosition: getCookie('adPosition'),
            matchType: getCookie('matchType'),
            queryString: getCookie('queryString'),
            userId: getCookie('userId'),
            sessionId,
        })
    },
    submitForm({ uuid, formName, formValues, recaptchaToken, formPage, sessionId }) {
        if (!sessionId) {
            throw new Error('sessionId required')
        }

        return axios.post(`${nextLeadUrl}/submit`, {
            ...getConfig({ formPage, origin: config.nextLeadOrigin }),
            uuid,
            formName,
            formValues,
            recaptchaToken,
            landingUrl: getCookie('landingUrl'),
            referer: getCookie('referer'),
            utmSource: getCookie('utmSource'),
            utmMedium: getCookie('utmMedium'),
            utmCampaign: getCookie('utmCampaign'),
            utmTerm: getCookie('utmTerm'),
            utmContent: getCookie('utmContent'),
            utmAdGroup: getCookie('utmAdGroup'),
            adPosition: getCookie('adPosition'),
            matchType: getCookie('matchType'),
            queryString: getCookie('queryString'),
            userId: getCookie('userId'),
            sessionId,
        })
    },
}
