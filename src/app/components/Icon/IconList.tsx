export type IconNameProps = "atom" | "arrow-right" | "code" | "design" | "send";

type IconListType = {
  [key: string]: React.JSX.Element;
};

export const Icons: IconListType = {
  atom: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.8021 8.35853C26.1553 11.276 27 15.4125 27 20C27 28.8366 23.866 36 20 36C16.134 36 13 28.8366 13 20C13 11.1634 16.134 4 20 4C21.1245 4 22.1871 4.60609 23.1287 5.68316"
        stroke="#ECC4FF"
      />
      <path
        d="M30.432 29.9366C32.0362 29.7033 33.2416 29.0649 33.8564 28C35.7894 24.652 31.1527 18.3561 23.5 13.9378C15.8473 9.51954 8.07658 8.65195 6.14358 12C4.21059 15.348 8.84731 21.6439 16.5 26.0622C20.4057 28.3171 24.3421 29.6472 27.5175 29.964"
        stroke="#ECC4FF"
      />
      <path
        d="M7.55197 21.6126C9.40661 18.9964 12.5519 16.2172 16.5 13.9378C24.1527 9.51954 31.9234 8.65195 33.8564 12C35.7894 15.348 31.1527 21.6439 23.5 26.0622C15.8473 30.4805 8.07657 31.348 6.14357 28C5.55065 26.973 5.57586 25.6687 6.11662 24.2263"
        stroke="#ECC4FF"
      />
      <circle cx="20" cy="20" r="2" fill="#ECC4FF" />
      <circle cx="24" cy="7" r="1.5" stroke="#ECC4FF" />
      <circle cx="29" cy="30" r="1.5" stroke="#ECC4FF" />
      <circle cx="6.71503" cy="22.867" r="1.5" stroke="#ECC4FF" />
    </svg>
  ),
  "arrow-right": (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4486 8.66672H2V7.33338H11.4486L7.25334 3.13812L8.19615 2.19531L14.0009 8.00005L8.19615 13.8048L7.25334 12.862L11.4486 8.66672Z"
        fill="currentColor"
      />
    </svg>
  ),
  code: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5.5" y="5.5" width="29" height="29" rx="3.5" stroke="#ECC4FF" />
      <path
        d="M15 16L10.2481 19.1679C9.65434 19.5638 9.65434 20.4362 10.2481 20.8321L15 24"
        stroke="#ECC4FF"
        stroke-linecap="round"
      />
      <path
        d="M25 24L29.7519 20.8321C30.3457 20.4362 30.3457 19.5638 29.7519 19.1679L25 16"
        stroke="#ECC4FF"
        stroke-linecap="round"
      />
      <path d="M22 13L18 27" stroke="#ECC4FF" stroke-linecap="round" />
    </svg>
  ),
  design: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8.5" y="8.5" width="23" height="23" rx="3.5" stroke="#ECC4FF" />
      <rect x="18.5" y="17.5" width="10" height="10" rx="5" stroke="#ECC4FF" />
      <path
        d="M21.592 17.8719L17.8638 11.4808C17.4779 10.8193 16.5221 10.8193 16.1362 11.4808L10.8773 20.4961C10.4884 21.1628 10.9692 22 11.741 22H18.5"
        stroke="#ECC4FF"
      />
      <rect x="31" y="1" width="1" height="4" rx="0.5" fill="#ECC4FF" />
      <rect
        x="39"
        y="8"
        width="1"
        height="4"
        rx="0.5"
        transform="rotate(90 39 8)"
        fill="#ECC4FF"
      />
      <rect
        x="39"
        y="31"
        width="1"
        height="4"
        rx="0.5"
        transform="rotate(90 39 31)"
        fill="#ECC4FF"
      />
      <rect
        x="5"
        y="8"
        width="1"
        height="4"
        rx="0.5"
        transform="rotate(90 5 8)"
        fill="#ECC4FF"
      />
      <rect
        x="5"
        y="31"
        width="1"
        height="4"
        rx="0.5"
        transform="rotate(90 5 31)"
        fill="#ECC4FF"
      />
      <rect x="8" y="1" width="1" height="4" rx="0.5" fill="#ECC4FF" />
      <rect x="31" y="35" width="1" height="4" rx="0.5" fill="#ECC4FF" />
      <rect x="8" y="35" width="1" height="4" rx="0.5" fill="#ECC4FF" />
    </svg>
  ),
  send: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.30946 2.10378C2.50216 1.98149 2.74403 1.96628 2.95053 2.06346L14.2839 7.39679C14.5175 7.50675 14.6667 7.74176 14.6667 8C14.6667 8.25824 14.5175 8.49326 14.2839 8.60321L2.95053 13.9365C2.74403 14.0337 2.50216 14.0185 2.30946 13.8962C2.11675 13.7739 2 13.5616 2 13.3333L2 10.3128C1.99999 9.98105 1.99998 9.69385 2.01887 9.45627C2.03888 9.20471 2.08303 8.95476 2.2013 8.71148C2.33746 8.4314 2.53654 8.18819 2.78147 8C2.53654 7.81181 2.33746 7.5686 2.2013 7.28852C2.08303 7.04524 2.03888 6.7953 2.01887 6.54373C1.99998 6.30615 1.99999 6.01895 2 5.68724L2 2.66667C2 2.43844 2.11675 2.22607 2.30946 2.10378ZM3.33333 3.71719V5.6625C3.33333 6.02598 3.33382 6.25965 3.34801 6.43802C3.36155 6.6083 3.38451 6.67279 3.40043 6.70555C3.45951 6.82706 3.5541 6.92775 3.67168 6.99428C3.70339 7.01222 3.76632 7.03915 3.93542 7.06329C4.11256 7.08858 4.34575 7.10364 4.70851 7.12632L8.04159 7.33463V8.66537L4.70851 8.87369C4.34575 8.89636 4.11256 8.91142 3.93542 8.93671C3.76632 8.96085 3.70339 8.98778 3.67168 9.00572C3.5541 9.07225 3.45951 9.17294 3.40043 9.29445C3.38451 9.32721 3.36155 9.3917 3.34801 9.56198C3.33382 9.74035 3.33333 9.97402 3.33333 10.3375V12.2828L12.4343 8L3.33333 3.71719Z"
        fill="#ECC4FF"
      />
    </svg>
  ),
};
