"use client";

import { addBookAction } from "@/actions/forms.actions";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddBook = () => {
  const [message, formAction, isPending] = useActionState(addBookAction, {
    label: "",
    message: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState<boolean | undefined>(
    undefined
  );

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
          className="text-txt-3 bg-btn-1 rounded-xl font-medium px-8 py-3 max-md:px-6 max-sm:px-4 max-sm:py-2 max-sm:rounded-full max-sm:text-sm hover:opacity-70 transition-all"
        >
          افزودن کتاب
        </DialogTrigger>
        <DialogContent className="max-sm:rounded-3xl! max-h-[calc(100vh-4rem)] overflow-y-auto">
          <DialogTitle className="mx-auto text-center font-medium text-xl text-txt-1 mt-4">
            ایجاد کتاب جدید
          </DialogTitle>

          <form
            className={cn("mt-4 flex flex-col gap-6 p-3 max-xm:p-0", {
              "pointer-events-none opacity-50": isPending,
            })}
            action={formAction}
          >
            <div className="modal-input-wrapper">
              <label htmlFor="title" className="modal-input-label">
                نام کتاب
              </label>
              <input
                type="text"
                id="title"
                name="title"
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
                placeholder="نام نویسنده"
                className="modal-input"
              />
            </div>

            <div className="modal-input-wrapper">
              <label htmlFor="summary" className="modal-input-label">
                خلاصه
              </label>
              <textarea
                id="summary"
                name="summary"
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
                  placeholder="قیمت"
                  className="modal-input"
                />
              </div>
            </div>

            <div className="flex gap-4 w-full max-xm:flex-col">
              <button
                type="submit"
                className="font-medium text-sm bg-btn-3 rounded-xl px-16 py-3 text-txt-3 w-full hover:opacity-70 transition-all"
              >
                ایجاد
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

export default AddBook;
