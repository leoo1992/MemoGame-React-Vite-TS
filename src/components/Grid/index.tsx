import { CardProps, Card} from "../Card"
import "../../styles/grid.css";

export interface GridProps {
    cards: CardProps[]
}


export default function Grids({cards}: GridProps) {

  return (
    <div className="gride">
      {cards.map((card) => {return <Card key={card.id} {...card}/>}) }
    </div>
  )
}
