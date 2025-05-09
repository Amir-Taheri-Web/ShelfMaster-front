import LoginRegisterForm from "@/modules/LoginRegisterForm";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "شلف‌مستر | ثبت‌نام",
  description: "ثبت‌نام در پنل ادمین شلف‌مستر",
};

const Register = async () => {
  const token: string | undefined = (await cookies()).get("token")?.value;

  if (token) redirect("/");

  return <LoginRegisterForm isLogin={false} />;
};

export default Register;
