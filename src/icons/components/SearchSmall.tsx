import * as React from "react";

const SearchSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.071 8.071a2 2 0 11-2.828-2.828A2 2 0 018.07 8.07zm.625 2.028a4.002 4.002 0 01-4.868-6.27A4 4 0 0110.1 8.695c.033.025.064.052.093.082l3.536 3.536a1 1 0 11-1.414 1.414l-3.536-3.536c-.03-.03-.057-.06-.082-.093z"
      fill="currentColor"
    />
  </svg>
);

export default SearchSmall;
