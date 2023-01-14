import { css } from "@emotion/react";
import BaseButton from "./ui/BaseButton";

type FailALevelProps = {
  level: number;
  tryLevelAgain: () => void;
};

export default function FailALevel(props: FailALevelProps) {
  const { level, tryLevelAgain } = props;

  return (
    <div
      css={css`
        text-align: center;
        max-width: 480px;
        margin: 0 auto;
      `}
    >
      <h1
        css={css`
          margin-bottom: 1.5rem;
        `}
      >
        OOPs!
      </h1>
      <BaseButton onClick={tryLevelAgain}>Try Level {level} again?</BaseButton>
    </div>
  );
}
