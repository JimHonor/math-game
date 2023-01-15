import { css, keyframes } from "@emotion/react";

export default function TimeBar(props: { animationTime: number }) {
  const { animationTime } = props;

  const slide = keyframes`
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }    
  `;

  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: -1;
      `}
    >
      <div
        css={css`
          background-color: blanchedalmond;
          height: 100%;
          animation: ${slide} ${animationTime + "s"} linear;
        `}
      ></div>
    </div>
  );
}
