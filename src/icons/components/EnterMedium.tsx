import * as React from "react";

const EnterMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6.83 15l1.12 1.119a1 1 0 11-1.414 1.414l-2.829-2.828a1 1 0 010-1.415l2.829-2.828a1 1 0 011.414 1.414L6.826 13H15a1 1 0 110 2H6.83z"
      fill="currentColor"
    />
    <rect x={14} y={2} width={2} height={13} rx={1} fill="currentColor" />
  </svg>
);

export default EnterMedium;
