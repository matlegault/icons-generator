import * as React from "react";

const ChevronLeftLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden={true}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.425 5.354a.5.5 0 00-.707 0L7.06 11.01l-.707.707a.5.5 0 000 .707l6.363 6.364a.5.5 0 00.707 0l.708-.707a.5.5 0 000-.707L8.828 12.07l5.304-5.303a.5.5 0 000-.707l-.707-.707z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronLeftLarge;
