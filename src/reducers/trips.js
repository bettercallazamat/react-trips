import { GET_TRIPS } from '../constants/actions';

const initialState = {
  tripsCollection: [],
};

const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIPS:
      return { ...state, tripsCollection: action.payload };
    default:
      return state;
  }
};

export default tripsReducer;
