import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { search, playlist } from '../reducers'

const store = createStore(
  combineReducers({ search, playlist }),
  applyMiddleware(thunk)
)

export const { dispatch } = store

export default store
