import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFeedbackInactiveAction } from '../actions/feedback';
import '../assets/styles/modal.css';

const Feedback = ({ type, feedback }) => {
  const dispatch = useDispatch();
  const title = type === 'error' ? 'Error' : 'Success';

  const handleClick = () => {
    dispatch(setFeedbackInactiveAction());
  };

  return (
    <div className="Feedback modal">
      <div className="modal-content">
        <h3 className="title">{title}</h3>
        <p>{feedback}</p>
        <button className="cancel" type="button" onClick={handleClick}>OK</button>
      </div>
    </div>
  );
};

Feedback.propTypes = {
  type: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default Feedback;
