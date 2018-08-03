import {combineReducers} from '../redux/';
// import { combineReducers } from 'redux';

const defaultFontSize = '16px';
const defaultFontColor = '#000';

function changeFontSize(state = defaultFontSize, action) {
  switch(action.type) {
    case 'SIZE_SMALL':
      return '12px';
    case 'SIZE_LARGE':
      return '24px';
    default:
      return state;
  }
}

function changeFontColor(state = defaultFontColor, action) {
  switch(action.type) {
    case 'COLOR_HOT':
      return 'red';
    case 'COLOR_COLD':
      return 'blue';
    default:
      return state;
  }
}

export default combineReducers({
  changeFontColor,
  changeFontSize
})