import AddBook from "@/elements/AddBook";
import { SlidersVertical } from "lucide-react";

const Title = () => {
  return (
    <div className="w-full flex items-center gap-4 justify-between">
      <h1 className="flex items-center gap-2">
        <span className="text-icon-1 font-medium">
          <SlidersVertical className="max-sm:size-[20px]" />
        </span>

        <span className="font-medium text-2xl max-md:text-xl max-sm:text-lg text-txt-1">
          مدیریت کتاب‌ها
        </span>
      </h1>

      <AddBook />
    </div>
  );
};

export default Title;
