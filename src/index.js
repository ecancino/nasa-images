import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import { h } from './helpers'
import { loadAudios } from './thunks'

import App from './components/App'

render(
  h(Provider, { store }, h(App)),
  document.querySelector('#main')
)

store.dispatch(loadAudios())
