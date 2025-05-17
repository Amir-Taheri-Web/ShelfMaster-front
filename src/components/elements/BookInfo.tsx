"use client";

import { TBook, TBookInfoProps } from "@/types/index.types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { e2p, sp } from "@/utils/convert";
import { Info } from "lucide-react";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";

const BookInfo: FC<TBookInfoProps> = ({ bookId }) => {
  const [book, setBook] = useState<TBook | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchBook = async (): Promise<void> => {
    try {
      const res: Response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/book/${bookId}`
      );

      const data = await res.json();
      console.log(data);

      setBook(data);
    } catch (error) {
      console.log(error);
      toast.error("مشکلی در گرفتن کتاب پیش آمده. دوباره امتحان کنید");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-btn-1 hover:opacity-70 transition-all">
          <Info className="size-[20px]" />
        </DialogTrigger>
        <DialogContent className="max-sm:rounded-3xl! max-h-[calc(100vh-4rem)] max-sm:px-4 overflow-y-auto text-txt-1">
          <DialogTitle className="size-0 hidden"></DialogTitle>
          <DialogClose className="absolute top-4 right-4 text-txt-2 hover:opacity-60 transition-all">
            <X className="size-[20px]" />
          </DialogClose>
          {isLoading && "loading..."}

          {!isLoading && book && (
            <>
              <DialogTitle className="mx-auto text-center font-bold text-xl text-btn-1 mt-4 mb-4 max-sm:text-lg">
                {e2p(book.title)}
              </DialogTitle>

              <div className="flex flex-col gap-8 max-sm:text-sm">
                <div className="flex gap-1 flex-wrap">
                  <span className="font-medium">نویسنده:</span>
                  <span>{e2p(book.author)}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium">خلاصه:</span>
                  <p className="leading-8 text-justify">{e2p(book.summary)}</p>
                </div>

                <div className="flex items-center flex-wrap justify-between gap-4 mb-4 mt-8">
                  <div className="flex gap-1 border-x-2 border-btn-1 border-dashed px-2">
                    <span className="font-medium">قیمت:</span>
                    <span>{sp(book.price.toString())} تومان</span>
                  </div>

                  <div className="flex gap-1 border-x-2 border-btn-1 border-dashed px-2">
                    <span className="font-medium">موجودی:</span>
                    <span>{sp(book.quantity.toString())} عدد</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookInfo;
