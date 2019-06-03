import {
} from './index';
import {
  HttpClient
} from "../api/httpClient"
import urlMapper from "../api/urlMapper"
import {GET_DOCUMENT_LIST} from '../actions/index'

export const submitForm = (value) => (dispatch) => {
  debugger
  return new Promise((resolve, reject) => {
    value.image='';
    return HttpClient.post(urlMapper.submitForm, value)
      .then(res => {
        debugger
        resolve(res)
      })
      .catch(err => {
        debugger
        reject(err)
      })
  })
}

export const docs = (key,value) => {
  return {
    type: GET_DOCUMENT_LIST,
    key,
    value
  }
}

export const getDocument = () => (dispatch) => {
  debugger
  return new Promise((resolve, reject) => {
    return HttpClient.get(urlMapper.getDocument)
      .then(res => {
        debugger
        let doc = res.data.map(d => {
          d.event_file = `${urlMapper.BASE_URL}${d.event_file}`;
          return d;
        })
        dispatch(docs('document',doc))
        resolve(res)
      })
      .catch(err => {
        debugger
        reject(err)
      })
  })
}

