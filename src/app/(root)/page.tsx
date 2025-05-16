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

  const searchQuery = (await searchParams)?.search;

  const title: string = !!searchQuery ? `?title=${searchQuery}` : "";

  const res: Response = await fetch(`${process.env.BASE_URL}/book${title}`);

  const booksData: TBooksData = await res.json();

  return <HomePage booksData={booksData} username={username} searchQuery={searchQuery || ""} />;
};

export default Home;
