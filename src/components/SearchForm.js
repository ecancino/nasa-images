import { connect } from 'react-redux'
import { compose, prop, when, propEq } from 'ramda'
import { css } from 'aphrodite'
import { injectIntl } from 'react-intl'

import { styles } from '../styles'
import { h, createI18n } from '../helpers'
import { showResults } from '../actions'
import { audioSearch } from '../thunks'

const SearchButton = createI18n('search')
const ClearButton = createI18n('clear')

const SearchForm = ({ results, searchTerm, clearResults, intl }) => {
  let textInput = null
  return h('section', {}, [
    h('input', {
      className: css(styles.input),
      type: 'text',
      key: 'term',
      ref: (input) => { textInput = input },
      onKeyPress: when(propEq('key', 'Enter'), () => {
        searchTerm(textInput)
        textInput.value = null
      }),
      placeholder: intl.formatMessage({ id: 'searchPlaceholder' })
    }),
    h('button', { className: css(styles.btn), key: 'search-button', onClick: () => searchTerm(textInput) }, SearchButton),
    results ?
      h('button', { className: css(styles.btn), key: 'clear-button', onClick: () => clearResults([]) }, ClearButton) :
      null
  ])
}

const stateProps = ({ search }) => ({ results: search.length })
const dispatchProps = dispatch => ({
  searchTerm: compose(dispatch, audioSearch, prop('value')),
  clearResults: compose(dispatch, showResults)
})

const enhance = compose(injectIntl, connect(stateProps, dispatchProps))

export default enhance(SearchForm)
