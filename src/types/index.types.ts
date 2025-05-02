export type TLayout = Readonly<{
  children: React.ReactNode;
}>;

export type TLoginRegisterForm = {
  isLogin: boolean;
};

export type TLoginFormActionState = {
  label: "" | "username" | "password" | "success" | "error" | "inputs";
  message: string;
};
