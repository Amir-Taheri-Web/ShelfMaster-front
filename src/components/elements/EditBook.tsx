"use client";

import { cn } from "@/lib/utils";
import { TBook, TEditBookProps } from "@/types/index.types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { SquarePen } from "lucide-react";
import { FC, useEffect, useState } from "react";

const EditBook: FC<TEditBookProps> = ({ bookId }) => {
  const [book, setBook] = useState<TBook | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchBook = async (): Promise<void> => {
    try {
      const res: Response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/book/${bookId}`
      );
      const data: any = await res.json();
      console.log(data);

      setBook(data);
    } catch (error) {
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
        <DialogTrigger className="text-btn-3 hover:opacity-70 transition-all">
          <SquarePen className="size-[20px]" />{" "}
        </DialogTrigger>
        <DialogContent className="max-sm:rounded-3xl! max-h-[calc(100vh-4rem)] overflow-y-auto">
          <DialogTitle className="mx-auto text-center font-medium text-xl text-txt-1 mt-4">
            ویرایش اطلاعات کتاب
          </DialogTitle>

          <form
            className={cn("mt-4 flex flex-col gap-6 p-3 max-xm:p-0", {
              "pointer-events-none! opacity-50": isLoading,
            })}
          >
            <div className="modal-input-wrapper">
              <label htmlFor="title" className="modal-input-label">
                نام کتاب
              </label>
              <input type="text" autoFocus className="size-0" />
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={book?.title || ""}
                disabled={isLoading}
                placeholder="نام کتاب"
                className="modal-input"
              />
            </div>

            <div className="modal-input-wrapper">
              <label htmlFor="author" className="modal-input-label">
                نام نویسنده
              </label>
              <input
                type="text"
                id="author"
                name="author"
                defaultValue={book?.author || ""}
                disabled={isLoading}
                placeholder="نام نویسنده"
                className="modal-input"
              />
            </div>

            <div className="modal-input-wrapper">
              <label htmlFor="summery" className="modal-input-label">
                خلاصه
              </label>
              <textarea
                id="summery"
                name="summery"
                defaultValue={book?.summary}
                disabled={isLoading}
                placeholder="خلاصه"
                className="modal-input resize-none h-[100px] outline-none! leading-7"
              />
            </div>

            <div className="flex gap-4 w-full">
              <div className="modal-input-wrapper w-full">
                <label htmlFor="quantity" className="modal-input-label">
                  تعداد
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  defaultValue={book?.quantity || ""}
                  disabled={isLoading}
                  placeholder="تعداد"
                  className="modal-input"
                />
              </div>

              <div className="modal-input-wrapper w-full">
                <label htmlFor="price" className="modal-input-label">
                  قیمت
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  defaultValue={book?.price || ""}
                  disabled={isLoading}
                  placeholder="قیمت"
                  className="modal-input"
                />
              </div>
            </div>

            <div className="flex gap-4 w-full max-xm:flex-col">
              <button
                type="submit"
                className="font-medium text-sm bg-btn-4 rounded-xl px-16 py-3 text-txt-3 w-full hover:opacity-70 transition-all"
              >
                اعمال تغییرات
              </button>

              <DialogClose className="font-medium text-sm bg-btn-5 rounded-xl px-16 py-3 text-txt-1 w-full hover:opacity-70 transition-all">
                انصراف
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditBook;
