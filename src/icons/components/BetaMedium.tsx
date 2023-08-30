import * as React from "react";

const BetaMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.5 3a1 1 0 011-1h1a1 1 0 011 1v1h-3V3zM8 5a1 1 0 000 2h.275c.128 0 .225.115.225.243v.294c0 .932-.393 1.82-1.083 2.447l-3.51 3.19A2.773 2.773 0 005.774 18h8.454a2.773 2.773 0 001.865-4.825l-3.51-3.19A3.308 3.308 0 0111.5 7.536v-.294c0-.128.097-.243.225-.243H12a1 1 0 100-2H8zm1.3 6.4a1 1 0 01-.2 1.4l-.558.418a9.526 9.526 0 00-2.21 2.337 1 1 0 01-1.664-1.11 11.526 11.526 0 012.674-2.827L7.9 11.2a1 1 0 011.4.2z"
      fill="currentColor"
    />
  </svg>
);

export default BetaMedium;
