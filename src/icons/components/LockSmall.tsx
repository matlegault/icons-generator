import * as React from "react";

const LockSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6 6a2 2 0 114 0v1H6V6zm6 1V6a4 4 0 00-8 0v1a1 1 0 00-1 1v5a1 1 0 001 1h8a1 1 0 001-1V8a1 1 0 00-1-1zm-5 3a1 1 0 112 0v1a1 1 0 11-2 0v-1z"
      fill="currentColor"
    />
  </svg>
);

export default LockSmall;
