import * as React from "react";

const InfoMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3 15a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10zm6-8a1 1 0 112 0 1 1 0 01-2 0zm1.5 2a.5.5 0 01.5.5v3a.5.5 0 00.5.5.5.5 0 010 1h-3a.5.5 0 010-1 .5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5.5.5 0 010-1h2z"
      fill="currentColor"
    />
  </svg>
);

export default InfoMedium;
