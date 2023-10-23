"use client";

import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Button from "../ux/button";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import UserProfile from "../ux/userProfile";

interface NavButtonsProps {
  className?: string;
}

const NavButtons: React.FC<NavButtonsProps> = ({ className }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const { data:session } = useSession();

  console.log(session);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-3 ">
        {Boolean(session) === true ? (
           <Menu as="div" className="relative inline-block text-left">
           <div>
             <Menu.Button>
              
          <UserProfile width={35} height={35} className="cursor-pointer border border-transparent active:ring active:ring-blue-100 active:border-blue-400"> 
            {`${session?.user?.name} ` || "User"}
          </UserProfile>
             </Menu.Button>
           </div>
           <Transition
             as={Fragment}
             enter="transition ease-out duration-100"
             enterFrom="transform opacity-0 scale-95"
             enterTo="transform opacity-100 scale-100"
             leave="transition ease-in duration-75"
             leaveFrom="transform opacity-100 scale-100"
             leaveTo="transform opacity-0 scale-95"
           >
             <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
               <div className="px-1 py-1 ">
                 <Menu.Item>
                   {({ active }) => (
                     <button
                       className={`${
                         active ? 'bg-blue-500 text-white' : 'text-gray-900'
                       } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                     >
                       Dashboard
                     </button>
                   )}
                 </Menu.Item>
                 <Menu.Item>
                   {({ active }) => (
                     <button
                       className={`${
                         active ? 'bg-blue-500 text-white' : 'text-gray-900'
                       } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                     >
                       Favorilerim
                     </button>
                   )}
                 </Menu.Item>
               </div>
               <div className="px-1 py-1">
                 <Menu.Item>
                   {({ active }) => (
                     <button
                       className={`${
                         active ? 'bg-black/75 text-white' : 'text-white bg-black text-center'
                       } group flex w-full items-center rounded-md px-2 text-center justify-center py-2 text-sm`}
                       onClick={() => signOut()}
                     >
                       Logout
                     </button>
                   )}
                 </Menu.Item>
               </div>
             </Menu.Items>
           </Transition>
         </Menu>
        ) : (
          <>
            {/* Login Btn */}
            <Button
              type="link"
              href="/login"
              theme="gradF"
              className="rounded-xl py-1 px-8 "
            >
              Giriş Yap
            </Button>

            {/* Create Account Btn */}
            <Button
              type="link"
              href="/register"
              theme="grad"
              className="rounded-xl py-1 px-8"
            >
              Kaydol
            </Button>
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[1px] h-6 bg-gray-300"></div>

        {/* SVG ICON TWITTER */}
        <Link href={"/"} className="cursor-pointer active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <rect
              width="25"
              height="25"
              rx="12.5"
              fill="url(#paint0_linear_2509_1717)"
            />
            <path
              d="M17.7463 9.12997C17.3065 9.32514 16.8399 9.45303 16.3621 9.50933C16.8656 9.20836 17.2422 8.73439 17.4217 8.17597C16.9487 8.45684 16.4312 8.65474 15.8914 8.7611C15.666 8.52052 15.3936 8.32882 15.091 8.1979C14.7884 8.06697 14.4622 7.99961 14.1325 8C12.8017 8 11.7228 9.07894 11.7228 10.4099C11.7228 10.5985 11.744 10.7824 11.7853 10.959C9.78237 10.8584 8.00647 9.89917 6.81785 8.44112C6.60347 8.80891 6.49088 9.22715 6.49166 9.65287C6.49166 10.4888 6.91704 11.2266 7.56369 11.6586C7.18099 11.6465 6.80674 11.5431 6.47211 11.357L6.47187 11.3875C6.47187 12.5549 7.3026 13.5287 8.40514 13.7505C8.05013 13.8466 7.6779 13.8606 7.31666 13.7915C7.62354 14.7488 8.51339 15.4458 9.56777 15.4651C8.7142 16.1351 7.66003 16.4985 6.57488 16.4968C6.38055 16.4968 6.18861 16.4854 6 16.4629C7.10185 17.1711 8.38433 17.547 9.69415 17.5457C14.127 17.5457 16.5507 13.8737 16.5507 10.6891C16.5507 10.5847 16.5486 10.4805 16.544 10.377C17.0159 10.0363 17.4231 9.614 17.7463 9.12997Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2509_1717"
                x1="4.5"
                y1="-6.24998"
                x2="31.5691"
                y2="0.767509"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0066FF" />
                <stop offset="1" stop-color="#00D1FF" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NavButtons;
