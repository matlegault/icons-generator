import * as React from "react";

const CaretLeftSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10 11.586V4.414c0-.89-1.077-1.337-1.707-.707L4.707 7.293a1 1 0 000 1.414l3.586 3.586c.63.63 1.707.184 1.707-.707z"
      fill="currentColor"
    />
  </svg>
);

export default CaretLeftSmall;
