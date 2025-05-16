"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useFormStatus } from "react-dom";

const SearchButton = () => {
  const status = useFormStatus();

  return (
    <button type="submit">
      <Search
        className={cn("size-6 text-txt-1 max-sm:size-[20px]", {
          "animate-spin": status.pending,
        })}
      />
    </button>
  );
};

export default SearchButton;
