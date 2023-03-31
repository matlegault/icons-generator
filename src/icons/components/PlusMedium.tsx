import * as React from "react";

const PlusMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9 14.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V11h3.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H11V5.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V9H5.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H9v3.5z"
      fill="currentColor"
    />
  </svg>
);

export default PlusMedium;
