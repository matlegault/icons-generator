import * as React from "react";

const InfoSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v8zm5-7a1 1 0 112 0 1 1 0 01-2 0zm1.5 2a.5.5 0 01.5.5v3a.5.5 0 00.5.5.5.5 0 010 1h-3a.5.5 0 010-1 .5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5.5.5 0 010-1h2z"
      fill="currentColor"
    />
  </svg>
);

export default InfoSmall;
