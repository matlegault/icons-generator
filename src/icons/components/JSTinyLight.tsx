import * as React from "react";

const JSTinyLight = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M14.94 1.06H1V15h13.94V1.06z" fill="#F3E214" />
    <path
      d="M13.4 6.83l-1.3.83a2.506 2.506 0 00-.16-.24A1.09 1.09 0 0010.78 7a.7.7 0 00-.57.52.7.7 0 00.25.79c.27.171.55.325.84.46.53.28 1.08.5 1.58.82a2.41 2.41 0 01.58 3.39 2.57 2.57 0 01-1.67.9 3.84 3.84 0 01-2.69-.48 2.91 2.91 0 01-1-1.09.692.692 0 000-.1l1.36-.79.13.2a1.82 1.82 0 002.07.75.81.81 0 00.62-.66.75.75 0 00-.42-.83c-.46-.24-.93-.45-1.41-.67a3.61 3.61 0 01-1.3-.88 2.32 2.32 0 01-.4-2.39 2.13 2.13 0 011.75-1.43 3.08 3.08 0 011.8.22c.45.216.824.565 1.07 1a.16.16 0 01.03.1zM2 12.35l1.36-.82.23.37a1 1 0 001.13.48.78.78 0 00.64-.82V5.73c0-.13 0-.17.16-.17H7c.09 0 .12 0 .12.11v5.91a2.22 2.22 0 01-2.29 2.3A3 3 0 013 13.45a2.5 2.5 0 01-1-1.1z"
      fill="#000"
    />
  </svg>
);

export default JSTinyLight;
