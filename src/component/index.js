import { toast } from "react-toastify";


const toastParams= {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
export const errorToast = (msg) => {
  toast.error(msg, toastParams);
};

export const successToast = (msg) => {
  toast.success(msg, toastParams);
};
export const warningToast = (msg) => {
  toast.warn(msg, toastParams);
};
export const infoToast = (msg) => {
  toast.info(msg, toastParams);
};
export const defaultToast = (msg) => {
  toast(msg, toastParams);
};

