import React, { useEffect, useState } from "react";
import Checkbox from "../ui/Checkbox";
import { FilterData } from "@/constants/index";
import Button from "../ux/button";

const MenuFilterMenu = () => {


  return (
    <div className="fixed border  px-5 py-2 w-full  rounded-none bg-white min-[600px]:hidden z-50 rounded-t-xl bottom-0 left-0 right-0
    ">
      {/* Oda sayısı Filter */}
      {FilterData.map((item) => (
        <div
          className="w-full flex flex-col gap-3 justify-start mx-3 mt-4"
          key={item.name}
        >
          <p className="text-[16px] font-medium">{item.name}</p>
          <div className="flex-col grid grid-cols-4  gap-2">
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

export default MenuFilterMenu;
