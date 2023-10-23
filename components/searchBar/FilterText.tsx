import React, { useState } from "react";
import Button from "../ux/button";

const FilterText: React.FC = () => {
  const [activeData, setActiveData] = useState<number>(1); // Başlangıçta ilk düğme aktif

  const handleButtonClick = (buttonIndex: number) => {
    setActiveData(buttonIndex);
  };

  return (
    <div className="flex items-center gap-1 max-[900px]:hidden">
      <Button
        click={() => handleButtonClick(1)}
        type="button"
        theme="custom"
        round="none"
        className={`${
          activeData === 1 ? "border-b-4 border-blue-500 text-blue-500" : ""
        } text-[#A6A6A6] h-full px-10 text-center items-center justify-center text-[16px]`}
      >
        Tüm İlanlar
      </Button>
      <Button
        click={() => handleButtonClick(2)}
        type="button"
        theme="custom"
        round="none"
        className={`${
          activeData === 2 ? "border-b-4 border-blue-500 text-blue-500" : ""
        } text-[#A6A6A6] h-full px-10 text-center items-center justify-center text-[16px]`}
      >
        En Çok Beğenilenler
      </Button>
      <Button
        click={() => handleButtonClick(3)}
        type="button"
        theme="custom"
        round="none"
        className={`${
          activeData === 3 ? "border-b-4 border-blue-500 text-blue-500" : ""
        } text-[#A6A6A6] h-full px-10 text-center items-center justify-center text-[16px]`}
      >
        En Yeni İlanlar
      </Button>
    </div>
  );
};

export default FilterText;
