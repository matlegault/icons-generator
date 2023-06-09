import * as React from "react";

const YouTubeSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M14.707 4.54a1.76 1.76 0 00-1.238-1.245C12.378 3 8 3 8 3s-4.378 0-5.47.295A1.76 1.76 0 001.293 4.54C1 5.64 1 7.932 1 7.932s0 2.293.293 3.392A1.76 1.76 0 002.53 12.57c1.091.294 5.469.294 5.469.294s4.378 0 5.47-.294a1.76 1.76 0 001.238-1.246C15 10.224 15 7.932 15 7.932s0-2.292-.293-3.391zm-8.14 5.473V5.851l3.66 2.081-3.66 2.081z"
      fill="currentColor"
    />
  </svg>
);

export default YouTubeSmall;
