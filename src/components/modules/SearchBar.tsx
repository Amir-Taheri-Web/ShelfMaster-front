import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 max-sm:gap-1 sm:grow">
      <Search className="size-6 text-txt-1 max-sm:size-[20px]" />

      <input type="text" placeholder="جستجو کتاب" className="placeholder:text-txt-6 w-full max-xm:w-[130px]! text-txt-1" />
    </div>
  );
};

export default SearchBar;
