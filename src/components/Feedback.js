const Feedback = (type, message) => {
  const title = type === 'error' ? 'Error' : 'Success';
  return (
    <div className="Feedback">
      <p>{title}</p>
      <p>{message}</p>
      <button type="button">OK</button>
    </div>
  );
};

export default Feedback;
