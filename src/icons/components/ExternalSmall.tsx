import * as React from "react";

const ExternalSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4 2.5h8A1.5 1.5 0 0113.5 4v8a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V4A1.5 1.5 0 014 2.5zM1 4a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V4zm4 1a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 11-2 0V7.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 6H6a1 1 0 01-1-1z"
      fill="currentColor"
    />
  </svg>
);

export default ExternalSmall;
