import * as React from "react";

const CloudSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12 7.5c0 .17-.012.337-.035.5h.535a2.5 2.5 0 010 5h-8c-.08 0-.16-.004-.239-.011A3 3 0 117 10a.5.5 0 101 0 4 4 0 00-2.75-3.8A3.501 3.501 0 0112 7.5z"
      fill="currentColor"
    />
  </svg>
);

export default CloudSmall;
