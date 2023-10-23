"use client";

import React, { useState } from "react";

interface IpassProps {
  id?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  change?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  theme?: "default" | "custom" | "blue" | "iblue" | "idark" | "grad";
  round?: string;
  req?: boolean;
  min?: number;
  max?: number;
  verifed?: boolean;
}

const Themes = {
  default: `w-full border flex items-center  py-1.5 transition px-3 focus-within:ring text-sm focus-within:ring-offset-1 focus-within:border-[#b0b0b0] focus-within:ring-[#dedede]`,

  blue: `w-full border flex items-center  py-1.5 transition px-3 focus-within:ring text-sm focus-within:ring-offset-1 focus-within:border-blue-500 focus-within:ring-blue-100`,

  iblue: `w-full max-w-[500px] flex items-center border py-3 px-3 mx-auto outline-none focus-within:ring focus-within:border-blue-500 focus-within:ring-offset-3 focus-within:ring-blue-200 text-[#18181B] focus-within:ring-[#dededec1] text-sm`,

  idark: `w-full max-w-[500px] flex items-center py-1.5 border items-center px-3 mx-auto outline-none focus-within:ring focus-within:border-gray-400 focus-within:ring-offset-3 focus-within:ring-gray-200 text-[#18181B]`,

  grad: `flex h-10 w-full flex items-center rounded-none border border-input bg-background px-3 py-1.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dadadaba] focus-within:border-black focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`,

  gradF: `flex h-10 w-full flex items-center border border-input bg-background px-3 py-1.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-within:ring focus-within:border-gray-400 focus-within:ring-offset-3 focus-within:ring-gray-200 text-[#18181B] `,
  custom: "",
};

const Ipass: React.FC<IpassProps> = ({
  id,
  name,
  value,
  change,
  placeholder,
  className,
  theme,
  round,
  req,
  min,
  max,
  verifed,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false); // Yeni eklenen state
  const baseClassName = className || "";

  const commonBase = {
    className: `rounded-${round || "md"} ${baseClassName} ${
      Themes[theme || "default"]
    }`,
  };

  const handletogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const value = e.target.value;

    if (value.includes(" ")) {
      console.log("Boşluk içeren değer girdiniz. Lütfen boşluk kullanmayın.");
      setIsValid(false);
      return;
    }

    if (value.length < 5) {
      console.log("Şifre en az 5 karakter olmalıdır.");
      setIsValid(false);
      return;
    }

    const hasNumber = /\d/;
    if (!hasNumber.test(value)) {
      console.log("Şifre en az bir rakam içermelidir.");
      setIsValid(false);
      return;
    }

    if (verifed) {
      const regex = /^(?=.*[A-Z])/;
      const isValidInput = regex.test(value);
      if (!isValidInput) {
        console.log("Şifre en az bir büyük harf içermelidir.");
        setIsValid(false);
        return;
      }
    }

    setIsValid(true);
  };

  console.log("bro Test Value", value);
  return (
    <div className={`${commonBase.className} ${Themes[theme || "idark"]}`}>
      <input
        type={showPassword ? "text" : "password"}
        className="w-full h-full focus-within:outline-none py-2 border-r"
        placeholder={placeholder || "password"}
        id={id}
        name={name}
        value={value}
        onChange={(e) => {
          change && change(e);
          handleChangePassword(e); // Validasyonları burada çağırın
        }}
        required={req}
        {...rest}
      />
      <div
        onClick={handletogglePassword}
        className="ml-2 w-auto items-center h-auto cursor-pointer focus-within:ring-[#dedede]"
      >
        {showPassword ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="15"
            viewBox="0 0 22 15"
            fill="none"
          >
            <path
              d="M11 4.5C10.2044 4.5 9.44129 4.81607 8.87868 5.37868C8.31607 5.94129 8 6.70435 8 7.5C8 8.29565 8.31607 9.05871 8.87868 9.62132C9.44129 10.1839 10.2044 10.5 11 10.5C11.7956 10.5 12.5587 10.1839 13.1213 9.62132C13.6839 9.05871 14 8.29565 14 7.5C14 6.70435 13.6839 5.94129 13.1213 5.37868C12.5587 4.81607 11.7956 4.5 11 4.5ZM11 12.5C9.67392 12.5 8.40215 11.9732 7.46447 11.0355C6.52678 10.0979 6 8.82608 6 7.5C6 6.17392 6.52678 4.90215 7.46447 3.96447C8.40215 3.02678 9.67392 2.5 11 2.5C12.3261 2.5 13.5979 3.02678 14.5355 3.96447C15.4732 4.90215 16 6.17392 16 7.5C16 8.82608 15.4732 10.0979 14.5355 11.0355C13.5979 11.9732 12.3261 12.5 11 12.5ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0Z"
              fill="#B1B1B1"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M10.83 6.5L14 9.66V9.5C14 8.70435 13.6839 7.94129 13.1213 7.37868C12.5587 6.81607 11.7956 6.5 11 6.5H10.83ZM6.53 7.3L8.08 8.85C8.03 9.06 8 9.27 8 9.5C8 10.2956 8.31607 11.0587 8.87868 11.6213C9.44129 12.1839 10.2044 12.5 11 12.5C11.22 12.5 11.44 12.47 11.65 12.42L13.2 13.97C12.53 14.3 11.79 14.5 11 14.5C9.67392 14.5 8.40215 13.9732 7.46447 13.0355C6.52678 12.0979 6 10.8261 6 9.5C6 8.71 6.2 7.97 6.53 7.3ZM1 1.77L3.28 4.05L3.73 4.5C2.08 5.8 0.78 7.5 0 9.5C1.73 13.89 6 17 11 17C12.55 17 14.03 16.7 15.38 16.16L15.81 16.58L18.73 19.5L20 18.23L2.27 0.5M11 4.5C12.3261 4.5 13.5979 5.02678 14.5355 5.96447C15.4732 6.90215 16 8.17392 16 9.5C16 10.14 15.87 10.76 15.64 11.32L18.57 14.25C20.07 13 21.27 11.36 22 9.5C20.27 5.11 16 2 11 2C9.6 2 8.26 2.25 7 2.7L9.17 4.85C9.74 4.63 10.35 4.5 11 4.5Z"
              fill="#B1B1B1"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Ipass;
