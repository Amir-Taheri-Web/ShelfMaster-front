import BookList from "@/modules/BookList";
import Header from "@/modules/Header";
import PaginationComponent from "@/modules/PaginationComponent";
import Title from "@/modules/Title";
import { THomePageProps } from "@/types/index.types";
import { FC } from "react";

const HomePage: FC<THomePageProps> = async ({
  booksData,
  username,
  searchQuery,
  pageQuery,
}) => {
  return (
    <div className="3xl:max-w-[1900px] max-3xl:mx-16 max-lg:mx-8 max-md:mx-4 mx-auto flex flex-col gap-12 max-sm:gap-8 my-8 max-sm:my-4 h-[calc(100vh-4rem)]">
      <Header username={username} searchQuery={searchQuery} page={pageQuery} />

      <div className="flex flex-col gap-8 grow">
        <Title />

        <BookList books={booksData.data} />

        <PaginationComponent
          totalPages={booksData.totalPages}
          search={searchQuery}
          pageNumber={pageQuery}
          totalBooks={booksData.data.length}
        />
      </div>
    </div>
  );
};

export default HomePage;
