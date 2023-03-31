import * as React from "react";

const CheatsheetMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4 4a2 2 0 012-2h9a2 2 0 012 2v1h-1V4h-1v12a2 2 0 01-2 2H4a2 2 0 01-2-2h11v-1h-1.5l1.5-3h-3l1.5 3H9l-1.5-3L6 15H4V4zm3.5 0L6 7h3L7.5 4zm0 4L9 11H6l1.5-3zm4-1L13 4h-3l1.5 3zM10 8l1.5 3L13 8h-3z"
      fill="currentColor"
    />
  </svg>
);

export default CheatsheetMedium;
