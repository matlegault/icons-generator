import * as React from "react";

const ChevronLeftMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.717 3.989a.5.5 0 00-.707 0l-4.95 4.95-.707.706a.5.5 0 000 .707l.707.708 4.95 4.95a.5.5 0 00.707 0l.707-.708a.5.5 0 000-.707L7.828 10l4.596-4.596a.5.5 0 000-.707l-.707-.707z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronLeftMedium;
