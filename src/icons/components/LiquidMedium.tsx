import * as React from "react";

const LiquidMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M10.659 2.648c1.247 1.276 3.922 4.243 4.938 7.186a6 6 0 11-11.195 0c1.017-2.943 3.692-5.91 4.94-7.185a.914.914 0 011.316 0zm-.666 4.02l.215.276c.726.94 1.434 1.993 1.957 3.06.2.406.368.806.5 1.194.156.46.57.802 1.056.802.63 0 1.113-.564.928-1.167a11.698 11.698 0 00-.689-1.711c-.602-1.226-1.394-2.395-2.168-3.4a28.88 28.88 0 00-.29-.369A.946.946 0 0010.76 5c-.84 0-1.29 1.01-.768 1.669z"
      fill="currentColor"
    />
  </svg>
);

export default LiquidMedium;
