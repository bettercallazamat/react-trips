import { combineReducers } from 'redux';
import tripsReducer from './trips';
import userReducer from './user';

const rootReducer = combineReducers({
  trips: tripsReducer,
  currentUser: userReducer,
});

export default rootReducer;
