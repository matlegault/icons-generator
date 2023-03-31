import * as React from "react";

const DimModeSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zm2.83 8a3 3 0 10-5.659 0h5.658zM13 10h1a1 1 0 100-2h-1a1 1 0 100 2zM2 10a1 1 0 110-2h1a1 1 0 010 2H2zm2-6a1 1 0 100 2 1 1 0 000-2zm7 1a1 1 0 112 0 1 1 0 01-2 0zm-8 6.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM5.5 13a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
      fill="currentColor"
    />
  </svg>
);

export default DimModeSmall;
