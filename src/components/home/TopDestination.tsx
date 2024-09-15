import { topDestinations } from "@/utils/destination.utils";
import SectionTitle from "../ui/SectionTitle";
import Slider from "../ui/SLider";

const TopDestination = () => {
  return (
    <div className="container my-[70px]">
      <SectionTitle
        subTitleCircle="Top"
        subTitle="Destination"
        title="Explore Top Destination"
      />
      <div className="mt-10">
        <Slider prefix="" items={topDestinations} />
      </div>
    </div>
  );
};

export default TopDestination;
