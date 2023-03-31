import * as React from "react";

const WarningSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.136 2.481l-5.259 9.015A1 1 0 002.741 13h10.518a1 1 0 00.864-1.504l-5.26-9.015a1 1 0 00-1.727 0zM7 6.001a1 1 0 112 0v2a1 1 0 11-2 0V6zm0 5a1 1 0 112 0 1 1 0 01-2 0z"
      fill="currentColor"
    />
  </svg>
);

export default WarningSmall;
