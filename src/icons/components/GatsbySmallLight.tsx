import * as React from "react";

const GatsbySmallLight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden={true}
    {...props}
  >
    <path
      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z"
      fill="#639"
    />
    <path
      d="M7.085 24.914c-2.4-2.4-3.657-5.6-3.657-8.686l12.457 12.343c-3.2-.114-6.4-1.257-8.8-3.657zm11.657 3.314L3.771 13.257c1.257-5.6 6.285-9.829 12.228-9.829 4.229 0 7.886 2.057 10.172 5.143l-1.715 1.486C22.513 7.428 19.428 5.714 16 5.714c-4.457 0-8.228 2.857-9.714 6.857l13.143 13.143c3.314-1.143 5.828-4 6.628-7.429h-5.485V16h8c0 5.943-4.229 10.971-9.829 12.228z"
      fill="#fff"
    />
  </svg>
);

export default GatsbySmallLight;
