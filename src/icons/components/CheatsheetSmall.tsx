import * as React from "react";

const CheatsheetSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13 3v10a2 2 0 01-2 2H3a2 2 0 01-2-2h11v-1H3V3a2 2 0 012-2h8a2 2 0 012 2v1h-1V3h-1zM5.5 3L4 5h3L5.5 3zm4 5L8 6h3L9.5 8zM8 3l1.5 2L11 3H8zM5.5 6L7 8H4l1.5-2zM11 9l-1.5 2L8 9h3zM5.5 9L7 11H4l1.5-2z"
      fill="currentColor"
    />
  </svg>
);

export default CheatsheetSmall;
