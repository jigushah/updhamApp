import _ from 'lodash';
import {GET_DOCUMENT_LIST} from '../actions/index';

const initialState = {
  documents:[]

};

export function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOCUMENT_LIST:
        return{...state,[action.key]: action.value};
    default:
      return state
  }
}