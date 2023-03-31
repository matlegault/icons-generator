import * as React from "react";

const CollapseSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8 3v4a1 1 0 001 1h4a1 1 0 100-2h-1.586l2.207-2.207a1 1 0 00-1.414-1.414L10 4.586V3a1 1 0 10-2 0zM8 12.998v-4a1 1 0 00-1-1H3a1 1 0 100 2h1.586l-2.207 2.207a1 1 0 101.414 1.414L6 11.412v1.586a1 1 0 002 0z"
      fill="currentColor"
    />
  </svg>
);

export default CollapseSmall;
