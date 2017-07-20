import { StyleSheet, css } from 'aphrodite';
import { merge } from 'ramda'

const primaryColor = 'orangered'
const contrastColor = 'white'
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
  orangered: primaryColor,
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
    background: primaryColor,
    color: contrastColor,
    margin: '10px',
    padding: '15px'
  },
  playlist: container,
  audios: merge(flexContainer, {
    listStyle: 'none',
    padding: '10px 0'
  }),
  audio: {
    width: '30%',
    padding: '10px 0'
  },
  btn: merge(input, {
    height: '32px'
  }),
  btnDelete: {
    height: '34px',
    width: '34px',
    float: 'right',
    marginRight: '10px',
    color: primaryColor,
    background: contrastColor,
    fontSize: '22px',
    border: primaryColorBorder
  },
  audioPlayer: {
    width: '80%',
    border: primaryColorBorder
  },
  audioTitle: {
    display: 'block',
    clear: 'both',
    margin: '10px 0',
    padding: '3px 0'
  }
});
