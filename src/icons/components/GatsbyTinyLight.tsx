import * as React from "react";

const GatsbyTinyLight = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M8 16A8 8 0 108 0a8 8 0 000 16z" fill="#639" />
    <path
      d="M3.543 12.457c-1.2-1.2-1.828-2.8-1.828-4.343l6.228 6.171c-1.6-.057-3.2-.628-4.4-1.828zm5.829 1.657L1.886 6.628c.629-2.8 3.143-4.914 6.115-4.914a6.302 6.302 0 015.085 2.572l-.857.742c-.971-1.314-2.514-2.171-4.228-2.171-2.229 0-4.115 1.429-4.858 3.429l6.572 6.571c1.657-.571 2.914-2 3.314-3.714h-2.743V8h4c0 2.971-2.114 5.486-4.914 6.114z"
      fill="#fff"
    />
  </svg>
);

export default GatsbyTinyLight;
