import { sendFeedbackAction } from '../actions/feedback';

const handleError = (dispatch, action, error) => {
  const signupProblems = action === 'signup';
  const loginProblems = action === 'login';
  const userInfoProblems = action === 'userInfo';
  const tripsProblems = action === 'trips';
  const reservationProblems = action === 'reservation';

  if (signupProblems && error.response.status === 422) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
    // console.log(`Signup problems: ${error.response.data.error}`); // wrong inputs
  }

  if (loginProblems) {
    if (error.response.status === 401) {
      dispatch(sendFeedbackAction({ type: 'error', feedback: 'Wrong password.' }));
      console.log('Wrong password.');
    }
    if (error.response.status === 500) {
      dispatch(sendFeedbackAction({ type: 'error', feedback: 'No such user.' }));
      console.log('No such user.');
    }
  }

  if (userInfoProblems && error.response.status === 401) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
    console.log(`User Info problems: ${error.response.data.error}`); // not logged in, to watch profile
  }

  if (tripsProblems && error.response.status === 401) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
    console.log(`Trips problems: ${error.response.data.error}`);
  }

  if (reservationProblems) {
    if (error.response.status === 401) {
      dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
      console.log(`Reservations problems: ${error.response.data.error}`); // Not auth
    }
    if (error.response.status === 422) {
      dispatch(sendFeedbackAction({ type: 'error', feedback: 'Already reserved' }));
      console.log('Already reserved');
    }
  }
};

export default handleError;
