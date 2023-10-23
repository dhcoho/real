"use client"

import React, { useState } from "react";
import Button from "../ux/button";

const IlanDescAndMap = () => {
    const [activeButton, setActiveButton] = useState<number>(1)

    const handleButtonClick = (buttonIndex: number) => {
        setActiveButton(buttonIndex)
    }

  return (
    <div className="w-full items-center pb-5 flex flex-col gap-4 mt-5">
      {/* Buttons */}
      <div className="w-full rounded-full border border-[#DEDEDE] items-center flex px-6 justify-start gap-1 max-[525px]:justify-center  max-[525px]:text-center">
        <Button
          click={() => handleButtonClick(1)}
          type="button"
          theme="custom"
          round="none"
          className={`${
            activeButton === 1 ? "border-b-4 border-blue-500 text-blue-500" : ""
          } text-[#A6A6A6] h-full px-6 py-5  text-center items-center justify-center text-[16px] `}
        >
          Açıklama
        </Button>
        <Button
          click={() => handleButtonClick(2)}
          type="button"
          theme="custom"
          round="none"
          className={`${
            activeButton === 2 ? "border-b-4 border-blue-500 text-blue-500" : ""
          } text-[#A6A6A6] h-full px-6 py-5  text-center items-center justify-center text-[16px]`}
        >
          Haritalar
        </Button>
      </div>

      {/* Result Desc. */}
      <div className={`w-full rounded-xl text-[#4B4B4B] border border-[#DEDEDE] items-start flex px-6  py-5 justify-start gap-1 ${activeButton === 2 && "h-[350px]"}`}>
        {/* Result Desc. */}
       {activeButton === 1 && <p>Hello Bro How Are you okey Bro No problem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolorum rem deserunt eius quasi accusantium nam, error animi possimus tenetur omnis, accusamus nemo earum ullam quo quisquam non magnam ab laboriosam saepe! Recusandae sapiente dolores quis, minus laudantium aut cum cupiditate. Repellendus delectus, aliquam unde quod odit iste sapiente minima?0</p>}
        {/* Result Desc. */}
        {activeButton === 2 && <p>Hello Bro You Are Welcome Map Area</p>}
      </div>
      

    </div>
  );
};

export default IlanDescAndMap;
