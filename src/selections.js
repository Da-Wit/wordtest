const Selections = ({ selections, indexOfAnswer, next }) => {
  const getSelectionIndex = ({ parentNode, textContent }) =>
    Array.from(parentNode.children)
      .filter((node) => {
        return node.tagName === "BUTTON";
      })
      .findIndex((selection) => selection.textContent === textContent);

  const onSelectionClick = ({ target }) => {
    let isCorrectAnswer = getSelectionIndex(target) === indexOfAnswer;
    next(isCorrectAnswer);
  };

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
      {selections.map(({ text }, index) => (
        <button onClick={onSelectionClick} style={btnStyle} key={index}>
          {text}
        </button>
      ))}
    </div>
  );
};

export default Selections;
