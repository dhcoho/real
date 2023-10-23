import React from "react";
import { Ilans } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";

const formatNumber = (number: number): string => {
  return new Intl.NumberFormat("tr-TR").format(number);
};

const ilanData = () => {

  const duzeltilmisURL = (url: string): string => {
   const urlD = url.replace(/ /g, "-");
    return urlD.replace("--", "-");
  };
  
  return (
    //Ilans Map
    <div className="w-full items-center grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 max-[760px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:px-5 gap-5">
      {Ilans.map((item) => (
        <Link href={duzeltilmisURL(`/ilan/${item.url}`)}
          className="max-w-[700px] items-center justify-center p-2 py-3 border rounded-xl border-[#BCBCBC] flex flex-col cursor-pointer active:bg-[#f4f4f4]"
          key={item.id}
        >
          <Image
            src={item.imgUrl}
            alt={item.desc}
            width={300}
            height={400}
            className="rounded-lg w-full h-full"
          />
          <div className="flex justify-between w-full items-center mt-2">
            {/* <Image
              src={item.userProfileImage}
              alt="hepsiPlus"
              width={25}
              height={25}
              className="cursor-pointer rounded-full"
            /> */}

            <div>
              Test user
            </div>
            <p className="text-[14px] border rounded-full py-1.5 px-3">
              {" "}
              {formatNumber(item.price)}{" TL"}
            </p>
          </div>
          <p className="w-full flex flex-col mt-1 font-normal text-[#B0B0B0]">
            {item.desc.length > 50
              ? `${item.desc.substring(0, 50)}...`
              : item.desc}
          </p>
          <div className=" w-full flex items-center justify-center mt-3">
            {item.details?.map((det, index) => (
              <div className="flex gap-2 items-center" key={index}>
                <p className="shadow py-1 px-3 rounded-full text-sm text-gray-400 " >
                  {det.il}/{det.ilçe}
                </p>
                <p className="shadow py-1 px-3 rounded-full text-sm text-gray-400 " >
                  {det.metreKare}
                </p>
                <p className="shadow py-1 px-3 rounded-full text-sm text-gray-400 " >
                  {det.odaCount}+{det.salonCount}
                </p>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ilanData;
