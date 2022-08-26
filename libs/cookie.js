export const setCookieIfNotEmpty = (cookieName, cookieValue, expirationDays) => {
    if (cookieValue === null || cookieValue === undefined || cookieValue === '') {
        return
    }

    setCookie(cookieName, cookieValue, expirationDays)
}

export const setCookie = (cookieName, cookieValue, expirationDays) => {
    const d = new Date()
    d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + d.toUTCString()
    document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/'
}

export const getCookie = (cookieName) => {
    const name = cookieName + '='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return null
}
