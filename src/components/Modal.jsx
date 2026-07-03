import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, title, children }) {
  const [mounted, setMounted] = useState(open);
  const [closing, setClosing] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (open) {
      clearTimeout(timer.current);
      setMounted(true);
      setClosing(false);
    }
  }, [open]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleClose = () => {
    setClosing(true);
    timer.current = setTimeout(() => {
      setMounted(false);
      setClosing(false);
      onClose();
    }, 500);
  };

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        id="mask"
        onClick={handleClose}
        className={`animate__animated ${
          closing ? "animate__fadeOut" : "animate__fadeIn"
        } animate__faster`}
        style={{ display: "block" }}
      ></div>
      <div
        className={`modal ${closing ? "modal-out" : "modal-in"}`}
        style={{ display: "block" }}
      >
        <button className="close" onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3>{title}</h3>
        {children}
      </div>
    </>,
    document.body
  );
}
