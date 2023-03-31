import * as React from "react";

const RSSSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4 3a1 1 0 000 2c3.514 0 7 2.816 7 7a1 1 0 102 0c0-5.416-4.514-9-9-9zM3 8a1 1 0 011-1c2.486 0 5 1.984 5 5a1 1 0 11-2 0c0-1.784-1.486-3-3-3a1 1 0 01-1-1zm2 4a1 1 0 11-2 0 1 1 0 012 0z"
      fill="currentColor"
    />
  </svg>
);

export default RSSSmall;
