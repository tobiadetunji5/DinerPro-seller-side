'use client'
import { useRouter } from "next/navigation"

export default function AddMenuBtn() {
  const router = useRouter()
  const handleRoute = ()=>{
    router.push('/settings/menu')
  }
  return (
    <>
        <button
        onClick={handleRoute}
         className="w-24 h-8 rounded-2xl bg-primary text-white ml-auto">Add new</button>
    </>
  )
}
