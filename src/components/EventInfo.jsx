import { Children } from "react";

export default function EventInfo({ children, inline = false }) {
  return (
    <div
      className={`event-info${inline ? " event-info-inline" : ""}`}
      style={{ "--event-info-columns": Children.count(children) }}
    >
      {children}
    </div>
  );
}

export function EventInfoItem({ icon, children }) {
  return (
    <div className={`event-info-item${icon ? "" : " event-info-item-custom"}`}>
      {icon ? <><i className={`fa-solid ${icon}`} aria-hidden="true"></i><div>{children}</div></> : children}
    </div>
  );
}
