import * as React from "react";

const RenderedSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 5.598A1.5 1.5 0 012.75 4.3l4.5-2.598a1.5 1.5 0 011.5 0l4.5 2.598A1.5 1.5 0 0114 5.6v5.196a1.5 1.5 0 01-.75 1.3l-4.5 2.597a1.5 1.5 0 01-1.5 0l-4.5-2.598A1.5 1.5 0 012 10.797V5.598zm1.5 5.198l3 1.732.75.433V8.63L3.5 6.464v4.332zm8.25-5.63L8 7.33 4.25 5.165 8 3l3.75 2.165zm-3 3.463l3.75-2.165v4.332l-3 1.732-.75.433V8.63z"
      fill="currentColor"
    />
  </svg>
);

export default RenderedSmall;
