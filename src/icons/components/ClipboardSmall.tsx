import * as React from "react";

const ClipboardSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7 1a1 1 0 000 2h2a1 1 0 000-2H7zM4 2a1 1 0 011 1 1 1 0 001 1h4a1 1 0 001-1 1 1 0 112 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V3a1 1 0 011-1z"
      fill="currentColor"
    />
  </svg>
);

export default ClipboardSmall;
