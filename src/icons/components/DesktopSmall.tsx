import * as React from "react";

const DesktopSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13 2H3a1 1 0 00-1 1v7h12V3a1 1 0 00-1-1zM3 1a2 2 0 00-2 2v8a2 2 0 002 2h2.999c-.002.255-.007.459-.018.625a1.79 1.79 0 01-.048.36A3.253 3.253 0 015.5 14a.5.5 0 000 1h5a.5.5 0 000-1c-.24 0-.359-.002-.433-.014a1.79 1.79 0 01-.049-.361c-.01-.166-.015-.37-.017-.625H13a2 2 0 002-2V3a2 2 0 00-2-2H3zm6.001 12H7c-.002.268-.007.497-.02.688-.006.105-.015.21-.03.312H9.05a3.873 3.873 0 01-.03-.312c-.013-.191-.018-.42-.02-.688z"
      fill="currentColor"
    />
  </svg>
);

export default DesktopSmall;
