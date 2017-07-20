import { render } from 'react-dom'
import { h } from './helpers'
import { dispatch, subscribe, getState } from './store'
import { loadAudios } from './thunks'

import App from './components/App'

const renderApp = () => render(
  h(App, getState()),
  document.querySelector('#main')
)

subscribe(renderApp);

renderApp()
dispatch(loadAudios())
