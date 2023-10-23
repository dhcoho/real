"use client"

import React from "react";

//components
import IlanHeader from "@/components/ilan/IlanHeader";
import ImageSlider from "@/components/ilan/ImageSlider";
import IlanInfo from "@/components/ilan/IlanInfo";
import Header from "@/components/header/Header";
import UserBox from "@/components/ilan/UserBox";
import IlanDescAndMap from "@/components/ilan/IlanDescAndMap";

const IlanViewer = () => {
  return (
    <>
      <div className="max-[700px]:hidden">
        {/* <Header /> */}
      </div>
      <section className="w-full px-10 max-[750px]:px-0 items-center flex flex-col  justify-center h-screen">
        <div className=" w-full h-screen items-center flex flex-col px-2 max-[750px]:px-0  mt-4">
          {/* Ilan Header */}
          <IlanHeader className="max-[750px]:px-3" />
          {/* İlan info */}
          <div className="w-full items-start justify-start flex gap-4 mt-4 max-[1025px]:flex-col">
            {/* İmages */}
            <ImageSlider className="max-[1025px]:max-w-full" />
            {/* İlan Detay */}
            <div className="w-full justify-start h-full flex gap-4  max-[700px]:flex-col-reverse">
              {/* İlan info */}
              <IlanInfo classs="max-[750px]:px-5" />
              {/* User Info Box */}
              <UserBox className="max-[750px]:px-5" />
            </div>
          </div>

          {/* İlan Desc. and map */}
          <div className="w-full max-[750px]:px-5">
            <IlanDescAndMap />
          </div>

        </div>
      </section>
    </>
  );
};

export default IlanViewer;
