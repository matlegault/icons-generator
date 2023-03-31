import * as React from "react";

const OutputSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7 3.5H4a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1H9v1a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h3a2 2 0 012 2v1H7.5V4a.5.5 0 00-.5-.5zm3.293.793a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L11.586 9H7a1 1 0 010-2h4.586l-1.293-1.293a1 1 0 010-1.414z"
      fill="currentColor"
    />
  </svg>
);

export default OutputSmall;
