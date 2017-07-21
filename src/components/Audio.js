import { css } from 'aphrodite'

import { styles } from '../styles'
import { h } from '../helpers'

const Audio = ({ nasa_id, title, m4a, removeAudio }) =>
  h('li', { className: css(styles.audio), key: `audio-${nasa_id}` }, [
    h('audio', { className: css(styles.audioPlayer), key: m4a, src: m4a, controls: 'controls' }),
    h('button', { className: css(styles.btnDelete), key: 'btn', onClick: removeAudio, dangerouslySetInnerHTML: { __html: '&times;' } }),
    h('br', { key: 'br' }),
    h('h4', { className: css(styles.audioTitle, styles.orangered), key: 'spn' }, title)
  ])

export default Audio
