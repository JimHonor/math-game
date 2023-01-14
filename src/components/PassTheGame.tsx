import { css } from "@emotion/react";
import BaseButton from "./ui/BaseButton";

type PassTheGameProps = {
  onGameStart: () => void;
};

export default function PassTheGame(props: PassTheGameProps) {
  const { onGameStart } = props;

  return (
    <div
      css={css`
        text-align: center;
        max-width: 480px;
        margin: 0 auto;
      `}
    >
      <h1>Congratulations!</h1>
      <h3
        css={css`
          margin-bottom: 2rem;
        `}
      >
        You pass the math game.
      </h3>
      <BaseButton onClick={onGameStart}>Restart Game</BaseButton>
    </div>
  );
}
