import { css } from "@emotion/react";

import { percentage } from "../assets/js/utilities";

export default function TimeBar(props: { seconds: number }) {
  const { seconds } = props;

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
          width: ${percentage(seconds)};
          height: 100%;
          transition: width 1s;
        `}
      ></div>
    </div>
  );
}
