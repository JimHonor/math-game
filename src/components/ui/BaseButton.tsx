import { css } from "@emotion/react";
import React from "react";

export default function BaseButton(props: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const { children, onClick } = props;
  return (
    <button
      css={css`
        display: block;
        width: 100%;
        height: 3rem;
        font-size: 20px;
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
