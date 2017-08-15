import { render } from 'react-dom'

import Providers from './providers'
import App from './components/App'

import { h } from './helpers'

render(
  Providers(h(App)),
  document.querySelector('#main')
)
