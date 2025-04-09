import type { Metadata } from "next";
import "./globals.css";
import vazirFont from "@/utils/fonts";
import { FC } from "react";
import { TLayout } from "@/types/index.types";

export const metadata: Metadata = {
  title: "شلف‌مستر | پنل ادمین",
  description: "مدیریت کتاب فروشگاه و کتابخانه",
  keywords: ["مدیریت", "پنل", "ادمین", "کتاب"],
  icons: [{ rel: "icon", url: "./favicon.ico" }],
  authors: [{ name: "Amir Taheri", url: "https://github.com/Amir-Taheri-Web" }],
};

const RootLayout: FC<TLayout> = ({ children }) => {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={vazirFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
