import travelBagImg from "@/assets/images/banner-img.png";
import birdImg from "@/assets/images/bird1.png";
import earthImg from "@/assets/images/earth.png";
import featherImg from "@/assets/images/feather.png";
import Search from "@/components/home/Search";
import TopDestination from "@/components/home/TopDestination";
import TopOffers from "@/components/home/TopOffers";

import CustomersSay from "@/components/home/CustomersSay";
import FeaturedBlogSection from "@/components/Sections/featured-blog";
import SponsorsSection from "@/components/Sections/sponsors";
import TrendingCategory from "@/components/Sections/trending-section";
import Image from "next/image";
import { josefinSans } from "./layout";
import Experience from "@/components/home/Experience";
import TopPick from "@/components/home/TopPick";

export default function Home() {
  return (
    <main className="">
      <section className="container flex lg:flex-row flex-col justify-between gap-y-10 bg-gradient-to-t from-[#ffffff] via-lightBlue/15 to-[#ffffff] py-5">
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
            className={`${josefinSans.className} lg:text-6xl text-4xl font-bold lg:leading-[80px] md:my-7 my-5`}
          >
            Discover A <br className="md:bloc hidden" />{" "}
            <span className="text-primary">Beautiful</span> <br /> Place With{" "}
            <span className="text-primary">Us</span>
          </h1>
          <h3 className="text-text-lighter">
            The Travelers Choice Best Of The Best awards go to Destinations That
            Receive High Rating From Guest.
          </h3>
        </div>
        <div className="lg:w-[50%] relative">
          <div className="flex justify-end">
            <Image src={travelBagImg} height={600} width={500} alt="earth" />
          </div>
          <Image
            src={birdImg}
            height={30}
            width={50}
            alt="bird-img"
            className="absolute lg:top-10 right-0 top-0"
          />
          <Image
            src={featherImg}
            height={30}
            width={50}
            alt="bird-img"
            className="absolute top-0 lg:right-0 left-0"
          />
        </div>
      </section>
      <Search />
      {/* TrendingCategory */}
      <TrendingCategory />
      <Experience />
      <TopPick />
      <TopDestination />
      {/* OurExperienceTopOffers */}
      <TopOffers />
      {/* CustomersSay */}
      <CustomersSay />
      {/* Featured-Blog-Section */}
      <FeaturedBlogSection />
      {/* Sponsors Sections */}
      <SponsorsSection />
    </main>
  );
}
