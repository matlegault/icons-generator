import * as React from "react";

const CheckSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6.243 9.867L3.768 7.392a.5.5 0 00-.707 0l-.708.707a.5.5 0 000 .707l2.824 2.824a.171.171 0 00.005.005l.707.707a.5.5 0 00.707 0l.707-.708 6.364-6.363a.5.5 0 000-.707l-.707-.708a.5.5 0 00-.707 0l-6.01 6.01z"
      fill="currentColor"
    />
  </svg>
);

export default CheckSmall;
