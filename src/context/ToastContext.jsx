import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export const ToastContext = createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const open = (component, timeout = 5000) => {
    const id = Date.now();
    setToasts((toasts) => [...toasts, { id, component, isVisible: true }]);
    setTimeout(() => close(id), timeout);
  };

  const close = (id) => {
    setToasts((toasts) =>
      toasts.map((toast) => {
        if (id === toast.id) {
          return { ...toast, isVisible: false };
        }
        return toast;
      })
    );
    setTimeout(() => {
      setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
    }, 400);
  };

  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div className="space-y-2 absolute flex flex-col bottom-4 right-4">
        {toasts.map(({ id, component, isVisible }) => (
          <div
            key={id}
            className={`relative transition-all duration-1000 z-[100] ${
              isVisible ? "animate-alertEnter" : "animate-alertClose"
            }`}
          >
            <button
              className="absolute top-2 right-2 p-1 rounded-lg bg-gray-200/50 text-black z-[101]"
              onClick={() => close(id)}
            >
              <IoMdCloseCircle size={16} />
            </button>
            {component}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.element
};
