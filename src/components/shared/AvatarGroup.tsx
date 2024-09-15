"use client";

import userImg1 from "@/assets/images/u1.webp";
import userImg2 from "@/assets/images/u2.jpg";
import userImg3 from "@/assets/images/u3.webp";
import userImg4 from "@/assets/images/u4.jpg";
import Image from "next/image";
const AvatarGroup = () => {
  return (
    <>
      <div className="flex items-center relative">
        <Image
          src={userImg1}
          height={100}
          width={100}
          alt="user"
          className="user-avatar left-0 z-[20]"
        />
        <Image
          src={userImg2}
          height={100}
          width={100}
          alt="user"
          className="user-avatar left-10 z-[15]"
        />
        <Image
          src={userImg3}
          height={100}
          width={100}
          alt="user"
          className="user-avatar left-20 z-[10]"
        />
        <Image
          src={userImg4}
          height={100}
          width={100}
          alt="user"
          className="user-avatar left-[120px]"
        />
      </div>
    </>
  );
};

export default AvatarGroup;
