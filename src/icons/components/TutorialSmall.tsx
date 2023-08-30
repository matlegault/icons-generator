import * as React from "react";

const TutorialSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7 3.796a.705.705 0 00-.296-.592 3.827 3.827 0 00-4.323.031l-.044.03A.784.784 0 002 3.91v8.115c0 .419.465.669.814.44a3.813 3.813 0 014.622.329l.045.04a.786.786 0 001.042 0l.047-.042a3.807 3.807 0 014.617-.328c.349.23.813-.02.813-.438V3.963a.886.886 0 00-.38-.727 3.822 3.822 0 00-4.325-.029.705.705 0 00-.295.591v5.15a1 1 0 11-2 0V3.795z"
      fill="currentColor"
    />
  </svg>
);

export default TutorialSmall;
