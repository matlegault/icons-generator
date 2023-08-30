import * as React from "react";

const LinkSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.177 3.227a3.25 3.25 0 014.596 4.596l-.53.53-.53.53a1.5 1.5 0 01-2.122 0l1.06-1.06.531-.53.53-.53a1.75 1.75 0 00-2.475-2.475l-.53.53-.53.53-1.06 1.061a1.5 1.5 0 010-2.121l.53-.53.53-.53zm-.354 9.546a3.25 3.25 0 01-4.596-4.596l.53-.53.53-.53a1.5 1.5 0 012.122 0l-1.06 1.06-.531.53-.53.53a1.75 1.75 0 102.475 2.475l.53-.53.53-.53 1.06-1.061a1.5 1.5 0 010 2.121l-.53.53-.53.531zm2.652-7.248a.75.75 0 00-1.06 0l-3.89 3.89a.75.75 0 001.06 1.06l3.89-3.89a.75.75 0 000-1.06z"
      fill="currentColor"
    />
  </svg>
);

export default LinkSmall;
