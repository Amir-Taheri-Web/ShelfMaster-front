"use server";
import { p2e } from "@/utils/convert";
import { priceValidation, quantityValidation } from "@/utils/validation";
import DOMPurify from "isomorphic-dompurify";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const addBookAction = async (
  prevState: { label: string; message: string },
  formData: FormData
) => {
  const { title, author, summery, quantity, price } = {
    title: DOMPurify.sanitize(formData.get("title") as string).trim(),
    author: DOMPurify.sanitize(formData.get("author") as string).trim(),
    summery: DOMPurify.sanitize(formData.get("summery") as string).trim(),
    quantity: DOMPurify.sanitize(formData.get("quantity") as string).trim(),
    price: DOMPurify.sanitize(formData.get("price") as string).trim(),
  };

  if (!title || title.length < 3 || title.length > 50)
    return { label: "error", message: "عنوان باید بین ۳ تا ۵۰ کاراکتر باشد" };

  if (!author || author.length < 3 || author.length > 30)
    return {
      label: "error",
      message: "نام نویسنده باید بین ۳ تا ۳۰ کاراکتر باشد",
    };

  if (!summery || summery.length < 10 || summery.length > 500)
    return { label: "error", message: "خلاصه باید بین ۱۰ تا ۵۰۰ کاراکتر باشد" };

  if (!quantityValidation(p2e(quantity)))
    return { label: "error", message: "تعداد باید عدد و بین ۱ تا ۳۰۰ باشد" };

  if (!priceValidation(p2e(price)))
    return {
      label: "error",
      message: "قیمت محصول باید عدد و بین ۱۰۰۰ تومان تا ۱۰۰ میلیون تومان باشد",
    };

  const token: string = (await cookies()).get("token")?.value || "";

  if (!token) return { label: "error", message: "" };

  try {
    const res: Response = await fetch(`${process.env.BASE_URL}/book`, {
      body: JSON.stringify({ title, author, summery, quantity, price }),
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `BearerAuth ${token}`,
      },
    });

    await res.json();

    revalidatePath("/");
    return { label: "success", message: "کتاب افزوده شد" };
  } catch (error) {
    return {
      label: "error",
      message: "مشکلی در افزودن کتاب پیش آمده. دوباره امتحان کنید",
    };
  }
};

const deleteBookAction = async (prevState: {
  label: string;
  message: string;
  bookId: string;
}) => {
  const token: string = (await cookies()).get("token")?.value || "";

  try {
    const res: Response = await fetch(
      `${process.env.BASE_URL}/book/${prevState.bookId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `BearerAuth ${token}`,
        },
      }
    );
    await res.json();

    revalidatePath("/");
    return { bookId: "", label: "success", message: "کتاب حذف شد" };
  } catch (error) {
    return {
      ...prevState,
      label: "error",
      message: "مشکلی در حذف کتاب پیش آمده. لطفا دوباره امتحان کنید",
    };
  }
};

export { addBookAction, deleteBookAction };
