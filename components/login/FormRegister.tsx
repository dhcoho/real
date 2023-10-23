"use client";

import React, { useEffect, useState } from "react";
import Form from "../ux/form";
import Input from "../ux/input";
import Ipass from "../ux/ipass";
import Button from "../ux/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";



const FormRegister = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [notEmail, setNotEmail] = useState<string | null>(null);
  const [notPass, setNotPass] = useState<string | null>(null);
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    password: string;
  } | null>(null);
  const { data: session } = useSession();

  console.log(session);

  const router = useRouter();
  console.log(password);
  console.log(email);
  console.log(fullName);
  console.log(error);

  useEffect(() => {
    // Form validasyonunu burada gerçekleştir

    // Şifrenin en az 5 karakter olması gerektiği validasyonu
    const isPasswordValid = password.length >= 5 && !password.includes(" ");
    setNotPass(isPasswordValid ? "" : "Lütfen en az 5 karakter giriniz ve Boşluk Bırakmayınız.");

    // Geçerli bir e-posta adresi olup olmadığını kontrol etmek için regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailRegex.test(email);

    // Yukarıdaki koşullara göre formun genel geçerliliğini belirle
    const isFormValid = isPasswordValid && isEmailValid;

    // Geçerlilik durumunu set et
    setIsValid(isFormValid);
  }, [fullName, email, password]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
  
    if (!isValid || !fullName || !email || !password) {
      setError("Lütfen gerekli alanları doldurun.");
      return;
    }
  };
  

  return (
    <form
      onSubmit={handleRegister}
      className="w-full flex flex-col items-center mx-auto gap-3 px-3 m-5"
    >
      <Input
        type="text"
        theme="idark"
        placeholder="Tam Adınız"
        name="fullName"
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
        req
      />

      <Input
        type="email"
        theme="idark"
        placeholder="E-posta"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={` ${
          notEmail !== null && notEmail !== ""
            ? "border-red-500 focus:ring  focus:ring-offset-3 focus:ring-red-200 focus:outline-[#ffc1c1]  focus:border-red-500"
            : ""
        }`}
        req
      />
      {notEmail !== null && notEmail !== "" && (
        <p className="text-[13px] text-start justify-start text-red-500">
          {notEmail}
        </p>
      )}
      <div className="flex flex-col gap-1 w-full max-w-[500px] ring-[#dadadaba]">
        <Ipass
          theme="idark"
          placeholder="Şifre"
          name="password"
          change={(e) => setPassword(e.target.value)}
          value={password}
          className={` ${
            notPass !== null && notPass !== ""
              ? "border-red-500 focus:ring  focus:ring-offset-3 focus:ring-red-200 focus:outline-[#ffc1c1]  focus:border-red-500"
              : ""
          }`}
          req
        />
        {notPass !== null && notPass !== "" && (
          <p className="text-[13px] text-start justify-start text-red-500">
            {notPass}
          </p>
        )}
      </div>
      <Button
        typeBtn="submit"
        disabled={!isValid}
        type="button"
        theme="flash"
        className={`max-w-[500px] ${!isValid === true && "opacity-[0.5]"}`}
      >
        Kaydol
      </Button>
    </form>
  );
};

export default FormRegister;
