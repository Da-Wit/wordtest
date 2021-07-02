// const Selections = ({ selections, indexOfAnswer, next }) => {
const Selections = ({ answers, next }) => {
  const containerStyle = {
    width: "400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  };

  const btnStyle = {
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      {answers.map(({ text, isRight }, index) => {
        return (
          <button onClick={() => next(isRight)} style={btnStyle} key={index}>
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default Selections;
