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

export type TBooks = {
  id: string;
  title: string;
  summary: string;
  author: string;
  price: number;
  quantity: number;
}[];

export type THomePageProps = {
  booksData: TBooksData;
  username: string;
};

export type TBookListProps = {
  books: TBooks;
};

export type THeaderProps = {
  username: string;
};

export type TDeleteBookProps = {
  bookId: string;
};
