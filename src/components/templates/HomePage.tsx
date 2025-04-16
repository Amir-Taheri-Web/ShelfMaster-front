import BookList from "@/modules/BookList";
import Header from "@/modules/Header";
import PaginationComponent from "@/modules/PaginationComponent";
import Title from "@/modules/Title";

const HomePage = () => {
  return (
    <div className="3xl:max-w-[1900px] max-3xl:mx-16 max-lg:mx-8 max-md:mx-4 mx-auto flex flex-col gap-12 my-8 h-[calc(100vh-4rem)]">
      <Header />

      <div className="flex flex-col gap-8 grow">
        <Title />

        <BookList />

        <PaginationComponent />
      </div>
    </div>
  );
};

export default HomePage;
