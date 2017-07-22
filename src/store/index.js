import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { search, playlist, message } from '../reducers'

const store = createStore(
  combineReducers({ search, playlist, message }),
  applyMiddleware(thunk)
)

export const { dispatch } = store

export default store
