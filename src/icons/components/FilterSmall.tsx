import * as React from "react";

const FilterSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 5a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1zm2 3a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm3 2a1 1 0 100 2h2a1 1 0 100-2H7z"
      fill="currentColor"
    />
  </svg>
);

export default FilterSmall;
