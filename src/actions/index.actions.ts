"use server";

import { passwordValidation } from "@/utils/validation";
import DOMPurify from "isomorphic-dompurify";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

const registerAction = async (
  prevState: { label: string; message: string },
  formData: FormData
) => {
  const { username, password, repeatPassword } = {
    username: DOMPurify.sanitize(formData.get("username") as string).trim(),
    password: DOMPurify.sanitize(formData.get("password") as string).trim(),
    repeatPassword: DOMPurify.sanitize(
      formData.get("repeatPassword") as string
    ).trim(),
  };

  if (!username && !password)
    return { label: "inputs", message: "نام کاربری و رمز عبور اجباری است" };

  if (!username) return { label: "username", message: "نام کاربری اجباری است" };
  if (!password) return { label: "password", message: "رمز عبور اجباری است" };

  if (username.length < 3 || username.length > 20)
    return {
      label: "username",
      message: "نام کاربری باید حداقل ۳ حرف و حداکثر ۲۰ حرف باشد",
    };

  if (!passwordValidation(password))
    return {
      label: "password",
      message:
        "رمز عبور باید حداقل ۸ کاراکتر با حروف لاتین کوچک و بزرگ، عدد و کاراکترهای !@#$%^&*()... باشد",
    };

  if (password !== repeatPassword)
    return { label: "password", message: "رمز عبور و تکرار آن یکی نیستند" };

  try {
    const response: Response = await fetch(
      `${process.env.BASE_URL}/auth/register`,
      {
        body: JSON.stringify({
          username,
          password,
        }),
        method: "POST",
        headers: { "content-type": "application/json" },
      }
    );

    const result = await response.json();

    if (result.message && result.message === "User already exists")
      return { label: "error", message: "کاربر وجود دارد" };

    return { label: "success", message: "ثبت‌نام انجام شد" };
  } catch (error: any) {
    console.log(error);
    return { label: "error", message: "کاربر وجود دارد" };
  }
};

const loginAction = async (
  prevState: { label: string; message: string },
  formData: FormData
) => {
  const { username, password } = {
    username: DOMPurify.sanitize(formData.get("username") as string).trim(),
    password: DOMPurify.sanitize(formData.get("password") as string).trim(),
  };

  if (!username && !password)
    return { label: "inputs", message: "نام کاربری و رمز عبور اجباری است" };

  if (!username) return { label: "username", message: "نام کاربری اجباری است" };
  if (!password) return { label: "password", message: "رمز عبور اجباری است" };

  if (username.length < 3 || username.length > 20)
    return {
      label: "username",
      message: "نام کاربری باید حداقل ۳ حرف و حداکثر ۲۰ حرف باشد",
    };

  if (!passwordValidation(password))
    return {
      label: "password",
      message:
        "رمز عبور باید حداقل ۸ کاراکتر با حروف لاتین کوچک و بزرگ، عدد و کاراکترهای !@#$%^&*()... باشد",
    };

  try {
    const response: Response = await fetch(
      `${process.env.BASE_URL}/auth/login`,
      {
        body: JSON.stringify({
          username,
          password,
        }),
        method: "POST",
        headers: { "content-type": "application/json" },
      }
    );

    const result = await response.json();

    if (!result.token)
      return { label: "error", message: "نام کاربری یا رمز عبور اشتباه است" };

    (await cookies()).set({
      name: "token",
      value: result.token,
      httpOnly: false,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return { label: "success", message: "ورود انجام شد" };
  } catch (error: any) {
    console.log(error);
    return { label: "error", message: "نام کاربری یا رمز عبور اشتباه است" };
  }
};

const logoutAction = async () => {
  (await cookies()).delete("token");
  redirect("/", "replace" as RedirectType);
};

export { registerAction, loginAction, logoutAction };
