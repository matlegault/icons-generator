import * as React from "react";

const HideMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M16.1 2.535a.757.757 0 011.07 1.07L3.604 17.17a.757.757 0 01-1.07-1.07L16.1 2.535zM7.093 15.367C8.013 15.76 8.991 16 10 16c3.777 0 7.12-3.37 8.638-5.47a.9.9 0 000-1.059 16.972 16.972 0 00-2.72-2.928l-2.14 2.14a4 4 0 01-5.095 5.095l-1.59 1.59z"
      fill="currentColor"
    />
    <path
      d="M10.532 11.928a2.004 2.004 0 001.396-1.396l-1.396 1.396zM10 4c1.353 0 2.65.433 3.828 1.084L12.232 6.68a4 4 0 00-5.552 5.552l-1.83 1.832c-1.506-1.108-2.727-2.481-3.488-3.535a.9.9 0 010-1.058C2.88 7.371 6.223 4 10 4z"
      fill="currentColor"
    />
    <path
      d="M10 8c.27 0 .527.053.762.15L8.15 10.762A2 2 0 0110 8z"
      fill="currentColor"
    />
    <path
      d="M12 10a2 2 0 11-4 0 2 2 0 014 0zm-3.4 0a1.4 1.4 0 102.8 0 1.4 1.4 0 00-2.8 0z"
      fill="currentColor"
    />
  </svg>
);

export default HideMedium;
