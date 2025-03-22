import { useRef } from "react";
import "./styles.css";

export function Resize() {
  const ref = useRef<HTMLDivElement>(null);
  const onMouseDown = () => {
    document.addEventListener("mousemove", onMouseMove);
  };
  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e: MouseEvent) => {
    const found = document.querySelector(".user_list");

    // @ts-expect-error necessary evil
    found!.style.width = e.clientX + "px";
  };

  return (
    <>
      <div
        ref={ref}
        className="resize"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      ></div>
    </>
  );
}
