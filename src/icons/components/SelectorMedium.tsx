import * as React from "react";

const SelectorMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12.586 9H7.414c-.89 0-1.337-1.077-.707-1.707l2.586-2.586a1 1 0 011.414 0l2.586 2.586c.63.63.184 1.707-.707 1.707zm-5.172 2h5.172c.89 0 1.337 1.077.707 1.707l-2.586 2.586a1 1 0 01-1.414 0l-2.586-2.586c-.63-.63-.184-1.707.707-1.707z"
      fill="currentColor"
    />
  </svg>
);

export default SelectorMedium;
