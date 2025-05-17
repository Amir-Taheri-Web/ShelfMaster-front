export type TLayout = Readonly<{
  children: React.ReactNode;
}>;

export type TLoginRegisterForm = {
  isLogin: boolean;
};

export type TLoginFormActionState = {
  label: "" | "username" | "password" | "success" | "error" | "inputs";
  message: string;
};

export type TBooksData = {
  totalBooks: number;
  page: number;
  limit: number;
  totalPages: number;
  data: {
    id: string;
    title: string;
    summary: string;
    author: string;
    price: number;
    quantity: number;
  }[];
};

export type TBook = {
  id: string;
  title: string;
  summary: string;
  author: string;
  price: number;
  quantity: number;
};

export type TBooks = TBook[];

export type THomePageProps = {
  booksData: TBooksData;
  username: string;
  searchQuery: string | string[];
};

export type TBookListProps = {
  books: TBooks;
};

export type THeaderProps = {
  username: string;
  searchQuery: string | string[];
};

export type TDeleteBookProps = {
  bookId: string;
};

export type TEditBookProps = {
  bookId: string;
};

export type THomeProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type TSearchBarProps = {
  searchQuery: string | string[];
};

export type TBookInfoProps = {
  bookId: string;
};
