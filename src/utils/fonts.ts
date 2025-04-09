import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const vazirFont: NextFont = localFont({
  src: [
    {
      path: "../app/fonts/Vazir-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../app/fonts/Vazir-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/fonts/Vazir-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/Vazir-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/Vazir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/fonts/Vazir-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default vazirFont;
