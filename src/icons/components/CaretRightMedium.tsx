import * as React from "react";

const CaretRightMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8 6.414v7.172c0 .89 1.077 1.337 1.707.707l3.586-3.586a1 1 0 000-1.414L9.707 5.707C9.077 5.077 8 5.523 8 6.414z"
      fill="currentColor"
    />
  </svg>
);

export default CaretRightMedium;
