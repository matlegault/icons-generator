import * as React from "react";

const BetaSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M6.5 2a1 1 0 011-1h1a1 1 0 011 1v1h-3V2zM6 4a1 1 0 100 2h.275c.128 0 .225.115.225.243v.288c0 .934-.4 1.824-1.098 2.445l-2.707 2.406A2.07 2.07 0 004.07 15h7.86a2.07 2.07 0 001.375-3.618l-2.707-2.406A3.272 3.272 0 019.5 6.531v-.288c0-.128.097-.243.225-.243H10a1 1 0 100-2H6zm1.4 5.7a.5.5 0 01-.1.7l-.558.418a10.023 10.023 0 00-2.326 2.46.5.5 0 01-.832-.555 11.025 11.025 0 012.558-2.705L6.7 9.6a.5.5 0 01.7.1z"
      fill="currentColor"
    />
  </svg>
);

export default BetaSmall;
