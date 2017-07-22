import { createAction } from '../helpers'

export const [
  SHOW_RESULTS,
  REMOVE_RESULT,
  ADD_AUDIO,
  REMOVE_AUDIO,
  SET_MESSAGE
] = [
  'SHOW_RESULTS',
  'REMOVE_RESULT',
  'ADD_AUDIO',
  'REMOVE_AUDIO',
  'SET_MESSAGE'
]

export const showResults = createAction(SHOW_RESULTS)
export const removeResult = createAction(REMOVE_RESULT)

export const addAudio = createAction(ADD_AUDIO)
export const removeAudio = createAction(REMOVE_AUDIO)

export const setMessage = createAction(SET_MESSAGE)
