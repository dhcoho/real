import React from "react";

interface LogoSvgProps {
  style?: React.CSSProperties; // Change the type to React.CSSProperties
  h?: number;
  w?: number;
  className?: string;
  classD?: string
  rounded?: "md" | "lg" | "xl" | "2xl" | "full";
}

const LogoSvg: React.FC<LogoSvgProps> = ({ w, h, className, classD, rounded }) => {
  const style: React.CSSProperties = { maskType: "alpha" }; // Use the correct property name

  return (
    <div className={classD}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w || "35"}
        height={h || "35"}
        viewBox="0 0 35 35"
        fill="none"
        className={`${className} rounded-${rounded}`}
      >
        <mask
          id="mask0_2509_1707"
          style={style}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="35"
          height="35"
        >
          <path
            d="M0 14C0 6.26801 6.26801 0 14 0H21C28.732 0 35 6.26801 35 14V21C35 28.732 28.732 35 21 35H14C6.26801 35 0 28.732 0 21V14Z"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_2509_1707)">
          <g filter="url(#filter0_f_2509_1707)">
            <path
              d="M28.2894 1.92756C28.2894 6.74508 21.1341 13.3715 8.47672 14.8826C4.99876 15.2978 1.80021 16.9555 -1.47207 18.2049C-10.5481 21.67 -12.8398 4.70845 -12.8398 -0.0530834C-12.8398 -5.52249 0.981957 -9.16406 5.15701 -9.16406C9.33206 -9.16406 28.2894 -3.54184 28.2894 1.92756Z"
              fill="#0094FF"
            />
            <path
              d="M47.7929 0.739177C47.7929 4.48608 46.9117 9.60608 45.0143 12.4594C43.5379 14.6797 40.5948 15.5589 38.0277 16.2796C24.6815 20.0266 9.84375 1.57903 9.84375 -3.42018C9.84375 -8.88959 36.0583 -9.16406 40.2333 -9.16406C44.4084 -9.16406 47.7929 -4.73023 47.7929 0.739177Z"
              fill="#0F00BF"
            />
            <path
              d="M31.3881 5.57682C32.239 7.89256 20.7522 20.8346 14.7666 24.6089C8.78094 28.3832 -8.46441 36.2818 -9.31527 33.9661C-10.1661 31.6503 3.32345 14.9148 9.30911 11.1405C15.2948 7.36621 30.5373 3.26109 31.3881 5.57682Z"
              fill="#0094FF"
            />
            <path
              d="M47.7932 24.5111C47.7932 29.9805 44.4087 34.4143 40.2337 34.4143C36.0586 34.4143 23.0684 38.3983 23.0684 32.9289C23.0684 27.4594 36.0586 9.65625 40.2337 9.65625C44.4087 9.65625 47.7932 19.0417 47.7932 24.5111Z"
              fill="#0094FF"
            />
            <path
              d="M31.0115 24.5048C31.0115 29.9742 14.4456 46.6699 10.2706 46.6699C6.09554 46.6699 -0.615234 37.1854 -0.615234 31.716C-0.615234 26.2466 19.2768 14.6016 23.4519 14.6016C27.6269 14.6016 31.0115 19.0354 31.0115 24.5048Z"
              fill="black"
            />
          </g>
        </g>
        <path
          d="M10.8887 21.776V10.1094H13.8276V16.5439H19.6164V13.3266H22.5553V25.6946H19.6164V19.2156H13.8276L13.8276 21.776H10.8887Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_f_2509_1707"
            x="-22.8398"
            y="-19.1641"
            width="80.6328"
            height="75.8359"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="5"
              result="effect1_foregroundBlur_2509_1707"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default LogoSvg;
