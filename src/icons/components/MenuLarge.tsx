import * as React from "react";

const MenuLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden={true}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.667 5C4.298 5 4 5.224 4 5.5v1c0 .276.298.5.667.5h14.666c.369 0 .667-.224.667-.5v-1c0-.276-.299-.5-.667-.5H4.667zM4 11.5c0-.276.298-.5.667-.5h14.666c.369 0 .667.224.667.5v1c0 .276-.299.5-.667.5H4.667C4.298 13 4 12.776 4 12.5v-1zm0 6c0-.276.298-.5.667-.5h14.666c.369 0 .667.224.667.5v1c0 .276-.299.5-.667.5H4.667C4.298 19 4 18.776 4 18.5v-1z"
      fill="currentColor"
    />
  </svg>
);

export default MenuLarge;
