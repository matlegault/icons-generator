import * as React from "react";

const ChevronRightSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6.696 3.354a.5.5 0 01.708 0l3.535 3.535.707.707a.5.5 0 010 .707l-.707.707-3.535 3.536a.5.5 0 01-.708 0l-.707-.707a.5.5 0 010-.707L9.171 7.95 5.99 4.768a.5.5 0 010-.707l.707-.707z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronRightSmall;
