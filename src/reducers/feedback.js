import { SEND_FEEDBACK, SET_FEEDBACK_INACTIVE } from '../constants/actions';

const initialState = {
  type: '',
  feedback: '',
  active: false,
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_FEEDBACK:
      return {
        ...state,
        type: action.data.type,
        feedback: action.data.feedback,
        active: true,
      };
    case SET_FEEDBACK_INACTIVE:
      return {
        ...state,
        type: '',
        feedback: '',
        active: false,
      };
    default:
      return state;
  }
};

export default feedbackReducer;
