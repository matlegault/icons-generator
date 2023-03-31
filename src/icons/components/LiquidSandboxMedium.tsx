import * as React from "react";

const LiquidSandboxMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4h10a1 1 0 011 1v2.828c.306.137.59.34.83.61.292.328.722.84 1.17 1.484V5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h5.724a4.968 4.968 0 01-.69-2H5a1 1 0 01-1-1V5a1 1 0 011-1zm1 1a1 1 0 000 2h6a1 1 0 100-2H6zm0 3a1 1 0 000 2h4a1 1 0 100-2H6zm-1 4a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1zm7 3.408c0-2.398 1.88-4.76 2.664-5.64a.445.445 0 01.672 0c.784.88 2.664 3.242 2.664 5.64a3 3 0 11-6 0zm3.146-3.354a.5.5 0 01.708 0c.194.195.472.529.703.927.228.392.443.899.443 1.427a.5.5 0 01-1 0c0-.273-.118-.599-.307-.924a3.77 3.77 0 00-.547-.723.5.5 0 010-.707z"
      fill="currentColor"
    />
  </svg>
);

export default LiquidSandboxMedium;
