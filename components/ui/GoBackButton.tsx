import React from "react";
import Button from "../ux/button";

interface GoBackButtonProps {
    className?: string;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({className}) => {
  return (
    <Button type="link" href="/" theme="custom" round="full" title="Go Home Page"  className={`rounded-full w-10 h-10 p-3.5 items-center justify-center hover:bg-[#f3f3f3] active:scale-95 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="15"
        viewBox="0 0 8 15"
        fill="none"
      >
        <path
          d="M7.14286 14.856C7.04918 14.8572 6.9563 14.8387 6.87018 14.8018C6.78407 14.7649 6.70664 14.7104 6.64286 14.6417L0.214286 8.21317C-0.0714286 7.92746 -0.0714286 7.4846 0.214286 7.19888L6.64286 0.784598C6.92857 0.498884 7.37143 0.498884 7.65714 0.784598C7.94286 1.07031 7.94286 1.51317 7.65714 1.79888L1.72857 7.71317L7.65714 13.6417C7.94286 13.9275 7.94286 14.3703 7.65714 14.656C7.51429 14.7989 7.32857 14.8703 7.15714 14.8703L7.14286 14.856Z"
          fill="#666666"
        />
      </svg>
    </Button>
  );
};

export default GoBackButton;
