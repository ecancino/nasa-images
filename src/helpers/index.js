import { createElement } from 'react'
import { tap, prop, sortBy } from 'ramda'

/* eslint-disable no-console */
export const log = tap(console.log)

export const h = createElement
export { createAction, createReducer } from './reducers'
export { apiCall, fetchJSON, formatResults  } from './api'

export const sortByTitle = sortBy(prop('title'))
