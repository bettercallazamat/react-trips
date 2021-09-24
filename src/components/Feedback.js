import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFeedbackInactiveAction } from '../actions/feedback';

const Feedback = ({ type, feedback }) => {
  const dispatch = useDispatch();
  const title = type === 'error' ? 'Error' : 'Success';

  const handleClick = () => {
    dispatch(setFeedbackInactiveAction());
  };

  return (
    <div className="Feedback">
      <p>{title}</p>
      <p>{feedback}</p>
      <button type="button" onClick={handleClick}>OK</button>
    </div>
  );
};

Feedback.propTypes = {
  type: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default Feedback;
