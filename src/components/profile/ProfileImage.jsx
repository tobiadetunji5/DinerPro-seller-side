'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import profileImg from 'public/images/profile-img-mock.png'

export default function ProfileImage() {
  const pathname = usePathname()
  return (
    <div className="flex items-center gap-4">
            <div className="rounded-full w-[100px] h-[100px]">
                <Image
                src={profileImg}
                alt="profile-image"
                sizes="100 100"
                quality={80}
                className="object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-col gap-2">
                <span>Profile photo</span>
                <span>600 x 600 or larger recommended</span>
                {
                 pathname == '/settings/profile'?
                 <button className="w-32 h-8 rounded-3xl bg-primary text-white font-light text-sm">Upload photo</button>
                :null}
            </div>
        </div>
  )
}
