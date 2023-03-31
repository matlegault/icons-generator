import * as React from "react";

const PrivacySmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2.013 4.499c-.018-.552.437-1 .98-1.098 1.62-.294 3.517-1.168 4.56-1.679.282-.138.612-.138.894 0 1.043.51 2.94 1.385 4.56 1.679.543.098.998.546.98 1.098-.085 2.663-.731 8.032-5.67 9.889a.907.907 0 01-.634 0c-4.939-1.857-5.585-7.226-5.67-9.89zM9.5 7a1.5 1.5 0 01-.75 1.3v1.45a.75.75 0 01-1.5 0V8.3A1.5 1.5 0 119.5 7z"
      fill="currentColor"
    />
  </svg>
);

export default PrivacySmall;
