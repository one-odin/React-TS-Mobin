import { showToastSuccess } from "./showToast";

export const handleCopy = (password: string): void => {
    navigator.clipboard.writeText(password);
    showToastSuccess("رمز عبور کپی شد");
  };