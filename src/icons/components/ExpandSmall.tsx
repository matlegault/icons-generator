import * as React from "react";

const ExpandSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M14 7V3a1 1 0 00-1-1H9a1 1 0 100 2h1.586L8.379 6.207a1 1 0 101.414 1.414L12 5.414V7a1 1 0 102 0zM2 8.998v4a1 1 0 001 1h4a1 1 0 000-2H5.414L7.621 9.79a1 1 0 10-1.414-1.415L4 10.583V8.998a1 1 0 10-2 0z"
      fill="currentColor"
    />
  </svg>
);

export default ExpandSmall;
