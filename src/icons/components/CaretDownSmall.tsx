import * as React from "react";

const CaretDownSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.586 6H4.414c-.89 0-1.337 1.077-.707 1.707l3.586 3.586a1 1 0 001.414 0l3.586-3.586c.63-.63.184-1.707-.707-1.707z"
      fill="currentColor"
    />
  </svg>
);

export default CaretDownSmall;
