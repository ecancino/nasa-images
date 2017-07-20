import { compose, assoc } from 'ramda'
import { showResults, removeResult, addAudio, removeAudio } from '../actions'
import { apiCall, formatResults, fetchJSON } from '../helpers'
import { dispatch } from '../store'
import { audios } from '../db'

const onAdd = compose(dispatch, addAudio)
const onReload = () => dispatch(loadAudios())
const onRemoveAudio = compose(dispatch, removeAudio)
const onRemoveResult = compose(dispatch, removeResult)

export const loadAudios = () => dispatch =>
  audios.toArray()
    .then(onAdd)

export const saveAudio = audio => dispatch =>
  audios.add(audio)
    .then(onReload)
    .catch(() => alert('Already added. Removing...'))
    .finally(() => onRemoveResult(audio.nasa_id))

export const deleteAudio = id => dispatch =>
  audios.delete(id)
    .then(onReload)
    .then(() => onRemoveAudio(id))

export const imageSearch = q => dispatch =>
  apiCall('search', { q, media_type: 'audio' })
    .then(formatResults)
    .then(results => dispatch(showResults(results)))

export const fetchAudio = audio => dispatch =>
  fetchJSON(audio.href)
    .then(([wav, m4a_128]) => assoc('m4a', m4a_128, audio))
    .then(m4a => dispatch(saveAudio(m4a)))
    .catch(err => alert(`Audio fetch faild for ${audio.title}`))
