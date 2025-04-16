import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import Image from "next/image";
import deleteImage from "@/public/images/delete.png";

const DeleteBook = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-btn-2 hover:opacity-70 transition-all">
          <Trash2 className="size-[20px]" />
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-8 items-center">
          <Image
            src={deleteImage}
            alt="delete icon"
            priority
            width={98}
            height={98}
            className="mt-6"
          />

          <DialogTitle className="text-xl text-txt-1 font-normal! mt-8 max-xs:mt-4">
            آیا از حذف این کتاب مطمئنید؟
          </DialogTitle>

          <div className="flex items-center gap-4 max-xs:flex-col max-xs:w-full">
            <DialogClose className="font-medium bg-btn-2 text-txt-3 px-16 py-2 rounded-xl w-full hover:opacity-70 transition-all">حذف</DialogClose>
            <DialogClose className="font-medium bg-btn-5 text-txt-1 px-16 py-2 rounded-xl w-full hover:opacity-70 transition-all">لغو</DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteBook;
