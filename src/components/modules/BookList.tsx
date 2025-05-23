import BookInfo from "@/elements/BookInfo";
import DeleteBook from "@/elements/DeleteBook";
import EditBook from "@/elements/EditBook";
import { TBookListProps } from "@/types/index.types";
import { Dialog, DialogContent, DialogTrigger } from "@/ui/dialog";
import { e2p, sp } from "@/utils/convert";
import { Info } from "lucide-react";
import { FC } from "react";
const BookList: FC<TBookListProps> = ({ books }) => {
  return (
    <div className="overflow-x-auto grow">
      <ul className="flex flex-col border border-line-1 rounded-4xl max-sm:rounded-2xl h-full min-w-[800px]">
        <li className="w-full flex items-center justify-between bg-back-3 text-txt-1 font-medium px-16 py-7 max-sm:py-5 max-sm:px-12 rounded-t-4xl max-sm:rounded-t-2xl gap-8">
          <span className="w-[150px] max-sm:w-[80px]">نام کتاب</span>
          <span className="w-[52px]">موجودی</span>
          <span className="w-[100px]">قیمت</span>
          <span className="w-[150px]">شناسه کتاب</span>
          <span className="w-[92px]"></span>
        </li>

        <div className="bg-back-2 rounded-b-4xl max-sm:rounded-b-2xl grow h-[500px] max-md:h-[300px] overflow-y-auto books-scrollbar">
          {books &&
            books.length > 0 &&
            books?.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between text-sm px-16 py-6 max-sm:py-5 max-sm:px-12 border-b border-b-line-3 gap-8"
              >
                <span className="w-[150px] overflow-hidden whitespace-nowrap text-ellipsis max-sm:w-[80px]">
                  {e2p(item.title)}
                </span>
                <span className="w-[52px]">{e2p(item.quantity)}</span>
                <span className="w-[100px]">{sp(item.price)} تومان</span>
                <span className="w-[150px]">{item.id}</span>
                <span className="flex items-center gap-4 w-[92px]">
                  <Dialog>
                    <DialogTrigger className="text-btn-1 hover:opacity-70 transition-all">
                      <Info className="size-[20px]" />
                    </DialogTrigger>
                    <DialogContent className="max-sm:rounded-3xl! max-h-[calc(100vh-4rem)] max-sm:px-4 overflow-y-auto text-txt-1">
                      <BookInfo bookId={item.id} />
                    </DialogContent>
                  </Dialog>

                  {/* <EditBook bookId={item.id} /> */}

                  <DeleteBook bookId={item.id} />
                </span>
              </li>
            ))}

          {(!books || books.length === 0) && (
            <p className="text-2xl px-16 py-6 max-sm:py-5 max-sm:px-12 text-txt-7 max-sm:text-xl">
              کتابی برای نمایش وجود ندارد
            </p>
          )}
        </div>
      </ul>
    </div>
  );
};

export default BookList;
