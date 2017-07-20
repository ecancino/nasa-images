import { defaultTo, identity, prop } from 'ramda'

export const createAction = type => payload => ({ type, payload })

export const createReducer = (actions, INITIAL) =>
  (state = INITIAL, { type, payload }) =>
    defaultTo(identity, prop(type, actions))(state, payload)
