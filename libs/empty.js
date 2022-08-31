export const whitespaceEmpty = (string) =>
    string === null || string === undefined || string === '' || !string.replace(/\s/g, '').length
