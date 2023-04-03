import * as React from "react";

const EnterSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M5.83 11l1.12 1.119a1 1 0 11-1.414 1.414l-2.829-2.828a1 1 0 010-1.414l2.829-2.829A1 1 0 016.95 7.876L5.826 9H13a1 1 0 110 2H5.83z"
      fill="currentColor"
    />
    <rect x={12} y={2} width={2} height={9} rx={1} fill="currentColor" />
  </svg>
);

export default EnterSmall;
