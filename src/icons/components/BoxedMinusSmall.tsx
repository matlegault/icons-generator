import * as React from "react";

const BoxedMinusSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12 2.5H4A1.5 1.5 0 002.5 4v8A1.5 1.5 0 004 13.5h8a1.5 1.5 0 001.5-1.5V4A1.5 1.5 0 0012 2.5zM4 1a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3H4zm8 6.75V7.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-.75z"
      fill="currentColor"
    />
  </svg>
);

export default BoxedMinusSmall;
