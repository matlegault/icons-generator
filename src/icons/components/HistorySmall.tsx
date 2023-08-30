import * as React from "react";

const HistorySmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3.72 3.74l-.785-.786a.389.389 0 00-.657.208L1.68 6.549a.389.389 0 00.45.45L5.517 6.4a.389.389 0 00.207-.657l-.787-.788a4.302 4.302 0 11-.002 6.086l-.304-.304a.43.43 0 00-.608 0l-.609.608a.43.43 0 000 .608l.305.305a6.023 6.023 0 10.001-8.52zM8.75 6a.75.75 0 00-1.5 0v2c0 .199.079.39.22.53l1 1a.75.75 0 001.06-1.06l-.78-.78V6z"
      fill="currentColor"
    />
  </svg>
);

export default HistorySmall;
