import { useRef } from "react";
import { useState } from "react";

export default function Toasts() {
  const [toast, setToast] = useState([]);
  const toastRef = useRef([]);

  const handleToast = (type, message) => {
    const id = new Date().getTime();
    const newToasts = [...toast, { id, type, message }];
    setToast(newToasts);
    toastRef.current[id] = setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id) => {
    clearTimeout(toastRef.current[id]);
    delete toastRef.current[id];
    setToast((prevToast) => {
      const filteredArray = prevToast.filter((toast) => toast.id !== id);
      return filteredArray;
    });
  };

  return (
    <div className="main-toast">
      <div className="toast-container">
        {toast.map(({ id, type, message }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => removeToast(id)}>X</span>
            </div>
          );
        })}
      </div>
      <button onClick={() => handleToast("success", "Success")}>Success</button>
      <button onClick={() => handleToast("info", "Info")}>Info</button>
      <button onClick={() => handleToast("warning", "Warn")}>Warn</button>
      <button onClick={() => handleToast("error", "Error")}>Error</button>
    </div>
  );
}
