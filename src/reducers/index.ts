/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import {combineReducers} from 'redux';
import NavigationReducer from './NavigationReducer';

export default combineReducers({
  nav: NavigationReducer,
});
