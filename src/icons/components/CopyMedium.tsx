import * as React from "react";

const CopyMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M14 4h-4a1 1 0 00-1 1H7a3 3 0 013-3h4a3 3 0 013 3v6a3 3 0 01-3 3v-2a1 1 0 001-1V5a1 1 0 00-1-1zM6 8h4a1 1 0 011 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1zM3 9a3 3 0 013-3h4a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3V9z"
      fill="currentColor"
    />
  </svg>
);

export default CopyMedium;
