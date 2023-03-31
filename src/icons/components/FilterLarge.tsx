import * as React from "react";

const FilterLarge = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 7a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm3 5a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zm4 4a1 1 0 100 2h6a1 1 0 100-2H9z"
      fill="currentColor"
    />
  </svg>
);

export default FilterLarge;
