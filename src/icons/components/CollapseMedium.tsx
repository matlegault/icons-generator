import * as React from "react";

const CollapseMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6.268 12.32H3.682a1 1 0 010-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.586L3.707 17.71a1 1 0 01-1.414-1.414l3.975-3.975zM13.732 7.682h2.586a1 1 0 110 2h-5a1 1 0 01-1-1v-5a1 1 0 112 0v2.586l3.975-3.975a1 1 0 111.414 1.414l-3.975 3.975z"
      fill="currentColor"
    />
  </svg>
);

export default CollapseMedium;
