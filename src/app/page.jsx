'use client'
import { useRouter } from "next/navigation";
import { BiLoader } from "react-icons/bi";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()

  useEffect(()=>{
    const token = localStorage.getItem('auth_token')
    if(token){
      router.push('/dashboard')
    }
    else{
      router.push('/login')
    }
  },[router])
  return(
    <div className=" w-screen h-screen flex justify-center items-center">
      <BiLoader className="animate-spin" size={40}/>
    </div>
  )
}
