import * as React from "react";

const PlusLarge = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11 17.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V13h4.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13V6.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V11H6.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H11v4.5z"
      fill="currentColor"
    />
  </svg>
);

export default PlusLarge;
