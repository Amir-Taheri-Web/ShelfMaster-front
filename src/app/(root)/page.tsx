import HomePage from "@/templates/HomePage";
import { TBooksData, THomeProps } from "@/types/index.types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FC } from "react";

export const revalidate = 0;

const Home: FC<THomeProps> = async ({ searchParams }) => {
  const cookieStore = await cookies();
  const token: string | undefined = cookieStore.get("token")?.value;

  if (!token) redirect("/login");

  const username = cookieStore.get("username")?.value || "کاربر";

  const searchParamsValues = await searchParams;

  const searchQuery: string | string[] | undefined = searchParamsValues?.search;
  const title: string = !!searchQuery ? `title=${searchQuery}` : "";

  const pageQuery: string | string[] | undefined = searchParamsValues?.page;
  const pageNumber: string = !!pageQuery ? `page=${pageQuery}` : "";

  const res: Response = await fetch(
    `${process.env.BASE_URL}/book${
      pageQuery || searchQuery ? "?" : ""
    }${title}${pageQuery && searchQuery ? "&" : ""}${pageNumber}`
  );

  const booksData: TBooksData = await res.json();

  return (
    <HomePage
      booksData={booksData}
      username={username}
      searchQuery={searchQuery || ""}
      pageQuery={pageQuery || ""}
    />
  );
};

export default Home;
