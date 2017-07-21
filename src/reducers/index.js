import { compose, filter, propEq, not } from 'ramda'
import { createReducer } from '../helpers'
import { SHOW_RESULTS, REMOVE_RESULT, ADD_AUDIO, REMOVE_AUDIO } from '../actions'

const filterById = (list, id) => filter(compose(not, propEq('nasa_id', id)), list)
const setPayload = (_, payload) => payload

export const search = createReducer({
  [SHOW_RESULTS]: setPayload,
  [REMOVE_RESULT]: filterById
}, [])

export const playlist = createReducer({
  [ADD_AUDIO]: setPayload,
  [REMOVE_AUDIO]: filterById
}, [])
