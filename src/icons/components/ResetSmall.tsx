import * as React from "react";

const ResetSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.2 2.1l-2.667 2a.5.5 0 000 .8l2.667 2a.5.5 0 00.8-.4v-1a3 3 0 11-3 3V8a.5.5 0 00-.5-.5h-1A.5.5 0 003 8v.5a5 5 0 105-5v-1a.5.5 0 00-.8-.4z"
      fill="currentColor"
    />
  </svg>
);

export default ResetSmall;
