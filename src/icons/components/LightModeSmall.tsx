import * as React from "react";

const LightModeSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7 2a1 1 0 012 0v1a1 1 0 11-2 0V2zm4 6a3 3 0 11-6 0 3 3 0 016 0zm-3 4a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zm4-4a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM2 7a1 1 0 000 2h1a1 1 0 100-2H2zm1-3a1 1 0 112 0 1 1 0 01-2 0zm9-1a1 1 0 100 2 1 1 0 000-2zm-1 9a1 1 0 112 0 1 1 0 01-2 0zm-7-1a1 1 0 100 2 1 1 0 000-2z"
      fill="currentColor"
    />
  </svg>
);

export default LightModeSmall;
