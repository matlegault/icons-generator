import * as React from "react";

const MinusSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
    <rect x={4} y={7} width={8} height={2} rx={0.5} fill="currentColor" />
  </svg>
);

export default MinusSmall;
