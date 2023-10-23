import React from "react";

interface GradientDivProps {
  className: string;
  grad: 1 | 2;
}

const GradientDiv: React.FC<GradientDivProps> = ({ className, grad }) => {
  if (grad === 1) {
    return (
      <div className={className}>
        <svg
          width="327"
          height="262"
          viewBox="0 0 327 262"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_2553_1592)">
            <rect
              x="25"
              y="25"
              width="277"
              height="212"
              fill="url(#paint0_linear_2553_1592)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2553_1592"
              x="0"
              y="0"
              width="327"
              height="262"
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
                stdDeviation="12.5"
                result="effect1_foregroundBlur_2553_1592"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2553_1592"
              x1="25"
              y1="25"
              x2="307.103"
              y2="32.0224"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#14FF00" />
              <stop offset="1" stop-color="#65FFC8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <svg
          width="427"
          height="342"
          viewBox="0 0 427 342"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_2553_1626)">
            <rect
              x="25"
              y="25"
              width="377"
              height="292"
              fill="url(#paint0_linear_2553_1626)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2553_1626"
              x="0"
              y="0"
              width="427"
              height="342"
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
                stdDeviation="12.5"
                result="effect1_foregroundBlur_2553_1626"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2553_1626"
              x1="-44.745"
              y1="25"
              x2="304.985"
              y2="406.043"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1179FC" />
              <stop offset="1" stop-color="#DC82FC" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

};

export default GradientDiv;
