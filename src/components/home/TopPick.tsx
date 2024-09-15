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
    <div className="container">
      <SectionTitle
        title="Best Tour Packages"
        subTitle="Pick"
        subTitleCircle="Top"
      />
      <div>
        <div className="mt-10">
          <Slider prefix="" items={travelPackages} sliderType="topPick" />
        </div>
      </div>
    </div>
  );
};

export default TopPick;
