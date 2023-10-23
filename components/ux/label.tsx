import { Chicle } from 'next/font/google'
import React from 'react'

interface LabelProbs {
    className?: string,
    children: React.ReactNode,
    theme?: "default" | "custom",
    For?: string,
    id?: string,
}

const Themes = {
    default: `text-sm font-medium truncate leading-none t peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full`,
    custom: ""
}

const Label: React.FC<LabelProbs> = ({className, children,theme, For, id}) => {
    const baseClassName = className || ""

    const commonBase = {
        className: `${baseClassName} ${
            Themes[theme || "default"]
          }`
    } 
  return (
    <label className={` ${commonBase.className} ${
        Themes[theme || "default"]
      }`} htmlFor={For} id={id}>
        {children}
    </label>
  )
}

export default Label