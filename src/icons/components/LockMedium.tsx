import * as React from "react";

const LockMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8 6a2 2 0 114 0v2H8V6zM6 8V6a4 4 0 118 0v2h1a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1h1zm5 4.618a1.5 1.5 0 10-2 0V14a1 1 0 102 0v-1.382z"
      fill="currentColor"
    />
  </svg>
);

export default LockMedium;
