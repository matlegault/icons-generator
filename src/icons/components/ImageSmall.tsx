import * as React from "react";

const ImageSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm5 1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-3.394 6.448L5.511 9.18a.5.5 0 01.802.007l.854 1.17 2.047-3.159a.5.5 0 01.857.03l2.516 4.53a.5.5 0 01-.437.742H4.005a.5.5 0 01-.399-.802z"
      fill="currentColor"
    />
  </svg>
);

export default ImageSmall;
