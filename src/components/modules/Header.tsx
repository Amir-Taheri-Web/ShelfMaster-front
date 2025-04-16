import SearchBar from "@/modules/SearchBar";
import Image from "next/image";
import avatar from "@/public/images/avatar.jpg";
import { toBase64, shimmer } from "@/utils/shimmer";

const Header = () => {
  return (
    <header className="bg-back-2 border border-line-1 flex items-center gap-4 rounded-2xl py-3 px-8 max-md:py-2 max-md:px-6">
      <SearchBar />

      <div className="flex items-center justify-center gap-2 border-r border-line-1 pr-4 max-sm:mr-auto">
        <Image
          src={avatar}
          alt="avatar"
          width={50}
          height={50}
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(50, 50))}`}
          className="object-cover size-[50px] rounded-full max-md:size-[40px] max-xs:size-[37px]!"
        />

        <span className="flex flex-col w-full">
          <span className="text-txt-1 font-medium max-md:text-sm overflow-x-hidden whitespace-nowrap text-ellipsis max-xm:w-[100px]! max-xs:w-[50px]! no-scrollbar">
            امیر طاهری
          </span>
          <span className="text-sm text-txt-1 max-md:text-xs">مدیر</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
