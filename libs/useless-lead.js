import { whitespaceEmpty } from '~/libs/empty'

export const isUselessLead = ({ name, email, phone }) => {
    if ([name, email, phone].every((value) => whitespaceEmpty(value))) {
        return true
    }

    return false
}
