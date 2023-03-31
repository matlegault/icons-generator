import * as React from "react";

const CaretDownMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.586 8H6.414c-.89 0-1.337 1.077-.707 1.707l3.586 3.586a1 1 0 001.414 0l3.586-3.586c.63-.63.184-1.707-.707-1.707z"
      fill="currentColor"
    />
  </svg>
);

export default CaretDownMedium;
