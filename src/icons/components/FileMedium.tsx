import * as React from "react";

const FileMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6 14a1 1 0 001 1h6a1 1 0 100-2H7a1 1 0 00-1 1zm0-4a1 1 0 001 1h6a1 1 0 100-2H7a1 1 0 00-1 1zm0-4a1 1 0 001 1h2a1 1 0 000-2H7a1 1 0 00-1 1zm9.707-.707l-3-3A.996.996 0 0012 2H5a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V6a.997.997 0 00-.293-.707z"
      fill="currentColor"
    />
  </svg>
);

export default FileMedium;
