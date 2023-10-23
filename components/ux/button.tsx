"use client"

import React from 'react'
import Link from 'next/link'


interface ButtonProps {
    type?: "link" | "button",
    round?: string,
    click?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string
    href?: string,
    children: React.ReactNode,
    theme?: "lion" | "tiger" | "custom" | "flash" | "grad" | "gradF" | "default",
    key?: string,
    typeBtn?: "button" | "submit" | "reset" | undefined,
    title?: string,
    disabled?: boolean
}

const color = {
    primary_dark: "#18181B",
    primary_blue: "#2563EB",
    primary_blue_hover: "#3a71e7",
}

const Themes = {
    default: `flex bg-[#18181B] truncate text-white   py-3 px-7 cursor-pointer w-full text-center justify-center hover:bg-[#272728] select-none  active:scale-[0.99]`,

    flash: `flex bg-[#417dff] truncate text-white h-10  py-2  px-7 cursor-pointer w-full text-center justify-center hover:bg-[#4781ff] select-none  active:scale-[0.99]`,

    tiger: `flex bg-[#18181B] truncate text-white  py-2.5  px-7 cursor-pointer w-full text-center justify-center hover:bg-[rgb(37,37,40)] active:ring  active:ring-[rgba(224,224,224,0.74)] select-none  active:scale-[0.99]`,
    
    lion: `flex text-[#363636]  border  py-2 px-7 cursor-pointer w-full text-center justify-center hover:bg-[rgba(236,236,236,0.14)] hover:border-[#989898] active:ring active:ring-ofset-1  active:ring-[#ededed] select-none `,
    grad: `inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors outline-none   bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#18181b] truncate text-white active:scale-[.98]`,
    gradF: `inline-flex items-center border justify-center text-sm font-medium ring-offset-background transition-colors outline-none focus-visible:ring-2  focus-visible:ring-offset-2  bg-primary text-primary-foreground hover:bg-primary/50 h-10 px-4 py-2 w-full  truncate text-[#363636] hover:border-[#989898] active:ring active:ring-ofset-1  active:ring-[#ededed] select-none`,
    custom: "rounded-none"
}

const Button: React.FC<ButtonProps> = ({children, type, click, round, className,href, theme , key, title,typeBtn, disabled}) => {

    const baseClassName = className || "";

    const commonProps = {
        className: `rounded-${round || "xl"} ${baseClassName} ${Themes[theme || "custom"]}`
    }

 if(type === "button"){
    return (
        <button type={typeBtn} disabled={disabled} title={title} className={`${commonProps.className} ${Themes[theme || "tiger"]}`} onClick={click} key={key}>
            {children}
        </button>
      )
 } else if (type === "link") {
    if(href) {
        return (
            <Link href={href} title={title}  className={`${commonProps.className} ${Themes[theme || "lion"]}`}  key={key}>
                {children}
            </Link>
        )
    } else {
        throw new Error("Please provide an url to link button");
    }
 } else {
    return (
        <div  title={title} className={`${commonProps.className} ${Themes[theme || "flash"]}`} key={key}>
            {children}
        </div>
    )
 }
}

export default Button