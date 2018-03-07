import { combineReducers } from 'redux';
import timerReducer from './timerReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
  timerReducer,
  alertReducer
});

export default rootReducer;
