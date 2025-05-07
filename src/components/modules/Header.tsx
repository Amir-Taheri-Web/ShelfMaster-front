import SearchBar from "@/modules/SearchBar";
import Image from "next/image";
import avatar from "@/public/images/avatar.png";
import { toBase64, shimmer } from "@/utils/shimmer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { logoutAction } from "@/actions/index.actions";
import { FC } from "react";
import { THeaderProps } from "@/types/index.types";

const Header: FC<THeaderProps> = ({ username }) => {
  return (
    <header className="bg-back-2 border border-line-1 flex items-center gap-4 rounded-2xl py-3 px-8 max-md:py-2 max-md:px-6">
      <SearchBar />

      <DropdownMenu dir="rtl">
        <DropdownMenuTrigger className="flex items-center justify-center gap-3 border-r border-line-1 pr-4 max-sm:mr-auto outline-none!">
          <Image
            src={avatar}
            alt="avatar"
            width={48}
            height={48}
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(50, 50)
            )}`}
            className="object-cover size-[48px] rounded-full max-md:size-[40px] max-xs:size-[37px]!"
          />

          <span className="flex flex-col w-full items-start">
            <span className="text-txt-1 font-medium max-md:text-sm overflow-x-hidden whitespace-nowrap text-ellipsis max-xm:w-[100px]! max-xs:w-[50px]! no-scrollbar">
              {username}
            </span>
            <span className="text-sm text-txt-1 max-md:text-xs">ادمین</span>
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-back-2 border border-line-1 rounded-xl shadow-md p-0 hover:bg-back-1 transition-all">
          <DropdownMenuItem>
            <form>
              <button
                formAction={logoutAction}
                className="flex items-center gap-2 text-txt-1 p-1 max-sm:text-xs"
              >
                <span>
                  <LogOut />
                </span>
                <span>خروج از حساب کاربری</span>
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
