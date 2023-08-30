import * as React from "react";

const HydrogenMediumLight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden={true}
    {...props}
  >
    <path
      d="M23.648 48L1 35.968l7.746-4.083 8.72 4.63 7.318-3.857-8.721-4.63 7.746-4.093 22.648 12.033-7.746 4.082-8.239-4.376-7.328 3.867 8.25 4.376L23.648 48z"
      fill="#000"
    />
    <path
      d="M23.648 24.065L1 12.032 8.746 7.95l8.72 4.63 7.318-3.857-8.72-4.63L23.808 0l22.648 12.033-7.746 4.082-8.238-4.376-7.328 3.867 8.25 4.376-7.747 4.083z"
      fill="url(#prefix__paint0_linear_26505_9501)"
    />
    <defs>
      <linearGradient
        id="prefix__paint0_linear_26505_9501"
        x1={45.605}
        y1={12.968}
        x2={12.22}
        y2={30.959}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.002} stopColor="#430470" />
        <stop offset={0.385} stopColor="#8E01F0" />
        <stop offset={0.635} stopColor="#354CF6" />
        <stop offset={1} stopColor="#01FFFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default HydrogenMediumLight;
