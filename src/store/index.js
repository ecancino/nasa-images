import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { search, playlist } from '../reducers'

export const { subscribe, dispatch, getState } = createStore(
  combineReducers({ search, playlist }),
  applyMiddleware(thunk)
)
