import * as React from "react";

const PlusSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.5 4a.5.5 0 00-.5.5V7H4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H7v2.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V9h2.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H9V4.5a.5.5 0 00-.5-.5h-1z"
      fill="currentColor"
    />
  </svg>
);

export default PlusSmall;
