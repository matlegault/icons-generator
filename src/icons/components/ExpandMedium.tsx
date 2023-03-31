import * as React from "react";

const ExpandMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M5.414 16.002H8a1 1 0 110 2H3a1 1 0 01-1-1v-5a1 1 0 112 0v2.586l3.975-3.975a1 1 0 111.414 1.414l-3.975 3.975zM14.586 4H12a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V5.414L12.025 9.39a1 1 0 11-1.414-1.414L14.586 4z"
      fill="currentColor"
    />
  </svg>
);

export default ExpandMedium;
