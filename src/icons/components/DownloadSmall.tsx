import * as React from "react";

const DownloadSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.518 6.482a1 1 0 010 1.415l-2.81 2.81a1 1 0 01-1.415 0l-2.81-2.81a1 1 0 011.413-1.415L7 7.586V3a1 1 0 112 0v4.586l1.104-1.104a1 1 0 011.414 0z"
      fill="currentColor"
    />
    <path
      d="M3 11l.447.894A2 2 0 005.237 13h5.527a2 2 0 001.789-1.106L13 11"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DownloadSmall;
