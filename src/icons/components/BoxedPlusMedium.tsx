import * as React from "react";

const BoxedPlusMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M5 4h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zM2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm7.5 10a.5.5 0 01-.5-.5V11H5.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H9V5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V9h3.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H11v3.5a.5.5 0 01-.5.5h-1z"
      fill="currentColor"
    />
  </svg>
);

export default BoxedPlusMedium;
