"use client";

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
import { FC, useActionState, useEffect, useState } from "react";
import { TDeleteBookProps } from "@/types/index.types";
import { deleteBookAction } from "@/actions/forms.actions";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

const DeleteBook: FC<TDeleteBookProps> = ({ bookId }) => {
  const [message, formAction, isPending] = useActionState(deleteBookAction, {
    label: "",
    message: "",
    bookId: bookId,
  });

  const [isDialogOpen, setIsDialogOpen] = useState<boolean | undefined>(
    undefined
  );

  console.log(bookId);

  useEffect(() => {
    if (message.label && message.label === "success") {
      toast.success(message.message);
      setIsDialogOpen(false);
    }

    if (message.label && message.label === "error")
      toast.error(message.message);
  }, [message]);

  return (
    <div>
      <Dialog open={isDialogOpen}>
        <DialogTrigger
          onClick={() => {
            if (isDialogOpen === false) setIsDialogOpen(undefined);
          }}
          className="text-btn-2 hover:opacity-70 transition-all"
        >
          <Trash2 className="size-[20px]" />
        </DialogTrigger>
        <DialogContent
          className={cn("flex flex-col gap-8 items-center", {
            "pointer-events-none! opacity-70": isPending,
          })}
        >
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
            <form action={formAction}>
              <button
                type="submit"
                className="font-medium bg-btn-2 text-txt-3 px-16 py-2 rounded-xl w-full hover:opacity-70 transition-all"
              >
                حذف
              </button>
            </form>
            <DialogClose className="font-medium bg-btn-5 text-txt-1 px-16 py-2 rounded-xl w-full hover:opacity-70 transition-all">
              لغو
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteBook;
