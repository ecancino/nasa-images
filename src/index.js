import { render } from 'react-dom'

import Providers from './providers'
import App from './components/App'

import { dispatch } from './store'
import { h } from './helpers'
import { loadAudios } from './thunks'

render(
  Providers(h(App)),
  document.querySelector('#main')
)

dispatch(loadAudios())
