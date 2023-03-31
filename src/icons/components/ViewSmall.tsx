import * as React from "react";

const ViewSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1.325 7.496a.891.891 0 000 1.008C2.525 10.258 5.098 13 8 13c2.902 0 5.476-2.742 6.675-4.496a.891.891 0 000-1.008C13.475 5.742 10.902 3 8 3 5.098 3 2.524 5.742 1.325 7.496zM11 8a3 3 0 11-6 0 3 3 0 016 0zm-3 2a2 2 0 100-4 2 2 0 000 4z"
      fill="currentColor"
    />
  </svg>
);

export default ViewSmall;
