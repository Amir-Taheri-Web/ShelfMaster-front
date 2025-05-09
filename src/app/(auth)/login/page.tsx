import LoginRegisterForm from "@/modules/LoginRegisterForm";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "شلف‌مستر | ورود",
  description: "ورود به پنل ادمین شلف‌مستر",
};

const Login = async () => {
  const token: string | undefined = (await cookies()).get("token")?.value;

  if (token) redirect("/");

  return <LoginRegisterForm isLogin={true} />;
};

export default Login;
