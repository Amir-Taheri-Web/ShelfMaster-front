import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";

const AddBook = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-txt-3 bg-btn-1 rounded-xl font-medium px-8 py-3 max-md:px-6 max-sm:px-4 max-sm:rounded-lg max-sm:text-sm hover:opacity-70 transition-all">
          افزودن کتاب
        </DialogTrigger>
        <DialogContent className="max-sm:rounded-3xl! max-h-[calc(100vh-4rem)] overflow-y-auto">
          <DialogTitle className="mx-auto text-center font-medium text-xl text-txt-1 mt-4">
            ایجاد کتاب جدید
          </DialogTitle>

          <form className="mt-4 flex flex-col gap-6 p-3 max-xm:p-0">
            <div className="modal-input-wrapper">
              <label htmlFor="title" className="modal-input-label">
                نام کتاب
              </label>
              <input
                type="text"
                id="title"
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
                placeholder="خلاصه"
                className="modal-input resize-none h-[100px]"
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
