import * as React from "react";

const GatsbyLargeLight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden={true}
    {...props}
  >
    <path
      d="M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32z"
      fill="#639"
    />
    <path
      d="M14.172 49.828c-4.8-4.8-7.315-11.2-7.315-17.371l24.915 24.686c-6.4-.229-12.8-2.515-17.6-7.315zm23.314 6.629L7.543 26.514C10.057 15.314 20.115 6.857 32 6.857c8.457 0 15.772 4.114 20.343 10.286l-3.428 2.971C45.029 14.857 38.857 11.428 32 11.428c-8.914 0-16.457 5.715-19.428 13.715l26.285 26.285c6.629-2.285 11.658-8 13.258-14.857H41.143V32h16c0 11.886-8.457 21.943-19.657 24.457z"
      fill="#fff"
    />
  </svg>
);

export default GatsbyLargeLight;
