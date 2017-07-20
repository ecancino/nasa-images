import fetch from 'node-fetch'
import { converge, merge, prop, pick, compose, evolve, head, map, path } from 'ramda'
import { toQuery } from 'dbranes'

const API_URL = 'https://images-api.nasa.gov/' // X-RateLimit-Remaining
const apikey = '6d84hrzSRiTDgRvi19uPZoVD4fuH06Vl370ZBWzR'
export const fetchJSON = URL => fetch(URL).then(r => r.json())

export const apiCall = (path, params = {}) => fetchJSON(`${API_URL}${path}${toQuery(params)}`)

const mergeProps = converge(merge, [prop('data'), pick(['href'])])
const perItem = compose(mergeProps, evolve({ data: head }), pick(['data', 'href']))
const mapItems = map(perItem)
const getItems = path(['collection', 'items'])

export const formatResults = compose(mapItems, getItems)
