import { useState } from "react";
import "./App.css";
import Selections from "./selections";
import { DESCRIPTIONS, ANSWERS } from "./data.js";

const NUMBER_OF_SELECTIONS = 5;
function App() {
  const getArrayHavingLength = (length) => {
    const array = [];
    for (let i = 0; i < length; i++) {
      array[i] = 0;
    }
    return array;
  };

  const initDescription = "To start, click the Start Button.";
  const initSelections = () =>
    getArrayHavingLength(NUMBER_OF_SELECTIONS).map(() => ({
      text: "Hello",
      index: 0,
    }));
  const [count, setCount] = useState(0);
  const [answerCount, setAnswerCount] = useState(0);
  const [selections, setSelections] = useState(initSelections);
  const [indexOfCorrectAnswer, setIndexOfCorrectAnswer] = useState(null);
  const [description, setDescription] = useState(initDescription);
  const [started, setStarted] = useState(false);

  const getSelections = () => {
    let newSelections = getArrayHavingLength(NUMBER_OF_SELECTIONS).map(() => ({
      text: "",
      index: -1,
    }));

    let index = 0;
    while (index !== 5) {
      const randomIndex = Math.floor(Math.random() * ANSWERS.length);
      const newSelection = { text: ANSWERS[randomIndex], index: randomIndex };

      if (
        newSelections.filter((s) => s.index === newSelection.index).length === 0
      ) {
        newSelections[index] = newSelection;
        index++;
      }
    }
    return newSelections;
  };

  const getIndexOfCorrectAnswer = () =>
    Math.floor(Math.random() * NUMBER_OF_SELECTIONS);

  const getDescription = (selections, indexOfCorrectAnswer) => {
    const correctAnswer = selections[indexOfCorrectAnswer];
    const indexOfCorrectAnswerInData = ANSWERS.findIndex(
      (answer) => correctAnswer.text === answer
    );

    return DESCRIPTIONS[indexOfCorrectAnswerInData];
  };

  const render = () => {
    const nextSelections = getSelections();
    const nextIndexOfCorrectAnswer = getIndexOfCorrectAnswer();
    setSelections(nextSelections);
    setIndexOfCorrectAnswer(nextIndexOfCorrectAnswer);
    setDescription(getDescription(nextSelections, nextIndexOfCorrectAnswer));
  };

  const next = (isCorrectAnswer) => {
    if (started === false) {
      return;
    }

    if (isCorrectAnswer) {
      setAnswerCount(answerCount + 1);
    }

    setCount(count + 1);
    render();
  };

  const onStartButtonClick = ({ target }) => {
    target.parentNode.removeChild(target);
    render();
    setStarted(true);
  };

  return (
    <div className="App">
      <header>
        <p>
          Count : {count}, Correct Answer Count : {answerCount}
        </p>
      </header>
      <h2>{description}</h2>
      <Selections
        selections={selections}
        indexOfAnswer={indexOfCorrectAnswer}
        next={next}
      />
      <div>
        <button onClick={onStartButtonClick}>Start</button>
      </div>
    </div>
  );
}

export default App;
