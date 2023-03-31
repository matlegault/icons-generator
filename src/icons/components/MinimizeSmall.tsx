import * as React from "react";

const MinimizeSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12 3H4a1 1 0 00-1 1v8a1 1 0 001 1h2.17a2.995 2.995 0 000 2H4a3 3 0 01-3-3V4a3 3 0 013-3h8a3 3 0 013 3v2.17a2.995 2.995 0 00-2 0V4a1 1 0 00-1-1zm3 6a1 1 0 10-2 0v2.586L8.714 7.3l-.007-.007a1 1 0 00-1.414 1.414L11.586 13H9a1 1 0 100 2h5a1 1 0 001-1V9z"
      fill="currentColor"
    />
  </svg>
);

export default MinimizeSmall;
