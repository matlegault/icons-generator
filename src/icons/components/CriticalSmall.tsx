import * as React from "react";

const CriticalSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.293 5.707l3.414-3.414A1 1 0 016.414 2h3.172a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707v3.172a1 1 0 01-.293.707l-3.414 3.414a1 1 0 01-.707.293H6.414a1 1 0 01-.707-.293l-3.414-3.414A1 1 0 012 9.586V6.414a1 1 0 01.293-.707zM7 5a1 1 0 012 0v3a1 1 0 11-2 0V5zm0 6a1 1 0 112 0 1 1 0 01-2 0z"
      fill="currentColor"
    />
  </svg>
);

export default CriticalSmall;
