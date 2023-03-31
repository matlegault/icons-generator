import * as React from "react";

const NoteSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3 3a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5v5a1 1 0 11-2 0V3zm11 1h-4v3s0 2-2 2H7a1 1 0 001 1h6l-3-3 3-3z"
      fill="currentColor"
    />
  </svg>
);

export default NoteSmall;
