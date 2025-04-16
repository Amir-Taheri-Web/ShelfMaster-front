import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/ui/pagination";

const PaginationComponent = () => {
  return (
    <div className="">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>۱</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">۲</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">۳</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
