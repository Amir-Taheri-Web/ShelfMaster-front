import { TPaginationComponentProps } from "@/types/index.types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/ui/pagination";
import { e2p } from "@/utils/convert";
import { FC } from "react";

const PaginationComponent: FC<TPaginationComponentProps> = ({
  totalPages,
  search,
  pageNumber,
  totalBooks,
}) => {
  let pages: number[] = new Array(totalPages);

  if (totalBooks < 10 && (+pageNumber === 1 || !pageNumber)) {
    pages = [1];
  } else {
    for (let i = 0; i < totalPages; i++) {
      pages[i] = i;
    }
    console.log(pages);
  }

  return (
    <div className="">
      <Pagination>
        <PaginationContent>
          {pages.map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href={
                  search
                    ? `/?page=${index + 1}&search=${search}`
                    : `/?page=${index + 1}`
                }
                isActive={
                  pageNumber && index + 1 === +pageNumber
                    ? true
                    : !pageNumber && index + 1 === 1
                    ? true
                    : false
                }
              >
                {e2p(index + 1)}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
