import React from "react";

interface FormProps {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  type?: string;
  theme?: "form" | "iblue" | "idark" | "custom";
  roundX?: string;
  round?: string;
  req?: boolean;
  title?: string;
  name?: string,
  id?: string,
  submit?: React.ReactEventHandler;
}

const Themes = {
  form: `w-full flex flex-col items-center mx-auto gap-3 px-3 m-5`,
  iblue: `w-full max-w-[500px] border py-3.5 px-3 mx-auto rounded-md outline-none focus:ring focus:border-blue-500 focus:ring-offset-3 focus:ring-blue-200 text-[#18181B]`,
  idark: `w-full max-w-[500px] border py-3.5 px-3 mx-auto outline-none focus:ring focus:border-gray-400 focus:ring-offset-3 focus:ring-gray-200 text-[#18181B]`,
  custom: ""
};



const Form: React.FC<FormProps> = ({ children, className, round, roundX, theme, submit }) => {
  const baseClassName = className || "";

  const commonProps = {
    className: `rounded-${round || "xl"} ${baseClassName} ${Themes[theme || "custom"]}`
  };

  if (children) {
    return <form className={`${commonProps.className} ${Themes["form"]} placeholder:text-md`}>{children}</form>;
  } else {
    throw new Error("Please Enter Children");
  }
};

export default Form ;
