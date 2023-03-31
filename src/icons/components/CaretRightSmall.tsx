import * as React from "react";

const CaretRightSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6 4.414v7.172c0 .89 1.077 1.337 1.707.707l3.586-3.586a1 1 0 000-1.414L7.707 3.707C7.077 3.077 6 3.523 6 4.414z"
      fill="currentColor"
    />
  </svg>
);

export default CaretRightSmall;
