import { useRef } from "react";
import "./styles.css";

export function Resize() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseDown = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };
  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    const l = document.querySelector(".user_list");
    const r = document.querySelector(".profile_container");

    // @ts-expect-error necessary evil
    l!.style.width = e.clientX + "px";
    // @ts-expect-error necessary evil
    r!.style.width = `${window.innerWidth - e.clientX}px`;
    console.log(r);
  };

  return (
    <div
      ref={ref}
      className="resize"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    />
  );
}
