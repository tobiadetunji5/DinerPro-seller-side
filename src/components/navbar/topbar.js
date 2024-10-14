import Image from "next/image";
import logo from "/public/images/brand_logo/logo1.png";
import chat from "/public/images/icons/chat.svg";
import gift from "/public/images/icons/gift.svg";
import Notification from "../topbar/Notification";

export default function Topbar() {
  return (
    <div className="h-[10%] flex justify-between mx-20 items-center">
      <div>
        <Image
          src={logo}
          alt="dinerPro_logo"
          // fill
          style={{ objectFit: "cover" }}
          // placeholder="blur"
          width={100}
          height={100}
        />
      </div>
      <div className="flex gap-4 ml-auto mr-14">
        <Notification/>

        <Image
          src={chat}
          alt="chat"
          style={{ objectFit: "cover" }}
          // placeholder="blur"
          width={25}
          height={25}
        />
        <Image
          src={gift}
          alt="gift"
          style={{ objectFit: "cover" }}
          // placeholder="blur"
          width={25}
          height={25}
        />
      </div>
      <div className="h-[50px] bg-black w-[1px] mx-3"></div>
      <div className="flex gap-3 ">
        <div>
          <h5>Good Morning</h5>
          <h4>John Doe</h4>
        </div>
        <div>profile image</div>
      </div>
    </div>
  );
}
