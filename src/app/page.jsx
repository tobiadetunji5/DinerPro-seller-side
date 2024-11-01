'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";

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
      <AiOutlineLoading className="animate-spin" size={40}/>
    </div>
  )
}
