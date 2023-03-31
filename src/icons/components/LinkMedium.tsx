import * as React from "react";

const LinkMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.354 3.99a4 4 0 015.656 5.656l-.707.707-.707.708a2 2 0 01-2.828 0l1.414-1.415.707-.707.707-.707a2 2 0 00-2.828-2.828l-.707.707-.707.707-1.415 1.414a2 2 0 010-2.828l.707-.707.707-.707zm-.708 12.02a4 4 0 11-5.656-5.657l.707-.707.707-.707a2 2 0 012.828 0l-1.414 1.415-.707.707-.707.707a2 2 0 002.828 2.828l.707-.707.707-.707 1.415-1.414a2 2 0 010 2.828l-.707.707-.708.707zm3.536-9.192a1 1 0 00-1.414 0l-4.95 4.95a1 1 0 101.414 1.414l4.95-4.95a1 1 0 000-1.414z"
      fill="currentColor"
    />
  </svg>
);

export default LinkMedium;
