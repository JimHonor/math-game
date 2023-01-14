import { css } from "@emotion/react";
import BaseButton from "./ui/BaseButton";

type LandingPageProps = {
  onGameStart: () => void;
};

export default function LandingPage(props: LandingPageProps) {
  const { onGameStart } = props;

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
        Math Game
      </h1>
      <BaseButton onClick={onGameStart}>Play</BaseButton>
    </div>
  );
}
