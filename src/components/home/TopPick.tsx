import { travelPackages } from "@/utils/packages.utils";
import SectionTitle from "../ui/SectionTitle";
import Slider from "../ui/Slider";

export type TTravelPackage = {
  title: string;
  duration: string;
  people: number;
  location: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
};

const TopPick = () => {
  return (
    <div className="container pb-[70px]">
      <SectionTitle
        title="Best Tour Packages"
        subTitle="Pick"
        subTitleCircle="Top"
      />
      <div>
        <div className="">
          <Slider
            prefix=""
            items={travelPackages}
            sliderType="topPick"
            slidesPerView={3}
          />
        </div>
      </div>
    </div>
  );
};

export default TopPick;
