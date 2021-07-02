import { useState } from "react";
import "./App.css";
import Selections from "./selections";
import { ANSWERS, QUESTIONS } from "./data.js";

let LENGTH_OF_QUESTIONS;
const RIGHT_ANSWER_INDEX = 0;
const SCON = "SCON";
const JEONSANG = "JEONSANG";

function App() {
  const [count, setCount] = useState(0);
  const [answerCount, setAnswerCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [subject, setSubject] = useState(SCON);
  const getArray = ({ length }) => {
    const array = [];
    for (let i = 0; i < length; i++) {
      array[i] = 0;
    }
    return array;
  };

  // const initQuestion = "To start, click the Start Button.";
  // const initAnswers = () =>
  //   getArray({length: NUMBER_OF_SELECTIONS}).map(() => ({
  //     text: "Hello DK",
  //     is
  //   }));

  const getQuestionIndex = () =>
    Math.floor(Math.random() * LENGTH_OF_QUESTIONS);

  const shakeAnswers = (answers) => {
    const { length } = answers;
    const shakedAnswers = getArray({ length });
    let index = 0;

    while (index !== 5) {
      const randomIndex = Math.floor(Math.random() * length);
      // 0 is initialValue of getArray function
      if (shakedAnswers[randomIndex] === 0) {
        shakedAnswers[randomIndex] = answers[index];
        index++;
      }
    }

    return shakedAnswers;
  };

  const getAnswers = (
    { answerIndex, subjectParam } = { answerIndex: 0, subjectParam: null }
  ) => {
    const sbj = subjectParam || subject;
    console.log({ sbj, subject, subjectParam });
    const rawAnswers = ANSWERS[sbj][answerIndex];
    let answers = [];
    const rightAnswer = { text: rawAnswers[RIGHT_ANSWER_INDEX], isRight: true };
    let wrongAnswer = rawAnswers.slice();
    wrongAnswer.splice(RIGHT_ANSWER_INDEX, 1);
    wrongAnswer = wrongAnswer.map((answer) => ({
      text: answer,
      isRight: false,
    }));
    answers.push(rightAnswer);
    wrongAnswer.forEach((a) => answers.push(a));
    answers = shakeAnswers(answers);
    return answers;
  };

  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(getAnswers);

  const render = ({ subjectParam }) => {
    const nextQuestionIndex = getQuestionIndex();
    const nextAnswers = getAnswers({
      answerIndex: nextQuestionIndex,
      subjectParam,
    });
    setQuestionIndex(nextQuestionIndex);
    setAnswers(nextAnswers);
  };

  const next = (isCorrectAnswer) => {
    if (started === false) {
      return;
    }

    if (isCorrectAnswer) {
      setAnswerCount(answerCount + 1);
    }

    setCount(count + 1);
    render({ subjectParam: subject });
  };

  const onJeonsangClick = () => {
    setStarted(true);
    setSubject(JEONSANG);
    LENGTH_OF_QUESTIONS = QUESTIONS.JEONSANG.length;
    render({ subjectParam: JEONSANG });
  };

  const onSconClick = () => {
    setStarted(true);
    setSubject(SCON);
    LENGTH_OF_QUESTIONS = QUESTIONS.SCON.length;
    render({ subjectParam: SCON });
  };

  const title =
    Math.random() < 0.5
      ? "스콘은 스마트문화앱콘텐츠 제작의 약자이다."
      : "전상은 일주일에 5시간이 들었다.";
  if (started === false) {
    return (
      <div className="App">
        <header>
          <h2 className="question">
            스콘은 스마트문화앱콘텐츠 제작의 약자이다.
          </h2>
        </header>

        <div>
          <button onClick={onJeonsangClick} className="start-button">
            전상
          </button>
        </div>
        <div>
          <button onClick={onSconClick} className="start-button">
            스콘
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <header>
        <p>
          {answerCount} / {count}
        </p>
      </header>
      <h2 className="question">{QUESTIONS[subject][questionIndex]}</h2>
      <Selections
        answers={answers}
        // selections={selections}
        // indexOfAnswer={indexOfCorrectAnswer}
        next={next}
      />
    </div>
  );
}

export default App;
