import React from "react";

interface IlanInfoProps {
  className?: string;
  classs?: string
}

const IlanInfo: React.FC<IlanInfoProps> = ({ className, classs }) => {
  return (
    <section className={`w-full ${classs}`}>
      <div
        className={`flex flex-col border px-4 py-1 rounded-xl w-full ${className}`}
      >
        {/* Mahhale Ve Fiyat */}
        <div className="flex justify-between items-center border-b border-dashed w-full py-4 ">
          {/* İl İlçe Mah. */}
          <div className="flex gap-2 items-center">
            <p className="text-[12px] font-semibold">
              <span>İstanbul</span>/<span>Karşıyaka</span>
            </p>
            <div className="w-[1px] h-3 bg-slate-200"></div>
            <p className="text-[11px] font-semibold text-[#6969699">
              Hisar mah.
            </p>
          </div>

          {/* Fiyat */}
          <div className="font-bold">
            <span>4,310.000</span>₺
          </div>
        </div>
        {/* İlan Tarihi */}
        <div className="flex justify-between items-center border-b border-dashed w-full py-4 ">
          {/* Tarih */}
          <div className="flex gap-2 items-center">
            <p className="text-[15px] text-[#797979]">
              <span>İlan Tarihi</span>
            </p>
          </div>

          {/* Value */}
          <div className="font-bold text-[#696969] text-[13px]">
            <span>2023/18/05</span>
          </div>
        </div>
        {/* Yapı Tipi */}
        <div className="flex justify-between items-center border-b border-dashed w-full py-4 ">
          {/* Yapi Tipi */}
          <div className="flex gap-2 items-center">
            <p className="text-[15px] text-[#797979]">
              <span>Yapı Tipi</span>
            </p>
          </div>

          {/* Value */}
          <div className="font-bold text-[#696969] text-[13px]">
            <span>Villa</span>
          </div>
        </div>

        {/* Daire Arsa Veya Villa Alanı  */}
        <div className="flex justify-between items-center border-b border-dashed w-full py-4 ">
          {/* Alan */}
          <div className="flex gap-2 items-center">
            <p className="text-[15px] text-[#797979]">
              <span>Alanı</span>
            </p>
          </div>

          {/* Value */}
          <div className="font-bold text-[#696969] text-[13px]">
            <span>65</span> m²
          </div>
        </div>

        {/* Oda Sayısı  */}
        <div className="flex justify-between items-center border-b border-dashed w-full py-4 ">
          {/* Oda sayısı */}
          <div className="flex gap-2 items-center">
            <p className="text-[15px] text-[#797979]">
              <span>Oda sayısı</span>
            </p>
          </div>

          {/* Value */}
          <div className="font-bold text-[#696969] text-[13px]">
            <span>3</span>+<span>1</span>
          </div>
        </div>
        {/* Tapu Durumu  */}
        <div className="flex justify-between items-center border-b border-dashed w-full py-4 ">
          {/* Tapu Durumu */}
          <div className="flex gap-2 items-center">
            <p className="text-[15px] text-[#797979]">
              <span>Tapu Durumu</span>
            </p>
          </div>

          {/* Value */}
          <div className="font-bold text-[#696969] text-[13px]">
            <span>Kat irtifaklı</span>
          </div>
        </div>
        {/* Bina Yaşı  */}
        <div className="flex justify-between items-center border-b border-dashed w-full py-4 ">
          {/* Bina Yaşı */}
          <div className="flex gap-2 items-center">
            <p className="text-[15px] text-[#797979]">
              <span>Bina Yaşı</span>
            </p>
          </div>

          {/* Value */}
          <div className="font-bold text-[#696969] text-[13px]">
            <span>0</span> Yaşında
          </div>
        </div>
        {/* Banyo/Wc  */}
        <div className="flex justify-between items-center border-b border-dashed w-full py-4 ">
          {/* Banyo/Wc */}
          <div className="flex gap-2 items-center">
            <p className="text-[15px] text-[#797979]">
              <span>Banyo/Wc</span>
            </p>
          </div>

          {/* Value */}
          <div className="font-bold text-[#696969] text-[13px]">
            <span>3</span>/<span>2</span>
          </div>
        </div>
        {/* Kullanım Durumu  */}
        <div className="flex justify-between items-center border-b border-dashed w-full py-4 ">
          {/* Kullanım Durumu */}
          <div className="flex gap-2 items-center">
            <p className="text-[15px] text-[#797979]">
              <span>Kullanım Durumu</span>
            </p>
          </div>

          {/* Value */}
          <div className="font-bold text-[#696969] text-[13px]">
            <span>Boş</span>
          </div>
        </div>
        {/* Eşyalı */}
        <div className="flex justify-between items-center w-full py-4 ">
          {/* Eşyalı */}
          <div className="flex gap-2 items-center">
            <p className="text-[15px] text-[#797979]">
              <span>Eşyalı</span>
            </p>
          </div>

          {/* Value */}
          <div className="font-bold text-[#696969] text-[13px]">
            <span>Hayır</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IlanInfo;
