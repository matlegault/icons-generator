import * as React from "react";

const LiquidTemplateSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H3zm4 2C5.5 4.25 4 6.125 4 8a3 3 0 006 0c0-1.875-1.5-3.75-3-5z"
      fill="currentColor"
    />
    <path
      d="M4 14a1 1 0 001 1h7a2 2 0 002-2V4a1 1 0 00-1-1v10a1 1 0 01-1 1H4z"
      fill="currentColor"
    />
  </svg>
);

export default LiquidTemplateSmall;
