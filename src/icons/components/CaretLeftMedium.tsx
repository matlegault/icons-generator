import * as React from "react";

const CaretLeftMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12 13.586V6.414c0-.89-1.077-1.337-1.707-.707L6.707 9.293a1 1 0 000 1.414l3.586 3.586c.63.63 1.707.184 1.707-.707z"
      fill="currentColor"
    />
  </svg>
);

export default CaretLeftMedium;
