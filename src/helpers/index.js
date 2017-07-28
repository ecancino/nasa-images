import { createElement } from 'react'
import { tap, prop, sortBy, curry } from 'ramda'
import { FormattedMessage } from 'react-intl'

/* eslint-disable no-console */
export const log = tap(console.log)

export const h = createElement
export const p = curry((element, props, children) => h(element, props, children))

export { createAction, createReducer } from './reducers'
export { apiCall, fetchJSON, formatResults  } from './api'
export { browserLocale } from './locale'

export const sortByTitle = sortBy(prop('title'))

export const createI18n = (id, values) => h(FormattedMessage, { id, values })
