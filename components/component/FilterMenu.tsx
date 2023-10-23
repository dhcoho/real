import React, { useEffect, useState } from "react";
import Checkbox from "../ui/Checkbox";
import { FilterData } from "@/constants/index";
import Button from "../ux/button";

const FilterMenu = () => {
  const [fSticky, setFSticky] = useState(false)

  const handlefScroll = () => {
    if(window.scrollY > 0) {
      setFSticky(true)
    } else {
      setFSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handlefScroll);
    return () => {
      window.removeEventListener("scroll", handlefScroll)
    }
  }, [])

  return (
    <div className={`${fSticky ? "min-[600px]:sticky min-[600px]:top-[65px] left-6  max-[600px]:fixed max-[600px]:bottom-0 " : ""} border h-auto px-5 py-2 min-w-[225px]  rounded-xl max-[600px]:rounded-none bg-white max-[600px]:hidden max-[600px]:z-30 max-[600px]:rounded-t-xl max-[600px]:bottom-0
    max-[600px]:left-0 max-[600px]:right-0
    `}>
      {/* Oda sayısı Filter */}
      {FilterData.map((item) => (
        <div
          className="w-full flex flex-col gap-3 justify-start mx-3 mt-4"
          key={item.name}
        >
          <p className="text-[16px] font-medium">{item.name}</p>
          <div className="flex flex-col max-[600px]:grid max-[600px]:grid-cols-4  gap-2">
            {item.value?.map((val) => (
              <Checkbox
                label={val.value}
                name={val.value}
                htmlFor={val.value}
                id={val.value}
                key={val.id}
                value={val.value}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Oda sayısı Filter */}
      <div className="mt-4 flex flex-col items-center justify-center gap-3">
        <Button type="button" theme="flash">Kaydet</Button>
        <Button type="button" theme="lion">Filitreleri Kaldır</Button>
      </div>
    </div>
  );
};

export default FilterMenu;
