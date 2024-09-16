
import AvatarGroup from "../shared/AvatarGroup";


import Counter from "../ui/Counter";
import SearchSelectionFields from "./SearchSelectionFields";

const Search = () => {
  return (
    <div className="container flex lg:flex-row flex-col justify-between gap-10 w-full">
      <div className="flex justify-between items-center">
        <AvatarGroup></AvatarGroup>
        <div className="ms-[200px] text-2xl font-semibold text-center">
          <div className="flex flex-row">
            <Counter count={21} />K <p className="ms-2"> Happy</p>
          </div>
          <p>Customer</p>
        </div>
      </div>
      <div className="w-full">
        <SearchSelectionFields />
      </div>
    </div>
  );
};

export default Search;
