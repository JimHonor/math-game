import { questions } from "./mock";

export const getQuestionsByLevel = (level: number, count: number) =>
  questions
    .filter((question) => question.level === level)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
