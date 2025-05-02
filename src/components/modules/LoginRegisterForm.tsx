"use client";

import { TLoginRegisterForm } from "@/types/index.types";
import Image from "next/image";
import { FC, useActionState, useEffect } from "react";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { loginAction, registerAction } from "@/actions/index.actions";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginRegisterForm: FC<TLoginRegisterForm> = ({ isLogin }) => {
  const [message, formAction, isPending] = useActionState(
    isLogin ? loginAction : registerAction,
    { label: "", message: "" }
  );
  const router = useRouter();

  useEffect(() => {
    console.log(message);
    if (message.label && message.label === "success") {
      toast.success(message.message);

      if (isLogin) router.replace("/");
      if (!isLogin) router.push("/login");
    }
  }, [message]);

  return (
    <main className="w-screen min-h-screen py-8 flex items-center justify-center">
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
          <form
            className="flex flex-col gap-3"
            autoComplete="off"
            action={formAction}
          >
            <div className="error-wrapper">
              <input
                type="text"
                name="username"
                placeholder="نام کاربری"
                className={cn("login-register_input", {
                  "pointer-events-none opacity-50": isPending,
                })}
              />

              <p className="error-message">
                {message.label &&
                  (message.label === "username" ||
                    message.label === "inputs") &&
                  message.message}
              </p>
            </div>

            <div className="error-wrapper">
              <input
                type="password"
                name="password"
                placeholder="رمز عبور"
                className={cn("login-register_input", {
                  "pointer-events-none opacity-50": isPending,
                })}
              />

              <p className="error-message">
                {message.label &&
                  (message.label === "password" ||
                    message.label === "inputs") &&
                  message.message}
              </p>
            </div>

            {!isLogin && (
              <div className="error-wrapper">
                <input
                  type="password"
                  name="repeatPassword"
                  placeholder="تکرار رمز عبور"
                  className={cn("login-register_input", {
                    "pointer-events-none opacity-50": isPending,
                  })}
                />

                <p className="error-message">
                  {message.label &&
                    (message.label === "password" ||
                      message.label === "inputs") &&
                    message.message}
                </p>
              </div>
            )}

            <div className="error-wrapper">
              <button
                type="submit"
                className={cn(
                  "bg-btn-1 text-txt-3 font-medium text-xl p-3 rounded-2xl mt-2 hover:opacity-70 transition-all",
                  { "pointer-events-none opacity-50": isPending }
                )}
              >
                {isLogin ? "ورود" : "ثبت‌نام"}
              </button>

              <p className="error-message">
                {message.label && message.label === "error" && message.message}
              </p>
            </div>
          </form>

          {!isLogin ? (
            <Link href="/login" className="login-register_link">
              حساب کاربری دارید؟
            </Link>
          ) : (
            <Link href="/register" className="login-register_link">
              ایجاد حساب کاربری!
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default LoginRegisterForm;
