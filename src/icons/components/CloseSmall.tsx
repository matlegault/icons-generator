import * as React from "react";

const CloseSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.475 11.89a.5.5 0 00.707 0l.707-.708a.5.5 0 000-.707L9.414 8l2.475-2.475a.5.5 0 000-.707l-.707-.707a.5.5 0 00-.707 0L8 6.586 5.525 4.11a.5.5 0 00-.707 0l-.707.707a.5.5 0 000 .707L6.586 8 4.11 10.475a.5.5 0 000 .707l.707.707a.5.5 0 00.707 0L8 9.414l2.475 2.475z"
      fill="currentColor"
    />
  </svg>
);

export default CloseSmall;
