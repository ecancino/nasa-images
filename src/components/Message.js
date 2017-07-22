import { connect } from 'react-redux'
import { css } from 'aphrodite'

import { h } from '../helpers'
import { styles } from '../styles'

const Message = ({ message }) => message ?
  h('section', { className: css(styles.messageContainer) },
    h('p', { className: css(styles.message) }, message)
  ) : null

const stateProps = ({ message }) => ({ message })

export default connect(stateProps)(Message)
