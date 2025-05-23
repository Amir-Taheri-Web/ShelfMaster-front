import SearchButton from "@/elements/SearchButton";
import { TSearchBarProps } from "@/types/index.types";
import Form from "next/form";
import { FC } from "react";

const SearchBar: FC<TSearchBarProps> = async ({ searchQuery, page }) => {
  return (
    <Form action={`${page ? "/?page" : "/"}`} className="flex items-center gap-3 max-sm:gap-1 sm:grow">
      <SearchButton />

      <input
        type="text"
        name="search"
        defaultValue={searchQuery}
        placeholder="جستجو کتاب"
        className="placeholder:text-txt-6 max-sm:text-sm w-full max-xm:w-[130px]! text-txt-1"
      />
    </Form>
  );
};

export default SearchBar;
