import * as React from "react";

const DownloadMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.707 9.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 10.586V3a1 1 0 012 0v7.586l1.293-1.293a1 1 0 011.414 0z"
      fill="currentColor"
    />
    <path
      d="M4 15l.447.894A2 2 0 006.237 17h7.527a2 2 0 001.789-1.106L16 15"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DownloadMedium;
