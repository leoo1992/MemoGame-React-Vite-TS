import { useEffect } from "react";
import Grids from "../../components/Grid";
import { cards } from "../../data/cards";

export default function App() {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "F12") {
        event.preventDefault();
      }
    }

    function handleWheel(event: WheelEvent) {
      event.preventDefault();
    }

    function handleContextMenu(event: MouseEvent) {
      event.preventDefault();
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("contextmenu", handleContextMenu);

    console.warn = () => {};
    console.info = () => {};
    console.error = () => {};
    console.log = () => {};

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div
      className="flex flex-col w-screen h-screen m-0 p-0
    bg-gradient-to-br from-red-100 via-sky-50 to-blue-100"
    >
      <Grids cards={cards} />
    </div>
  );
}
