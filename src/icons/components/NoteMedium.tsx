import * as React from "react";

const NoteMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5v6a1 1 0 11-2 0V4zm15 2h-6v4s0 2-2 2H8v1a1 1 0 001 1h9l-4-4 4-4z"
      fill="currentColor"
    />
  </svg>
);

export default NoteMedium;
