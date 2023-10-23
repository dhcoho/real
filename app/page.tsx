"use client"

import FilterMenu from '@/components/component/FilterMenu';
import SearchBar from '@/components/searchBar/SearchBar'
import GradientDiv from '@/components/ui/svg/GradientDiv'
import { useState } from 'react';
import IlanData from '@/components/ilan/IlanData';
import MenuFilterMenu from '@/components/component/MenuFilterBar';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import axios from 'axios';

export default function Home() {
  const [statusFltr, setStatusFltr] = useState(false);
  const pathname = usePathname();
   const {data:session} = useSession();

  
   if (session) {
    const userData = async () => {
      try {
        const res = await axios.post("/api/getData", {
          method: "post",
          email: session?.user?.email
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        });
    
        console.log(res.data); // Sonucu burada işleyebilirsiniz
      } catch (error) {
        console.error("Error:", error);
      }
    }
    userData()
  }


  return (
   <main className='pb-5'>
    {/* <div className='w-full h-10 bg-blue-500 text-white text-center justify-center items-start flex py-2' onClick={() => signOut()}>
      LogOut
    </div> */}
    
     {statusFltr &&  <MenuFilterMenu />}
    <GradientDiv grad={1}  className='blur-3xl absolute -z-20 hidden top-20 right-3 max-[465px]:hidden'/>
    <GradientDiv grad={2}  className='blur-3xl absolute -z-20 hidden -bottom-20 -left-3 max-[465px]:hidden'/>
    <SearchBar statusFltr={statusFltr} setStatusFltr={setStatusFltr} />
    <div className='w-full items-start min-[600px]:flex gap-5 px-3'>
     {statusFltr &&  <FilterMenu />}
      <div className='w-full h-full flex flex-col gap-4 mb-10'>
      <IlanData />
      {/* <div className='bg-[#f3f3f3] w-full py-4 text-[#8c8c8c] text-center rounded-xl font-bold mb-8 mt-1'>
        Daha Fazla İlan Yok
      </div> */}
      </div>
    </div>

   
   </main>
  )
}
