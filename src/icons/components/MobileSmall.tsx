import * as React from "react";

const MobileSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11 2H5a1 1 0 00-1 1v8h8V3a1 1 0 00-1-1zM5 1a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V3a2 2 0 00-2-2H5zm3 13a1 1 0 100-2 1 1 0 000 2z"
      fill="currentColor"
    />
  </svg>
);

export default MobileSmall;
