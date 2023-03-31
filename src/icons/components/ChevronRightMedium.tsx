import * as React from "react";

const ChevronRightMedium = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden={true}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.286 3.988a.5.5 0 01.708 0l4.95 4.95.706.707a.5.5 0 010 .707l-.707.707-4.95 4.95a.5.5 0 01-.707 0l-.707-.707a.5.5 0 010-.707l4.596-4.596L7.58 5.403a.5.5 0 010-.708l.707-.707z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronRightMedium;
