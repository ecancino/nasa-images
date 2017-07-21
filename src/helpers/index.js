
import { createElement } from 'react'
import { tap } from 'ramda'

/* eslint-disable no-console */
export const log = tap(console.log)

export const h = createElement
export { createAction, createReducer } from './reducers'
export { apiCall, fetchJSON, formatResults  } from './api'
