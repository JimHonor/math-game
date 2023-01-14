import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import TimeBar from "./TimeBar";

type Question = {
  question: string;
  correctAnswer: string;
  wrongAnswer: string;
  level: number;
};

type InTheGameProps = {
  questions: Question[];
  maxLevel: number;
  onALevelPass: () => void;
  onALevelFail: () => void;
};

export default function InTheGame(props: InTheGameProps) {
  const { questions, maxLevel, onALevelPass, onALevelFail } = props;

  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];
  const activeLevel = question.level;

  const initialSeconds = 6;
  const [seconds, setSeconds] = useState(initialSeconds);

  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    const newId = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    setIntervalId(newId);

    return () => {
      clearInterval(newId);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      // clearInterval(intervalId);
      onALevelFail();
    }
  }, [seconds]);

  const onCorrectClick = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);

      clearInterval(intervalId);
      setSeconds(initialSeconds);
      const newId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      setIntervalId(newId);
    } else {
      onALevelPass();
    }
  };

  return (
    <div
      css={css`
        position: relative;
        text-align: center;
      `}
    >
      <h1
        css={css`
          margin: 3rem 0 2rem;
        `}
      >
        {question.question}
      </h1>
      <div>
        <Button onClick={onCorrectClick}>{question.correctAnswer}</Button>
        <Button onClick={onALevelFail}>{question.wrongAnswer}</Button>
      </div>
      <span
        css={css`
          font-size: 13px;
        `}
      >
        Level {activeLevel} of {maxLevel}
      </span>
      <div>
        {new Array(questions.length).fill(null).map((_, index) => (
          <div
            key={index}
            css={css`
              display: inline-block;
              width: 24px;
              height: 24px;
              border: 1px solid black;
              border-radius: 50%;
              background-color: ${index < questionIndex ? "black" : "white"};
              margin-right: 0.25rem;
            `}
          ></div>
        ))}
      </div>
      <TimeBar seconds={1 - seconds / initialSeconds} />
    </div>
  );
}

const Button = (props: { children: React.ReactNode; onClick: () => void }) => {
  const { children, onClick } = props;
  return (
    <button
      css={css`
        width: 220px;
        height: 40px;
        margin: 0 2rem 1rem;
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
