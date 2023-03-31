import * as React from "react";

const ViewMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1.362 9.47a.9.9 0 000 1.06C2.88 12.63 6.223 16 10 16s7.12-3.37 8.638-5.47a.9.9 0 000-1.06C17.12 7.37 13.777 4 10 4S2.88 7.37 1.362 9.47zM14 10a4 4 0 11-8 0 4 4 0 018 0zm-4 2a2 2 0 100-4 2 2 0 000 4z"
      fill="currentColor"
    />
  </svg>
);

export default ViewMedium;
