import * as React from "react";

const ClipboardMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM5.75 3a1 1 0 011 1 1 1 0 001 1h4.5a1 1 0 001-1 1 1 0 011-1h.375C15.385 3 16 3.616 16 4.375V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4.375C4 3.615 4.616 3 5.375 3h.375z"
      fill="currentColor"
    />
  </svg>
);

export default ClipboardMedium;
