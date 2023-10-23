import React from 'react'
import Link from "next/link"
import LogoSvg from './LogoSvg';

interface LogoProps {
    href: string;
    children?: React.ReactNode;
    className?: string;
    round?: string
}


const Logo: React.FC<LogoProps> = ({ href, children,className ,round}) => {
  return (
    //Logo
    <Link href={href} className={`${className} flex items-center gap-2 `}>
      {/* Svg Logo */}
      {/* <LogoSvg rounded={round} /> */}
      {children}
    </Link>
  )
}

export default Logo