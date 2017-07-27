import { prop, path, ifElse, defaultTo, compose } from 'ramda'

const fromLanguages = path(['languages', '0'])
const fromLanguage = prop('language')
const getLocale = ifElse(fromLanguages, fromLanguages, fromLanguage)
const toEnUS = defaultTo('en-US')
const getLanguage = compose(toEnUS, getLocale)

export const browserLocale = () => getLanguage(navigator)
