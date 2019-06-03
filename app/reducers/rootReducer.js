import {combineReducers} from 'redux';
import { LoginReducer} from './formReducer';

const root = combineReducers({
  form: LoginReducer
})

export default {
  root
};