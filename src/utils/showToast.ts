import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";

const showToastError = (message: string): void => {
  toast.error(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    bodyClassName: "text-center text-sm primary-font",
  });
};

const showToastSuccess = (message: string): void => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    bodyClassName: "text-center text-sm primary-font",
  });
};

const showToastWarning = (message: string): void => {
  toast.warn(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    bodyClassName: "text-center text-sm primary-font",
  });
};

export { showToastError, showToastSuccess, showToastWarning };
