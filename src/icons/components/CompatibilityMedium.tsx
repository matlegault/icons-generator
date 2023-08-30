import * as React from "react";

const CompatibilityMedium = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8 17.261a.793.793 0 00-.521-.729 7.001 7.001 0 01-.315-.13.793.793 0 00-.884.146.739.739 0 01-1.045 0L3.45 14.766a.74.74 0 010-1.045.793.793 0 00.147-.885 6.927 6.927 0 01-.13-.314.794.794 0 00-.73-.521.739.739 0 01-.738-.739V8.74C2 8.33 2.33 8 2.739 8a.793.793 0 00.729-.521c.04-.106.084-.211.13-.315a.793.793 0 00-.146-.884.739.739 0 010-1.045L5.235 3.45a.739.739 0 011.045 0c.231.232.585.28.884.147.104-.046.209-.09.315-.13A.793.793 0 008 2.738C8 2.332 8.33 2 8.739 2h2.522c.408 0 .739.33.739.739 0 .327.216.611.521.729.106.04.211.084.314.13a.794.794 0 00.885-.147.739.739 0 011.045 0l1.784 1.784a.74.74 0 010 1.045.793.793 0 00-.147.884c.046.104.09.209.13.315a.793.793 0 00.73.521c.407 0 .738.33.738.739v2.522c0 .408-.33.739-.739.739a.793.793 0 00-.729.521c-.04.106-.084.211-.13.314a.794.794 0 00.146.885.739.739 0 010 1.045l-1.783 1.784a.739.739 0 01-1.045 0 .793.793 0 00-.884-.147c-.104.046-.209.09-.315.13a.793.793 0 00-.521.73c0 .407-.33.738-.739.738H8.74A.739.739 0 018 17.261zm5.375-10.58a.5.5 0 01.707 0l.707.708a.5.5 0 010 .707l-5.66 5.66a.5.5 0 01-.706 0l-1.06-1.061-2.126-2.125a.5.5 0 010-.707l.707-.707a.5.5 0 01.707 0l2.125 2.125 4.6-4.6z"
      fill="currentColor"
    />
  </svg>
);

export default CompatibilityMedium;