import HomePage from "@/templates/HomePage";
import { TBooksData } from "@/types/index.types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const revalidate = 0;

const Home = async () => {
  const token: string | undefined = (await cookies()).get("token")?.value;

  if (!token) redirect("/login");

  const res: Response = await fetch(`${process.env.BASE_URL}/book`);

  if (!res.ok) throw new Error("مشکلی پیش آمده. دوباره امتحان کنید");

  const booksData: TBooksData = await res.json();

  return <HomePage booksData={booksData} />;
};

export default Home;
