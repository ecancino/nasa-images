import { StyleSheet } from 'aphrodite'
import { merge } from 'ramda'

export const primaryColor = 'orangered'
export const secondaryColor = '#FFD9CC'
export const contrastColor = 'white'

export const cassetteColors = {
  cassetteColor: primaryColor,
  labelColor: secondaryColor,
  controlsColor: contrastColor
}

const primaryColorBorder = `1px solid ${primaryColor}`
const container = {
  width: '1024px',
  margin: '0 auto'
}

const flexContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row wrap'
}

const input = {
  padding: '3px 7px',
  background: '#fafafa',
  border: primaryColorBorder,
  height: '24px',
  fontSize: '21px',
  margin: '0 10px 0 0'
}

export const styles = StyleSheet.create({
  input,
  orangered: {
    color: primaryColor
  },
  search: container,
  searchTitle: {
    color: primaryColor,
    fontSize: '36px',
    margin: '10px 0'
  },
  results: merge(flexContainer, {
    padding: 0,
    margin: 0,
    listStyle: 'none'
  }),
  result: {
    width: '28%',
    overflow: 'hidden',
    background: contrastColor,
    color: primaryColor,
    border: primaryColorBorder,
    margin: '10px',
    padding: '15px',
    textAlign: 'center',
    borderRadius: '20px',
    cursor: 'pointer'
  },
  playlist: container,
  audios: merge(flexContainer, {
    listStyle: 'none',
    padding: '10px 0'
  }),
  btn: merge(input, {
    height: '32px'
  }),
  btnDelete: {
    position: 'absolute',
    top: '68px',
    right: '6px',
    height: '24px',
    width: '24px',
    float: 'right',
    marginRight: '10px',
    color: primaryColor,
    background: contrastColor,
    fontSize: '15px',
    border: primaryColorBorder,
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    lineHeight: 0,
    cursor: 'pointer',
    padding: '0 7px 0 6.5px',
    ':focus': {
      outline: 'none'
    }
  },
  audio: {
    width: '30%',
    position: 'relative'
  },
  audioTitle: {
    position: 'absolute',
    margin: '0',
    color: primaryColor,
    textAlign: 'center',
    padding: '3px 0',
    top: '25px',
    left: '17px'
  },
  hr: {
    border: primaryColorBorder
  },
  cassette: {
    margin: 0
  },
  messageContainer: container,
  message: {
    background: primaryColor,
    color: contrastColor,
    padding: '20px',
    textAlign: 'center',
    borderRadius: '20px'
  }
})
