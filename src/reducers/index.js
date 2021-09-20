import { combineReducers } from 'redux';
import tripsReducer from './trips';

const rootReducer = combineReducers({
  trips: tripsReducer,
});

export default rootReducer;
