import { format } from 'date-fns'

export const formatDateNoTime = function (utcString) {
    return utcString ? format(new Date(utcString), 'PP') : null
}
