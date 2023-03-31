import * as React from "react";

const CloseMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.182 14.596a.5.5 0 00.707 0l.707-.707a.5.5 0 000-.707L11.414 10l3.182-3.182a.5.5 0 000-.707l-.707-.707a.5.5 0 00-.707 0L10 8.586 6.818 5.404a.5.5 0 00-.707 0l-.707.707a.5.5 0 000 .707L8.586 10l-3.182 3.182a.5.5 0 000 .707l.707.707a.5.5 0 00.707 0L10 11.414l3.182 3.182z"
      fill="currentColor"
    />
  </svg>
);

export default CloseMedium;
