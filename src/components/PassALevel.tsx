import { css } from "@emotion/react";
import BaseButton from "./ui/BaseButton";

type PassALevelProps = {
  level: number;
  enterNextLevel: () => void;
};

export default function PassALevel(props: PassALevelProps) {
  const { level, enterNextLevel } = props;

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
        Level {level} complete!
      </h1>
      <BaseButton onClick={enterNextLevel}>Continue</BaseButton>
    </div>
  );
}
