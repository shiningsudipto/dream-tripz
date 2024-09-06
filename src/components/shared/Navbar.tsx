import { BiMessageDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";
import logo from "../../../public/dream-tripz-logo.png";
import { menuLinks } from "@/constants/menuLinks.const";
import CustomDrawer from "../ui/CustomDrawer";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="">
        {/* sub navbar */}
        <div className="container hidden md:flex justify-between bg-primary py-2 text-white">
          <div className="flex gap-x-5">
            <p className="flex items-center gap-x-3">
              <BiMessageDetail /> dreamtripz@gmail.com{" "}
            </p>
            <p className="flex items-center gap-x-3">
              <FiPhoneCall /> +880 17111111111
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <FaFacebookF /> <RiInstagramFill /> <FaTwitter /> <FaLinkedinIn />
          </div>
        </div>
        {/* navbar */}
        <div className="container py-5 flex items-center justify-between">
          <Image
            src={logo}
            height={45}
            width={200}
            alt="dream-tripz-logo"
            className="cursor-pointer"
          />
          <div className="md:flex items-center font-semibold hidden">
            {menuLinks.map((item, index) => {
              return (
                <div key={index} className="px-[15px]">
                  {item.name}
                </div>
              );
            })}
          </div>
          <button className="px-7 bg-primary rounded-full py-3 text-white font-semibold md:block hidden">
            Get Started
          </button>
          <div className="block md:hidden">
            <CustomDrawer label={<FaBars className="text-xl" />}>
              <div className="flex flex-col font-semibold px-3 py-5 space-y-3">
                {menuLinks.map((item, index) => {
                  return (
                    <div key={index} className="px-[15px]">
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </CustomDrawer>
          </div>
        </div>
      </nav>
      <div></div>
    </>
  );
};

export default Navbar;
