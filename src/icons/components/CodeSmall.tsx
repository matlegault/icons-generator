import * as React from "react";

const CodeSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.913 2.974a.5.5 0 01.58-.406l.984.174a.5.5 0 01.406.579l-1.737 9.848a.5.5 0 01-.579.405l-.985-.173a.5.5 0 01-.405-.58l1.736-9.847zm-6.56 4.672a.5.5 0 000 .708l1.061 1.06 1.74 1.74c.21.21.552.21.763 0l.68-.68a.5.5 0 000-.706L3.827 8l1.768-1.768a.5.5 0 000-.707l-.707-.707a.5.5 0 00-.707 0L1.354 7.646zm12.304-1.06l1.06 1.06a.5.5 0 010 .708l-2.828 2.828a.5.5 0 01-.707 0l-.707-.707a.5.5 0 010-.707L12.243 8l-1.768-1.768a.5.5 0 010-.707l.679-.679a.54.54 0 01.763 0l1.74 1.74z"
      fill="currentColor"
    />
  </svg>
);

export default CodeSmall;
