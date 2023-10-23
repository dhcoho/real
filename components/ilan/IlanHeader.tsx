import React from "react";

interface IlanHeaderProps {
  className?: string;
}

const IlanHeader: React.FC<IlanHeaderProps> = ({ className }) => {
  return (
    <div className={`w-full flex ${className}`}>
      <div className="w-full rounded-full border border-[#DEDEDE] items-center flex px-6 py-3 justify-between">
        {/* Go Back Button and İlan Title */}
        <div className="items-center gap-1 flex truncate">
          <button className="w-10 h-10 hover:bg-[#f3f3f3] items-center justify-center px-4 rounded-full min-[700px]:hidden active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="14"
              viewBox="0 0 7 14"
              fill="none"
              
            >
              <path
                d="M6.35209 13.3448C6.26878 13.3458 6.18618 13.3294 6.1096 13.2966C6.03302 13.2637 5.96416 13.2153 5.90744 13.1542L0.190563 7.43736C-0.0635209 7.18327 -0.0635209 6.78944 0.190563 6.53536L5.90744 0.831188C6.16152 0.577104 6.55535 0.577104 6.80944 0.831188C7.06352 1.08527 7.06352 1.4791 6.80944 1.73318L1.5372 6.99271L6.80944 12.2649C7.06352 12.519 7.06352 12.9129 6.80944 13.1669C6.6824 13.294 6.51724 13.3575 6.36479 13.3575L6.35209 13.3448Z"
                fill="#747474"
              />
            </svg>
          </button>
          <p className="text-[16px] text-[#A0A0A0] truncate max-w-[520px]">
            3+1 Açık Mutfak Birleşik bina ayrı girişli villa sahibinden satılık
            villa
          </p>
        </div>

        <div className="items-center flex gap-1">
          {/* Share Button */}
          <div className="w-full items-center cursor-pointer flex gap-2 hover:bg-[#f3f3f3] rounded-full px-3 active:bg-[#dfdfdf] select-none py-2 max-[550px]:py-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
            >
              <path
                d="M1 10V17C1 17.4641 1.18437 17.9092 1.51256 18.2374C1.84075 18.5656 2.28587 18.75 2.75 18.75H13.25C13.7141 18.75 14.1592 18.5656 14.4874 18.2374C14.8156 17.9092 15 17.4641 15 17V10M11.5 4.75L8 1.25M8 1.25L4.5 4.75M8 1.25V12.625"
                stroke="#A0A0A0"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[14px] text-[#A0A0A0] max-[550px]:hidden">Paylaş</p>
          </div>

          {/* Add Fav Button */}
          <div className="w-full items-center cursor-pointer flex gap-2 hover:bg-[#f3f3f3] rounded-full px-3 active:bg-[#dfdfdf] select-none py-2 max-[550px]:py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M11.5714 0.390625C10.0964 0.390625 8.805 1.02491 8 2.09705C7.195 1.02491 5.90357 0.390625 4.42857 0.390625C3.25445 0.391948 2.12879 0.858954 1.29856 1.68919C0.468329 2.51942 0.00132338 3.64507 0 4.8192C0 9.8192 7.41357 13.8663 7.72929 14.0335C7.8125 14.0782 7.90551 14.1017 8 14.1017C8.09449 14.1017 8.1875 14.0782 8.27071 14.0335C8.58643 13.8663 16 9.8192 16 4.8192C15.9987 3.64507 15.5317 2.51942 14.7014 1.68919C13.8712 0.858954 12.7456 0.391948 11.5714 0.390625ZM8 12.8763C6.69571 12.1163 1.14286 8.6542 1.14286 4.8192C1.14399 3.94812 1.49053 3.11304 2.10647 2.4971C2.72242 1.88115 3.55749 1.53462 4.42857 1.53348C5.81786 1.53348 6.98429 2.27348 7.47143 3.46205C7.51448 3.56686 7.58772 3.6565 7.68183 3.71959C7.77595 3.78268 7.8867 3.81636 8 3.81636C8.1133 3.81636 8.22405 3.78268 8.31817 3.71959C8.41228 3.6565 8.48552 3.56686 8.52857 3.46205C9.01571 2.27134 10.1821 1.53348 11.5714 1.53348C12.4425 1.53462 13.2776 1.88115 13.8935 2.4971C14.5095 3.11304 14.856 3.94812 14.8571 4.8192C14.8571 8.64848 9.30286 12.1156 8 12.8763Z"
                fill="#A0A0A0"
              />
            </svg>
            <p className="text-[14px] text-[#A0A0A0] max-[550px]:hidden">Kaydet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IlanHeader;
