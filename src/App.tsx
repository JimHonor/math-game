import { css } from "@emotion/react";

import { useMemo, useState } from "react";
import FailALevel from "./components/FailALevel";

import InTheGame from "./components/InTheGame";
import LandingPage from "./components/LandingPage";
import PassALevel from "./components/PassALevel";
import PassTheGame from "./components/PassTheGame";

import { getQuestionsByLevel } from "./data/test";

const MAX_LEVEL = 3;
const MAX_QUESTION_IN_A_LEVEL = 2;

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const onGameStart = () => {
    setPageIndex(1);
    if (activeLevel !== 1) {
      setActiveLevel(1);
    }
  };

  const onALevelPass = () => {
    if (activeLevel !== MAX_LEVEL) {
      setPageIndex(2);
    } else {
      setPageIndex(4);
    }
  };

  const onALevelFail = () => {
    setPageIndex(3);
  };

  const [activeLevel, setActiveLevel] = useState(1);
  const questions = useMemo(() => {
    console.log("level + 1");
    return getQuestionsByLevel(activeLevel, MAX_QUESTION_IN_A_LEVEL);
  }, [activeLevel]);

  const enterNextLevel = () => {
    setPageIndex(1);
    setActiveLevel(activeLevel + 1);
  };

  const tryLevelAgain = () => {
    setPageIndex(1);
  };

  return (
    <div
      className="App"
      css={css`
        padding: 1rem;
      `}
    >
      {pageIndex === 0 ? (
        <LandingPage onGameStart={onGameStart} />
      ) : pageIndex === 1 ? (
        <InTheGame
          questions={questions}
          maxLevel={MAX_LEVEL}
          onALevelPass={onALevelPass}
          onALevelFail={onALevelFail}
        />
      ) : pageIndex === 2 ? (
        <PassALevel level={activeLevel} enterNextLevel={enterNextLevel} />
      ) : pageIndex === 3 ? (
        <FailALevel level={activeLevel} tryLevelAgain={tryLevelAgain} />
      ) : (
        <PassTheGame onGameStart={onGameStart} />
      )}
    </div>
  );
};

export default App;
