import * as React from "react";

const RenderedMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.75 7.031a2 2 0 011-1.732L9 2.268a2 2 0 012 0l5.25 3.031a2 2 0 011 1.734v6.062a2 2 0 01-1 1.732L11 17.858a1.999 1.999 0 01-2 0l-5.25-3.03a2 2 0 01-1-1.731V7.03zm2 6.064L9 15.55v-4.91L4.75 8.187v4.91zm9.5-6.641L10 8.908 5.75 6.454 10 4l4.25 2.454zM11 10.64l4.25-2.454v4.91L11 15.548v-4.91z"
      fill="currentColor"
    />
  </svg>
);

export default RenderedMedium;
