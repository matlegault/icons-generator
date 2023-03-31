import * as React from "react";

const LiquidSandboxSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3 2.5h10a.5.5 0 01.5.5v3.593c.252.309.541.689.831 1.123.223.332.453.707.669 1.116V3a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2h5.954a3.99 3.99 0 01-.803-1.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5zm9.706 8.006c.136.239.233.477.274.693l.02.208a.484.484 0 00.012.108.5.5 0 00.419.388.5.5 0 00.57-.495 2.205 2.205 0 00-.052-.46 3.382 3.382 0 00-.392-.967 4.773 4.773 0 00-.703-.927.5.5 0 00-.708.707c.139.139.362.405.547.723l.013.022zM15 12.408c0-.616-.124-1.23-.321-1.816a8.455 8.455 0 00-.423-1.017c-.214-.438-.457-.85-.702-1.222l-.012-.018-.011-.018-.006-.008-.02-.029-.005-.008a14.062 14.062 0 00-1.164-1.504.445.445 0 00-.672 0C10.88 7.648 9 10.01 9 12.408a3 3 0 006 0zM4.5 4a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zM4 8.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z"
      fill="currentColor"
    />
  </svg>
);

export default LiquidSandboxSmall;
