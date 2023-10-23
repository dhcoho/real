import Image from "next/image";
import React from "react";

interface UserProfileProps {
  width: number;
  height: number;
  default?: boolean;
  className?: string
  children: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  width,
  height,
  default: isDefault,
  children,
  className,
}) => {
  const meshGradientColors = [
    "#FAD02E",
    "#F2711C",
    "#FB4743",
    "#8A30B8",
    "#3249D9",
    "#00AEEF",
    "#33CC99",
    "#FFD700",
    "#FF69B4",
    "#FF6347",
    "#1179FC",
    "#DC82FC",
    "#FCBA11",
  ];

  const meshRandomLeg = [
    "20deg",
    "45deg",
    "55deg",
    "50deg",
    "35deg",
    "25deg",
  ];

  const meshYuzde = [
    "35%",
    "60%",
    "55%",
    "70%",
    "20%",
    "25%",
    "75%",
  ]
  
  
  const getRandomColor = () => {
    return meshGradientColors[
      Math.floor(Math.random() * meshGradientColors.length)
    ];
  };

  const getRandomLg = () => {
    return  meshRandomLeg[
        Math.floor(Math.random() * meshRandomLeg.length)
    ]
  }

  const getMeshYuzde = () => {
    return  meshYuzde[
        Math.floor(Math.random() * meshYuzde.length)
    ]
  }

  const backgroundStyle = {
    backgroundImage: isDefault
      ? `url("https://www.gravatar.com/avatar/${children}?d=identicon")`
      : `linear-gradient(${getRandomLg()}, ${getRandomColor()} ${getMeshYuzde()}, ${getRandomColor()} ${getMeshYuzde()})`, // Örnek arka plan renkleri
  };

  console.log(`Random Lg: ${getRandomLg()} \n Random Color:${getRandomColor()} `)
  const getInitials = (name: string): string => {
    const names = name.split(" ");
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    const initials = names[0].charAt(0) + names[names.length - 1].charAt(0);
    return initials.toUpperCase();
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full select-none ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...backgroundStyle,
      }}
    >
      {isDefault ? (
        <Image
          src={`https://www.gravatar.com/avatar/${children}?d=identicon`}
          alt="Profile"
          width={width}
          height={height}
          className="rounded-full"
        />
      ) : (
        <div
          className="flex items-center justify-center text-white font-medium"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {getInitials(children)}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
