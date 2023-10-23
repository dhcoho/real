"use client";

import React, { useState } from "react";

interface FormProps {
  className?: string;
  placeholder?: string;
  type?: string;
  theme?: "iblue" | "idark" | "custom" | "grad" | "gradF" | "default" | "blue";
  roundX?: string;
  round?: string;
  req?: boolean;
  title?: string;
  name?: string;
  id?: string;
  change?: React.ChangeEventHandler<HTMLInputElement>; 
  value?: string;
}

const Themes = {
  default: `w-full border outline-none flex items-center  py-3 transition px-3 focus:ring text-sm focus:ring-offset-1 focus:border-[#b0b0b0] focus:ring-[#dedede]`,

  blue: `w-full border outline-none flex items-center  py-3 transition px-3 focus:ring text-sm focus:ring-offset-1 focus:border-blue-500 focus:ring-blue-100`,

  iblue: `w-full max-w-[500px] border py-3 px-3 mx-auto outline-none focus:ring focus:border-blue-500 focus:ring-offset-3 focus:ring-blue-200 text-[#18181B]`,

  idark: `w-full max-w-[500px] border py-3 px-3 mx-auto outline-none focus:ring focus:border-gray-400 focus:ring-offset-3 focus:ring-gray-200 text-[#18181B]`,

  grad: `flex h-10 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dadadaba] focus:border-black focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`,

  gradF: `flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:ring focus:border-gray-400 focus:ring-offset-3 focus:ring-gray-200 text-[#18181B] `,

  custom: "",
};

const Input: React.FC<
  FormProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  title,
  placeholder,
  type,
  className,
  theme,
  roundX,
  round,
  req,
  name,
  id,
  change,
  value,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState<string>(""); // E-posta değerini state içinde tutuyoruz
  const [notEmail, setNotEmail] = useState<string | null>(null);
  const baseClassName = className || "";

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // E-posta değerini güncelliyoruz
    if (type === "email" && event.target.value) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(event.target.value)) {
        setNotEmail("Please enter a valid email address.");
      } else {
        setNotEmail(null);
      }
    } else {
      setNotEmail(null);
    }
  };

  const commonProps = {
    className: `rounded-${round || "md"} ${baseClassName} ${
      Themes[theme || "custom"]
    }`,
  };


  return (
    <div className=" flex flex-col gap-1 w-full max-w-[500px] ring-[#dadadaba]">
      <input
        title={title}
        type={type || "text"}
        onBlur={handleBlur}
        onChange={change} // E-posta değerini her değişiklikte güncelliyoruz
        value={value} // E-posta değerini inputa bağlıyoruz
        className={`rounded-${roundX} ${commonProps.className}  ${
          Themes[theme || "iblue"]
        } ${
          notEmail !== null && notEmail !== "" // Değişiklik burada
            ? "border-red-500 focus:ring  focus:ring-offset-3 focus:ring-red-200 focus:outline-[#ffc1c1]  focus:border-red-500"
            : ""
        }`}
        placeholder={placeholder}
        required={req}
        {...rest}
        name={name}
        id={id}
      />
      {notEmail !== null && notEmail !== "" && ( // Değişiklik burada
        <p className=" text-[13px] text-start justify-start text-red-500">
          {notEmail}
        </p>
      )}
    </div>
  );
};

export default Input;
