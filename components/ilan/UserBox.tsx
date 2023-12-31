import React from "react";
import Logo from "../ui/Logo";

interface UserBoxProps {
  className?: string;
}

const UserBox: React.FC<UserBoxProps> = ({ className }) => {
  return (
    <section
      className={`w-full max-w-[350px] max-[700px]:max-w-full justify-center h-full items-center ${className}`}
    >
      <div className="border border-[#AEAEAE] px-4 py-3 flex min-[700px]:flex-col gap-3 justify-between items-center rounded-xl w-full place-items-center">
        {/* User Profile  and Share Button */}
        <div className="w-full flex items-center gap-4">
          {/* User Profile*/}
          <div className="border border-[#BCBCBC] py-1 px-2 w-full rounded-xl">
            <Logo href="/" className=" py-1 px-3 rounded-full" round="xl">
              <p className="text-[#555555] text-[14px] ">Test</p>
            </Logo>
          </div>
          {/* Share Button*/}
          <div className="h-9 w-9 p-2 cursor-pointer active:scale-95 items-center justify-center bg-black rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
            >
              <path
                d="M1 10V17C1 17.4641 1.18437 17.9092 1.51256 18.2374C1.84075 18.5656 2.28587 18.75 2.75 18.75H13.25C13.7141 18.75 14.1592 18.5656 14.4874 18.2374C14.8156 17.9092 15 17.4641 15 17V10M11.5 4.75L8 1.25M8 1.25L4.5 4.75M8 1.25V12.625"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Contact İnfo */}
        <div className="w-full items-center h-full flex min-[700px]:flex-col justify-center mt-4 gap-4 ">
          {/* Ara */}
          <div className="border border-[#BCBCBC] w-full items-center flex rounded-xl px-3 text-center py-3 justify-center gap-3 cursor-pointer active:scale-95 select-none hover:bg-slate-50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M13.5303 10.2289L11.4094 9.98677C11.16 9.95748 10.9072 9.98509 10.67 10.0675C10.4328 10.15 10.2174 10.2851 10.0399 10.4627L8.50351 11.9992C6.13306 10.7936 4.20634 8.86686 3.00077 6.49641L4.54554 4.95163C4.9046 4.59258 5.07995 4.09157 5.0215 3.58221L4.77935 1.47798C4.73201 1.07064 4.53652 0.69493 4.23011 0.422391C3.92369 0.149852 3.52775 -0.000486191 3.11767 1.18128e-06H1.6731C0.72953 1.18128e-06 -0.0553836 0.784914 0.00306741 1.72848C0.445625 8.8595 6.14877 14.5543 13.2714 14.9969C14.215 15.0553 14.9999 14.2704 14.9999 13.3268V11.8822C15.0083 11.0389 14.3737 10.3291 13.5303 10.2289Z"
                fill="#787878"
              />
            </svg>
            <p className="text-[#555] max-[700px]:hidden">Ara</p>
          </div>
          {/* Mesaj At */}

          <div className="border border-[#BCBCBC] w-full items-center flex rounded-xl px-3 text-center py-3 justify-center gap-3 cursor-pointer active:scale-95 select-none hover:bg-slate-50 max-[450px]:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M8.01713e-06 7.5C8.01713e-06 3.35775 3.35776 0 7.5 0C11.6423 0 15 3.35775 15 7.5C15 11.6422 11.6423 15 7.5 15C6.25133 15.0018 5.02211 14.6906 3.92476 14.0947L0.836633 14.973C0.342008 15.1136 -0.114742 14.6565 0.0258829 14.1622L0.904132 11.073C0.309018 9.97622 -0.00182008 8.74782 8.01713e-06 7.5ZM4.50001 6.09375C4.50001 6.3525 4.71001 6.5625 4.96876 6.5625H10.0313C10.0928 6.5625 10.1538 6.55037 10.2106 6.52681C10.2675 6.50326 10.3192 6.46873 10.3627 6.4252C10.4062 6.38168 10.4408 6.33 10.4643 6.27313C10.4879 6.21626 10.5 6.1553 10.5 6.09375C10.5 6.03219 10.4879 5.97123 10.4643 5.91436C10.4408 5.85749 10.4062 5.80582 10.3627 5.76229C10.3192 5.71876 10.2675 5.68423 10.2106 5.66068C10.1538 5.63712 10.0928 5.625 10.0313 5.625H4.96876C4.71001 5.625 4.50001 5.835 4.50001 6.09375ZM4.96876 8.43749C4.84443 8.43749 4.72521 8.48688 4.6373 8.57479C4.54939 8.6627 4.50001 8.78192 4.50001 8.90624C4.50001 9.03056 4.54939 9.14979 4.6373 9.2377C4.72521 9.32561 4.84443 9.37499 4.96876 9.37499H8.53125C8.65557 9.37499 8.7748 9.32561 8.86271 9.2377C8.95062 9.14979 9 9.03056 9 8.90624C9 8.78192 8.95062 8.6627 8.86271 8.57479C8.7748 8.48688 8.65557 8.43749 8.53125 8.43749H4.96876Z"
                fill="#787878"
              />
            </svg>
            <p className="text-[#555] max-[700px]:hidden">Mesaj At</p>
          </div>

          {/* Whatsapp */}

          <div className="border border-[#BCBCBC] w-full items-center flex rounded-xl px-3 text-center py-3 justify-center gap-3 cursor-pointer active:scale-95 select-none hover:bg-slate-50 max-[375px]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M13.6683 2.33975C12.9312 1.59516 12.0532 1.00481 11.0855 0.603104C10.1179 0.201402 9.07989 -0.0036021 8.03216 4.78952e-05C3.64221 4.78952e-05 0.0643217 3.57794 0.0643217 7.96789C0.0643217 9.37492 0.434171 10.7418 1.12563 11.9478L0 16.0804L4.22111 14.9709C5.38693 15.6061 6.69749 15.9438 8.03216 15.9438C12.4221 15.9438 16 12.3659 16 7.97593C16 5.84527 15.1719 3.84326 13.6683 2.33975ZM8.03216 14.593C6.84221 14.593 5.67638 14.2714 4.65528 13.6684L4.41407 13.5237L1.90553 14.183L2.57286 11.7387L2.41206 11.4895C1.75095 10.4338 1.39991 9.21351 1.39899 7.96789C1.39899 4.31764 4.37387 1.34276 8.02412 1.34276C9.79296 1.34276 11.4573 2.03422 12.7035 3.28849C13.3206 3.90273 13.8096 4.63334 14.1422 5.43798C14.4748 6.24261 14.6444 7.10526 14.6412 7.97593C14.6573 11.6262 11.6824 14.593 8.03216 14.593ZM11.6663 9.64025C11.4653 9.54377 10.4844 9.06135 10.3075 8.98899C10.1226 8.92467 9.99397 8.89251 9.85729 9.08547C9.7206 9.28648 9.34271 9.73673 9.23015 9.86537C9.11759 10.0021 8.99698 10.0181 8.79598 9.91361C8.59497 9.81713 7.95176 9.60005 7.19598 8.92467C6.601 8.39402 6.20703 7.74276 6.08643 7.54176C5.97387 7.34075 6.07035 7.23623 6.17487 7.13171C6.26332 7.04326 6.37588 6.89854 6.47236 6.78598C6.56884 6.67341 6.60905 6.58497 6.67337 6.45633C6.73769 6.31964 6.70553 6.20708 6.65729 6.1106C6.60904 6.01412 6.20703 5.03321 6.04623 4.6312C5.88543 4.24527 5.71658 4.29351 5.59598 4.28547H5.21005C5.07337 4.28547 4.86432 4.33372 4.6794 4.53472C4.50251 4.73573 3.98794 5.21814 3.98794 6.19904C3.98794 7.17995 4.70352 8.12869 4.8 8.25733C4.89648 8.39402 6.20703 10.4041 8.201 11.2644C8.67538 11.4734 9.04523 11.594 9.33467 11.6825C9.80904 11.8352 10.2432 11.8111 10.5889 11.7629C10.9749 11.7066 11.7709 11.2804 11.9317 10.8141C12.1005 10.3478 12.1005 9.95382 12.0442 9.86537C11.9879 9.77693 11.8673 9.73673 11.6663 9.64025Z"
                fill="#787878"
              />
            </svg>
            <p className="text-[#555] max-[700px]:hidden">Whatsapp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBox;
