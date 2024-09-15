import { josefinSans } from "@/app/layout";

type TSectionTile = {
  title: string;
  subTitle: string;
  subTitleCircle: string;
};
const SectionTitle = ({ title, subTitle, subTitleCircle }: TSectionTile) => {
  return (
    <div className={`${josefinSans.className} capitalize`}>
      <div className="text-lg text-secondary flex items-center font-medium mb-3">
        <hr className="w-[50px] border-secondary" />
        <h3>
          <span className="border border-secondary rounded-full py-2 px-1">
            {subTitleCircle}
          </span>{" "}
          {subTitle}
        </h3>
      </div>
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-primary">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
