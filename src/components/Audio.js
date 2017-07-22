import Cassette from 'react-cassette-player'
import { merge } from 'ramda'
import { css } from 'aphrodite'

import { styles, cassetteColors } from '../styles'
import { h } from '../helpers'

const Audio = ({ nasa_id, title, asset, removeAudio }) =>
  h('li', { className: css(styles.audio), key: `audio-${nasa_id}` }, [
    h(Cassette, merge({ key: asset, src: asset }, cassetteColors)),
    h('button', { className: css(styles.btnDelete), key: 'btn', onClick: removeAudio }, 'X'),
    h('h4', { className: css(styles.audioTitle, styles.orangered), key: 'spn' }, title)
  ])

export default Audio
