import * as React from "react";

const ChevronLeftSmall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden={true}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.303 3.404a.5.5 0 00-.707 0L5.061 6.939l-.707.707a.5.5 0 000 .707l.707.707 3.535 3.536a.5.5 0 00.707 0l.707-.707a.5.5 0 000-.707L6.828 8l3.182-3.182a.5.5 0 000-.707l-.707-.707z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronLeftSmall;
