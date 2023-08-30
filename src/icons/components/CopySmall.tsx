import * as React from "react";

const CopySmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12 3H8a1 1 0 00-1 1H5a3 3 0 013-3h4a3 3 0 013 3v4a3 3 0 01-3 3V9a1 1 0 001-1V4a1 1 0 00-1-1zM4 7h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1zM1 8a3 3 0 013-3h4a3 3 0 013 3v4a3 3 0 01-3 3H4a3 3 0 01-3-3V8z"
      fill="currentColor"
    />
  </svg>
);

export default CopySmall;
