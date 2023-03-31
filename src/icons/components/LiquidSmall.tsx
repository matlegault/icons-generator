import * as React from "react";

const LiquidSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.66 2.363C6.693 3.436 4 6.718 4 10a4 4 0 008 0c0-3.282-2.693-6.564-3.66-7.637a.453.453 0 00-.68 0zM8.987 5c-.393 0-.62.45-.403.777.564.846 1.111 1.831 1.475 2.866.074.21.27.357.494.357a.483.483 0 00.468-.635c-.405-1.173-1.014-2.255-1.605-3.142l-.007-.01A.48.48 0 009.01 5h-.022z"
      fill="currentColor"
    />
  </svg>
);

export default LiquidSmall;
