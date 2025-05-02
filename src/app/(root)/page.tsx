import HomePage from "@/templates/HomePage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {
    const token: string | undefined = (await cookies()).get("token")?.value;
  
    if (!token) redirect("/login");

  return <HomePage />;
};

export default Home;
