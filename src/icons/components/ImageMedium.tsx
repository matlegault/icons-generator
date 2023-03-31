import * as React from "react";

const ImageMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm7.5 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4.872 7.193l2.47-3.176a.5.5 0 01.795.007L9 13l2.551-3.827a.5.5 0 01.85.03l3.171 5.549a.5.5 0 01-.434.748H5.022a.5.5 0 01-.394-.807z"
      fill="currentColor"
    />
  </svg>
);

export default ImageMedium;
