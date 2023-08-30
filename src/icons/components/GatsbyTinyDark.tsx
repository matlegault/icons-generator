import * as React from "react";

const GatsbyTinyDark = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-14.286.114c0 1.543.629 3.143 1.829 4.343 1.2 1.2 2.8 1.771 4.4 1.829L1.714 8.114zm.172-1.486l7.485 7.486c2.8-.629 4.915-3.143 4.915-6.114h-4v1.143h2.743c-.4 1.714-1.658 3.143-3.315 3.714L3.143 6.286c.743-2 2.628-3.429 4.857-3.429 1.714 0 3.257.857 4.229 2.171l.857-.742A6.302 6.302 0 008 1.714c-2.971 0-5.486 2.114-6.114 4.914z"
      fill="#fff"
    />
  </svg>
);

export default GatsbyTinyDark;
