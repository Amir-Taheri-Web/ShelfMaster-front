import LoginRegisterForm from "@/modules/LoginRegisterForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Login = async () => {
  const token: string | undefined = (await cookies()).get("token")?.value;

  if (token) redirect("/");

  return <LoginRegisterForm isLogin={true} />;
};

export default Login;
