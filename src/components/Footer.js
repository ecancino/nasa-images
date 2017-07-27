import { css } from 'aphrodite'
import { format } from 'date-fns'

import { styles } from '../styles'
import { h, createI18n } from '../helpers'

const Copyright = createI18n('copyright', {
  author: h('strong', {}, 'Eduardo Cancino'),
  year: format(new Date(), 'YYYY')
})

const Footer = () =>
  h('section', { className: css(styles.footer) },
    h('p', { key: 'copyright' }, Copyright)
  )

export default Footer
