import { combineReducers } from 'redux';
import tripsReducer from './trips';
import userReducer from './user';
import feedbackReducer from './feedback';

const rootReducer = combineReducers({
  trips: tripsReducer,
  currentUser: userReducer,
  feedback: feedbackReducer,
});

export default rootReducer;
