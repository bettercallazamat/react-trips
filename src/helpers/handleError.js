const handleError = (action, error) => {
  const signupProblems = action === 'signup';
  const loginProblems = action === 'login';
  const userInfoProblems = action === 'userInfo';
  const tripsProblems = action === 'trips';
  const reservationProblems = action === 'reservation';

  if (signupProblems && error.response.status === 422) {
    console.log(`Signup problems: ${error.response.data.error}`); // wrong inputs
  }

  if (loginProblems) {
    if (error.response.status === 401) {
      console.log('Wrong password.');
    }
    if (error.response.status === 500) {
      console.log('No such user.');
    }
  }

  if (userInfoProblems && error.response.status === 401) {
    console.log(`User Info problems: ${error.response.data.error}`); // not logged in, to watch profile
  }

  if (tripsProblems && error.response.status === 401) {
    console.log(`Trips problems: ${error.response.data.error}`);
  }

  if (reservationProblems) {
    if (error.response.status === 401) {
      console.log(`Reservations problems: ${error.response.data.error}`); // Not auth
    }
    if (error.response.status === 422) {
      console.log('Already reserved');
    }
  }
};

export default handleError;
