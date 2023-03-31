import * as React from "react";

const WarningMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1.909 15.486L9.143 3.428a1 1 0 011.714 0l7.234 12.056A1 1 0 0117.234 17H2.766a1 1 0 01-.857-1.514zM9 8a1 1 0 012 0v3a1 1 0 01-2 0V8zm0 6a1 1 0 112 0 1 1 0 01-2 0z"
      fill="currentColor"
    />
  </svg>
);

export default WarningMedium;
