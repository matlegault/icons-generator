import * as React from "react";

const SelectorSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.586 7H5.414c-.89 0-1.337-1.077-.707-1.707l2.586-2.586a1 1 0 011.414 0l2.586 2.586c.63.63.184 1.707-.707 1.707zM5.414 9h5.172c.89 0 1.337 1.077.707 1.707l-2.586 2.586a1 1 0 01-1.414 0l-2.586-2.586C4.077 10.077 4.523 9 5.414 9z"
      fill="currentColor"
    />
  </svg>
);

export default SelectorSmall;
