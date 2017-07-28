import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { compose } from 'ramda'

import { p } from '../helpers'
import store from '../store'

import { locale, messages } from '../messages'

const Providers = compose(
  p(IntlProvider, { locale, messages }),
  p(Provider, { store })
)

export default Providers
