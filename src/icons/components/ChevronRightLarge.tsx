import * as React from "react";

const ChevronRightLarge = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.577 5.284a.5.5 0 01.707 0l5.657 5.657.707.707a.5.5 0 010 .707l-6.364 6.364a.5.5 0 01-.707 0l-.707-.707a.5.5 0 010-.707l5.303-5.303L9.87 6.698a.5.5 0 010-.707l.707-.707z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronRightLarge;
