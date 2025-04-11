import { TLoginRegisterForm } from "@/types/index.types";
import Image from "next/image";
import { FC } from "react";
import logo from "@/public/images/logo.png";
import Link from "next/link";

const LoginRegisterForm: FC<TLoginRegisterForm> = ({ isLogin }) => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="bg-back-2 max-sm:mx-8 max-xs:mx-4! max-sm:w-full rounded-5xl border border-line-1 w-fit flex flex-col items-center p-8 pb-6 pt-12 gap-16 max-sm:gap-12 max-sm:px-4 max-sm:pt-8">
        <div className="flex flex-col items-center gap-4 font-medium text-2xl text-txt-1">
          <Image
            src={logo}
            alt="logo"
            width={70}
            height={70}
            priority
            className="aspect-square"
          />

          <h1>فرم {isLogin ? "ورود" : "ثبت‌نام"}</h1>
        </div>

        <div className="flex flex-col gap-6 max-sm:w-full">
          <form className="flex flex-col gap-4" autoComplete="off">
            <input type="text" placeholder="نام کاربری" className="login-register_input" />

            <input type="password" placeholder="رمز عبور" className="login-register_input" />

            {!isLogin && <input type="password" placeholder="تکرار رمز عبور" className="login-register_input" />}

            <button type="submit" className="bg-btn-1 text-txt-3 font-medium text-xl p-3 rounded-2xl mt-4 hover:opacity-70 transition-all">{isLogin ? "ورود" : "ثبت‌نام"}</button>
          </form>

          {!isLogin ? (
            <Link href="/login" className="login-register_link">حساب کاربری دارید؟</Link>
          ) : (
            <Link href="/register" className="login-register_link">ایجاد حساب کاربری!</Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default LoginRegisterForm;
