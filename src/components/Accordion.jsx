import { useLayoutEffect, useRef, useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const panelRef = useRef(null);

  useLayoutEffect(() => {
    setMaxHeight(open && panelRef.current ? panelRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <>
      <button
        className={`accordion free-stuff${open ? " active" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        {title}
      </button>
      <div
        ref={panelRef}
        className="panel"
        style={{
          maxHeight: `${maxHeight}px`,
          padding: open ? "0 15px 15px 15px" : "0 15px",
          overflowY: open ? "auto" : undefined,
        }}
      >
        <p>{children}</p>
      </div>
    </>
  );
}
