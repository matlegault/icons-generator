import * as React from "react";

const HydrogenTinyLight = (props: React.SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_26505_9497)">
      <path
        d="M7.55 16L0 11.99l2.582-1.362 2.907 1.544 2.439-1.286L5.02 9.343l2.582-1.365 7.55 4.011-2.583 1.361-2.746-1.459-2.442 1.29 2.75 1.458L7.548 16z"
        fill="#000"
      />
      <path
        d="M7.55 8.022L0 4.01 2.582 2.65l2.907 1.544 2.439-1.286-2.907-1.544L7.603 0l7.55 4.01-2.583 1.362-2.746-1.46-2.442 1.29 2.75 1.459-2.583 1.36z"
        fill="url(#prefix__paint0_linear_26505_9497)"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_26505_9497"
        x1={14.868}
        y1={4.323}
        x2={3.74}
        y2={10.32}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.002} stopColor="#430470" />
        <stop offset={0.385} stopColor="#8E01F0" />
        <stop offset={0.635} stopColor="#354CF6" />
        <stop offset={1} stopColor="#01FFFF" />
      </linearGradient>
      <clipPath id="prefix__clip0_26505_9497">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default HydrogenTinyLight;
