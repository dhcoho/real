"use client"

import FormLogin from "@/components/login/FormLogin";
import FormRegister from "@/components/login/FormRegister";
import GoBackButton from "@/components/ui/GoBackButton";
import Logo from "@/components/ui/Logo";
import GradientDiv from "@/components/ui/svg/GradientDiv";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const {data:session} = useSession()
  const sessio: Promise<Session | null> = getSession();
  const router = useRouter();

  if(session) {
    router.push("/")
  }

  if(!sessio) {
    router.push("/")
  }


  return (
    <section className="w-full h-screen items-center justify-center flex flex-col gap-7">
        <GoBackButton  className="absolute top-10 left-14 max-[600px]:left-6  max-[600px]:top-6 rounded-s-full rounded-e-full"/>
      <GradientDiv
        grad={1}
        className={`blur-3xl absolute hidden -z-20  top-0 right-3 max-[465px]:hidden`}
      />
      <GradientDiv
        grad={2}
        className={`blur-3xl absolute -z-20 hidden bottom-0 left-3 max-[465px]:hidden`}
      />
      <div className="w-full items-center justify-center flex flex-col gap-5">
        <Logo href="/" />
        <div className="w-full items-center text-center flex flex-col gap-2">
          <h1 className="text-xl font-bold">
            Test ile Her şey Daha Güzel
          </h1>
          <p className="text-sx text-gray-400 max-w-[500px]">
            şimdi kaydol ve hemen evini ara , beğendiklerini favorine ekle veya
            kayıt olmadan devam et
          </p>
        </div>
      </div>
      <div className="w-full max-w-2xl items-center justify-center">
        <FormRegister />
      </div>
      <p className="text-gray-400">Hesabınız Varmı? <Link href={"/login"} className="text-blue-500 hover:underline cursor-pointer">Giriş Yap</Link></p>
    </section>
  );
};

export default LoginPage;
