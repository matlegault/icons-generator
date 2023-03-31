import * as React from "react";

const CloseLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden={true}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.89 17.303a.5.5 0 00.706 0l.707-.707a.5.5 0 000-.707L13.414 12l3.89-3.89a.5.5 0 000-.706l-.708-.707a.5.5 0 00-.707 0L12 10.586l-3.89-3.89a.5.5 0 00-.706 0l-.707.708a.5.5 0 000 .707L10.586 12l-3.89 3.89a.5.5 0 000 .706l.708.707a.5.5 0 00.707 0L12 13.414l3.89 3.89z"
      fill="currentColor"
    />
  </svg>
);

export default CloseLarge;
