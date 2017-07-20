import { map, compose, prop } from 'ramda'
import { css } from 'aphrodite'
import { format } from 'date-fns'

import { styles } from '../styles'
import { h } from '../helpers'
import { dispatch } from '../store'
import { fetchAudio } from '../thunks'

const getAudio = compose(dispatch, fetchAudio)

const Result = ({ nasa_id, title, href, date_created }) =>
  h('li', {
    className: css(styles.result),
    key: `result-${nasa_id}`,
    onClick: () => getAudio({ nasa_id, title, href, date_created })
  }, [
    h('span', { key: `span-${title}` }, `${title}`),
    h('br', { key: 'br' }),
    h('span', { key: `span-${date_created}` }, `${format(date_created, 'MM/DD/YYYY')}`)
  ])

export default Result
