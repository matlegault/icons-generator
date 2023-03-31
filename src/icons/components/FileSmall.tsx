import * as React from "react";

const FileSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V5.414a1 1 0 00-.293-.707L11 3 9.293 1.293A1 1 0 008.586 1H4zm2 4a1 1 0 000 2h2a1 1 0 000-2H6zM5 9a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1zm1 2a1 1 0 100 2h4a1 1 0 100-2H6z"
      fill="currentColor"
    />
  </svg>
);

export default FileSmall;
