import "../../styles/card.css";

export interface CardProps {
  flipped?: boolean;
  back: string;
  id: string;
  handleClick?: (id: string) => void;
}

export function Card({ flipped = false, back, handleClick, id }: CardProps) {
  const cardContentClassNames = ["card__content"];
  flipped && cardContentClassNames.push("card__content--fliped");

  const handleClickFn = (id:string) => {
      if (handleClick) {
        handleClick(id);
      }
  }

  return (
    <div className={`card rounded-lg`} onClick={() => handleClickFn(id)}>
      <div className={`${cardContentClassNames.join(" ")}`}>
        <div
          className={`
          card__front card__face bg-orange-700 rounded-lg w-full h-full
           hover:bg-orange-500
           shadow-md shadow-orange-600
           `}
        >
          ?
        </div>
        <div
          className={`
          card__back card__face bg-blue-600 rounded-lg w-full h-full 
           hover:bg-blue-400
           shadow-xl shadow-blue-500
           `}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
