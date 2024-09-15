"use client";
import Counter from "../ui/Counter";
import SectionTitle from "../ui/SectionTitle";
import SliderWithPagination from "../ui/SliderWithPagination";

const videoData = [
  {
    label: "City Lights",
    video: "/videos/travel/t2.mp4",
  },
  {
    label: "Mountain Adventure",
    video: "/videos/travel/t1.mp4",
  },
  {
    label: "Desert Safari",
    video: "/videos/travel/t3.mp4",
  },
];

const Experience = () => {
  return (
    <section className="container bg-gradient-to-t from-[#ffffff] via-lightBlue/15 to-[#ffffff]">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <SliderWithPagination items={videoData} prefix="experience" />
        <div className="">
          <SectionTitle
            title="With Our Experience We Will Serve You"
            subTitle="Experience"
            subTitleCircle="Our"
          />
          <p className="text-text">
            We award Travelers Choice Best of the best to destinations whose
            hotels, restaurants and things to do received a high volume of
            above-and-beyond reviews
          </p>
          <div className="md:flex grid grid-cols-2 gap-5 items-center justify-between mt-5">
            <div className="flex flex-col items-center text-center bg-white rounded-xl p-3">
              <p className="text-secondary text-4xl font-bold">
                <Counter count={20} />+
              </p>
              <p className="font-bold text-text-lighter">
                Years <br /> Experience
              </p>
            </div>
            <div className="border-r border-primary h-[60px] md:block hidden"></div>
            <div className="flex flex-col items-center text-center bg-white rounded-xl p-3">
              <p className="text-secondary text-4xl font-bold">
                <Counter count={460} />+
              </p>
              <p className="font-bold text-text-lighter">
                Trips <br /> Organized
              </p>
            </div>
            <div className="border-r border-primary h-[60px] md:block hidden"></div>
            <div className="flex flex-col items-center text-center bg-white rounded-xl p-3">
              <p className="text-secondary text-4xl font-bold">
                <Counter count={75} />+
              </p>
              <p className="font-bold text-text-lighter">
                Countries <br /> Visited
              </p>
            </div>
            <div className="border-r border-primary h-[60px] md:block hidden"></div>
            <div className="flex flex-col items-center text-center bg-white rounded-xl p-3">
              <p className="text-secondary text-4xl font-bold">
                <Counter count={50} />
                K+
              </p>
              <p className="font-bold text-text-lighter">
                Happy <br /> Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
