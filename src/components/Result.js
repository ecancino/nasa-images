import { css } from 'aphrodite'
import { format } from 'date-fns'

import { styles } from '../styles'
import { h } from '../helpers'

const Result = ({ nasa_id, title, date_created, media_type, getAudio }) =>
  h('li', { className: css(styles.result), key: `result-${nasa_id}`, onClick: getAudio }, [
    h('strong', { key: `span-${title}` }, `${title} - ${media_type}`),
    h('br', { key: 'br' }),
    h('span', { key: `span-${date_created}` }, `${format(date_created, 'MMMM Do, YYYY')}`)
  ])

export default Result
