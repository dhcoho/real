"use client";

import React, { useEffect, useState } from "react";
import Input from "../ux/input";
import Ipass from "../ux/ipass";
import Button from "../ux/button";
import axios from "axios";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [notPass, setNotPass] = useState<string | null>(null);

  const {data:session} = useSession()

  const router = useRouter();

  console.log("Email: ", email, "Password", password);

  useEffect(() => {
    // Form validasyonunu burada gerçekleştir

    // Şifrenin en az 5 karakter olması gerektiği validasyonu
    const isPasswordValid = password.length >= 5 && !password.includes(" ");
    setNotPass(
      isPasswordValid
        ? ""
        : "Lütfen en az 5 karakter giriniz ve Boşluk Bırakmayınız."
    );

    // Geçerli bir e-posta adresi olup olmadığını kontrol etmek için regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailRegex.test(email);

    // Yukarıdaki koşullara göre formun genel geçerliliğini belirle
    const isFormValid = isPasswordValid && isEmailValid;

    // Geçerlilik durumunu set et
    setIsValid(isFormValid);
  }, [email, password]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid || !email || !password) {
      setError("Lütfen gerekli alanları doldurun.");
      setTimeout(() => {
        setError("");
      }, 2600); // 2 saniye sonra hatayı temizle
      return;
    }

  };



  if (session) {
    router.push("/")
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-full flex flex-col items-center mx-auto gap-3 px-3 m-5"
    >
      {error && (
        <div className="bg-red-500 py-2 w-full rounded-xl max-w-[500px] text-center text-white">
        <p> {error} </p>
        </div>
      )}
      <Input
        type="email"
        theme="idark"
        placeholder="E-posta"
        className="bg-transparent"
        name="email"
        value={email}
        change={(e) => setEmail(e.target.value)}
      />

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
        Giriş Yap
      </Button>
    </form>
  );
};

export default FormLogin;
