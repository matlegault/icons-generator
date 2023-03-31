import * as React from "react";

const CriticalMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.293 3.293l3.414 3.414a1 1 0 01.293.707v5.172a1 1 0 01-.293.707l-3.414 3.414a1 1 0 01-.707.293H7.414a1 1 0 01-.707-.293l-3.414-3.414A1 1 0 013 12.586V7.414a1 1 0 01.293-.707l3.414-3.414A1 1 0 017.414 3h5.172a1 1 0 01.707.293zM9 7a1 1 0 012 0v3a1 1 0 11-2 0V7zm0 6a1 1 0 112 0 1 1 0 01-2 0z"
      fill="currentColor"
    />
  </svg>
);

export default CriticalMedium;
