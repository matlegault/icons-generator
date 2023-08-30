import * as React from "react";

const StoreSmall = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M13.385 2H2.615L1 5h.013c.119.9 1.032 1.6 2.14 1.6.644 0 1.221-.236 1.616-.61.395.374.972.61 1.616.61.643 0 1.22-.236 1.615-.61.395.374.972.61 1.615.61.644 0 1.221-.236 1.616-.61.395.374.972.61 1.615.61 1.109 0 2.022-.7 2.141-1.6H15l-1.615-3zM14 14V7.745A2.826 2.826 0 0112.821 8c-.603 0-1.159-.186-1.607-.5-.447.314-1.004.5-1.607.5S8.447 7.814 8 7.5c-.448.314-1.004.5-1.607.5s-1.16-.186-1.607-.5c-.448.314-1.004.5-1.607.5-.423 0-.823-.092-1.179-.255V14h4v-3a1 1 0 011-1h2a1 1 0 011 1v3h4z"
      fill="currentColor"
    />
  </svg>
);

export default StoreSmall;
