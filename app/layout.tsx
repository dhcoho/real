"use client"

import "./globals.css";
import { Poppins } from "next/font/google";
import AuthProvider from "./Provider";
import Header from "@/components/header/Header";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/component/mobileMenu/MobileMenu";

const font = Poppins({ 
  subsets: ["latin"],
  weight: ["100","200","300","500","600","700","800","900"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if(pathname.startsWith("/ilan/")) {
    console.log("bro")
  }

  return (
    <html lang="en">
      <AuthProvider>
        <body className={font.className}>
        {pathname === "/login" || pathname === "/register" || pathname === "/ilan" ? null : <Header />}

          {children}
          {pathname === "/login" || pathname === "/register" || pathname === "/ilan" || pathname.startsWith("/ilan/") ? null : <MobileMenu />}
        </body>
      </AuthProvider>
    </html>
  );
}


