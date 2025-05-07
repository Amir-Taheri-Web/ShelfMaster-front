import HomePage from "@/templates/HomePage";
import { TBooksData } from "@/types/index.types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const revalidate = 0;

const Home = async () => {
  const cookieStore = await cookies();
  const token: string | undefined = cookieStore.get("token")?.value;

  if (!token) redirect("/login");

  const username = cookieStore.get("username")?.value || "کاربر";

  const res: Response = await fetch(`${process.env.BASE_URL}/book`);

  if (!res.ok) throw new Error("مشکلی پیش آمده. دوباره امتحان کنید");

  const booksData: TBooksData = await res.json();

  return <HomePage booksData={booksData} username={username} />;
};

export default Home;
