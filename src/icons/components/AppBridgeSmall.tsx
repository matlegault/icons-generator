import * as React from "react";

const AppBridgeSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M9.466 8.314L8 3.55 6.534 8.314c.484-.041.974-.064 1.466-.064s.982.023 1.466.064zm1.632.205L9.195 2.333c-.362-1.177-2.028-1.177-2.39 0L4.902 8.519c-1.196.2-2.284.485-3.14.77a.75.75 0 00.475 1.423 19.06 19.06 0 012.167-.575l-1.12 3.642a.75.75 0 001.433.442L6.056 9.87c.635-.076 1.29-.12 1.944-.12.653 0 1.309.044 1.944.12l1.34 4.35a.75.75 0 101.433-.44l-1.12-3.643c.814.167 1.555.371 2.166.575a.75.75 0 00.474-1.423 21.081 21.081 0 00-3.139-.77z"
      fill="currentColor"
    />
  </svg>
);

export default AppBridgeSmall;
