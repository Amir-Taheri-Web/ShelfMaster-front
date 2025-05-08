import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { SquarePen } from "lucide-react";

const EditBook = () => {
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

          <form className="mt-4 flex flex-col gap-6 p-3 max-xm:p-0">
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
              <label htmlFor="summery" className="modal-input-label">
                خلاصه
              </label>
              <textarea
                id="summery"
                name="summery"
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
