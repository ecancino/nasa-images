import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { search, playlist, message } from '../reducers'

import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({ search, playlist, message }),
  composeWithDevTools(applyMiddleware(thunk))
)

export const { dispatch } = store

export default store
