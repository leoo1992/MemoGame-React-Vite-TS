import Grids from "../../components/Grid";
import { cards } from "../../data/cards";

export default function App() {
  // const handleClick = (id: string) => {
  //   console.log(id);
  // };
  return (
    <div className="flex flex-col w-screen h-screen 
    bg-gradient-to-br from-red-100 via-sky-50 to-blue-100
     m-0 p-0">
      <Grids cards={cards}/>
    </div>
  );
}
