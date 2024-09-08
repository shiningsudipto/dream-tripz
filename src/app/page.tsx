import Image from "next/image";
import earthImg from "@/assets/images/earth.png";
import { josefinSans } from "./layout";

export default function Home() {
  return (
    <main className="">
      <section className="container flex justify-between bg-gradient-to-t from-[#ffffff] via-lightBlue/15 to-[#ffffff] py-5">
        <div className="lg:w-[50%]">
          <div className="flex items-center gap-5">
            <h2
              className={`${josefinSans.className} text-secondary font-semibold`}
            >
              Explore The World
            </h2>
            <Image src={earthImg} height={30} width={30} alt="earth" />
          </div>
          <h1
            className={`${josefinSans.className} text-6xl font-bold leading-[80px] my-7`}
          >
            Discover A <br /> <span className="text-primary">Beautiful</span>{" "}
            <br /> Place With <span className="text-primary">Us</span>
          </h1>
          <h3 className="text-text-lighter">
            The Travelers Choice Best Of The Best awards go to Destinations That
            Receive High Rating From Guest.
          </h3>
        </div>
        <div className="lg:w-[50%]"></div>
      </section>
    </main>
  );
}
