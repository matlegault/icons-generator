import * as React from "react";

const SearchLauncherMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
    <g filter="url(#prefix__filter0_d_26346_8848)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.218 15.28L11.442 4h1.356L8.574 15.28H7.218z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="prefix__filter0_d_26346_8848"
        x={7.218}
        y={4}
        width={5.58}
        height={12.28}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_26346_8848"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_26346_8848"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SearchLauncherMedium;
