import * as React from "react";

const GraphQLSmallLight = (props: React.SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.24 5.702c.277 0 .546-.04.799-.114l8.617 14.927c-.386.37-.668.846-.799 1.383H7.621a2.848 2.848 0 00-.798-1.383L15.44 5.588c.254.074.522.114.8.114zm-8.619 17.55c-.01.04-.02.08-.032.12l6.59 3.806a2.843 2.843 0 012.061-.88c.81 0 1.541.338 2.06.88l6.59-3.804a2.742 2.742 0 01-.033-.123H7.621zm5.881 5.098l-6.59-3.805a2.851 2.851 0 11-2.736-4.74v-7.61a2.852 2.852 0 112.736-4.74l6.59-3.805a2.851 2.851 0 115.475 0l6.59 3.805a2.851 2.851 0 112.737 4.74v7.61a2.852 2.852 0 11-2.737 4.74l-6.59 3.805A2.854 2.854 0 0116.24 32a2.85 2.85 0 01-2.737-3.65zM5.53 12.195a2.852 2.852 0 002.06-3.568l6.591-3.805c.03.03.059.06.09.089L5.65 19.838a2.761 2.761 0 00-.122-.033v-7.61zm21.3 7.642c.04-.012.08-.023.122-.033v-7.608a2.852 2.852 0 01-2.061-3.57L18.3 4.823l-.09.09 8.618 14.925z"
      fill="#E10098"
    />
  </svg>
);

export default GraphQLSmallLight;