import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import store from './store'
import { h } from './helpers'
import { loadAudios } from './thunks'
import { locale, messages } from './messages'

import App from './components/App'

render(
  h(IntlProvider, { locale, messages },
    h(Provider, { store },
      h(App)
    )
  ),
  document.querySelector('#main')
)

store.dispatch(loadAudios())
