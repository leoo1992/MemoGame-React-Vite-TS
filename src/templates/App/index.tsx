import { Card } from "../../components/Card";
import Grids from "../../components/Grid";
import { cards } from "../../data/cards";
import "../../styles/App.css";

export default function App() {
  const handleClick = (id: string) => {
    console.log(id);
  };
  return (
    <div className="flex justify-between items-center text-center gap-2">
      <Grids cards={cards}/>
    </div>
  );
}
