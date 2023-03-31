import * as React from "react";

const MinimizeMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M15 4H5a1 1 0 00-1 1v10a1 1 0 001 1h4.17a2.995 2.995 0 000 2H5a3 3 0 01-3-3V5a3 3 0 013-3h10a3 3 0 013 3v4.17a2.995 2.995 0 00-2 0V5a1 1 0 00-1-1zm3 8a1 1 0 10-2 0v2.586L11.714 10.3l-.007-.007a1 1 0 10-1.414 1.414L14.586 16H12a1 1 0 100 2h5a1 1 0 001-1v-5z"
      fill="currentColor"
    />
  </svg>
);

export default MinimizeMedium;
