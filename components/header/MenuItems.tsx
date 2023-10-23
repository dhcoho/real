"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation"


interface MenuItemsProps {
    className?: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({className}) => {
    const pathname = usePathname();

    const MenuItems = [
        {
            name: "Ana Sayfa",
            path: "/",
        },
        {
            name: "Kurumsal",
            path: "/kurumsal",
        },
        {
            name: "Ücretsiz ilan ver",
            path: "/ucretsiz-ilan-ver",
        },
    ]

  return (
    <div className={`flex gap-1.5 items-center ${className}`}>
        {MenuItems.map((item,index) => (
            <Link href={item.path} key={index} className={`text-center py-1.5 rounded-lg px-5 hover:bg-[#F5F5F5]
            ${pathname === item.path && "bg-[#F5F5F5] text-black"}
            `}>
                <p className="text-[#555555] text-[14px]"> {item.name} </p>
            </Link>
        ))}
    </div>
  )
}

export default MenuItems