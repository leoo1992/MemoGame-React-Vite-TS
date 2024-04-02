import { CardProps, Card } from "../Card";
import "../../styles/grid.css";
import { arrayAdjusted } from "../../utils/cards-util";
import { useEffect, useRef, useState } from "react";

export interface GridProps {
  cards: CardProps[];
}

export default function Grids({ cards }: GridProps) {
  const [stateCards, setStateCards] = useState(() => {
    return arrayAdjusted(cards);
  });
  const [matches, setMatches] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const first = useRef<CardProps | null>(null);
  const second = useRef<CardProps | null>(null);
  const unflip = useRef<boolean>(false);

  const handleClose = () => {
    setStateCards(arrayAdjusted(cards));
    first.current = null;
    second.current = null;
    unflip.current = false;
    setMatches(0);
    setMoves(0);
    setOpen(false);
  };

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      if (card.id !== id) return card;
      if (card.flipped) return card;

      if (unflip.current && first.current && second.current) {
        first.current.flipped = false;
        second.current.flipped = false;
        first.current = null;
        second.current = null;
        unflip.current = false;
      }

      card.flipped = true;

      if (first.current === null) {
        first.current = card;
      } else if (second.current === null) {
        second.current = card;
      }

      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          first.current = null;
          second.current = null;
          setMatches((match) => match + 1);
        } else {
          unflip.current = true;
        }
        setMoves((moves) => moves + 1);
      }

      return card;
    });
    setStateCards(newStateCards);
  };

  const handleHideAll = () => {
    const newStateCards = stateCards.map((card) => {
      card.flipped = false;
      first.current = null;
      second.current = null;
      unflip.current = false;
      return card;
    });
    setStateCards(newStateCards);
  };

  const resetGame = () => {
    setStateCards(arrayAdjusted(cards));
    first.current = null;
    second.current = null;
    unflip.current = false;
    setMatches(0);
    setMoves(0);
  };

  useEffect(() => {
    if (matches === cards.length) {
      setOpen(true);
    }
  }, [matches, cards.length]);

  return (
    <>
      <div className="text-center font-bold p-0 m-0 ">
        <div className="pb-1 mt-5 pt-5">
          <h1 className="text-3xl text-blue-800 m-0 p-0">Jogo da Memória</h1>
        </div>
        <div
          className="pt-1 pb-0 m-0 flex justify-center align-middle content-center 
        text-center font-lg rounded-lg w-auto"
        >
          <p
            className="
        text-game text-sm text-blue-800 bg-orange-400 p-1 shadow-orange-500
        rounded-lg shadow-md hover:shadow-blue-700 hover:bg-blue-700 hover:text-yellow-100
        "
          >
            Acertos: {matches} de {cards.length} | Jogadas: {moves}
          </p>
        </div>
        <div className="flex gap-x-2 mb-1 mt-0 p-0 justify-center align-center content-center items-center self-center align-middle">
          <button
            className={`
            mt-5 shadow-md shadow-blue-600 border-0 bg-blue-600
            hover:text-blue-900 hover:bg-orange-400 text-yellow-100 
            font-bold py-1 px-3 m-0 rounded-lg hover:shadow-orange-700
             `}
            onClick={() => resetGame()}
          >
            Reiniciar
          </button>
          <button
            className={`
            mt-5 shadow-md shadow-blue-600 border-0 bg-blue-600
            hover:text-blue-900  hover:bg-orange-400 text-yellow-100
            font-bold py-1 px-3 m-0 rounded-lg hover:shadow-orange-700
              `}
            onClick={handleHideAll}
          >
            Ocultar tudo
          </button>
        </div>
      </div>

      <div className="gride w-screen p-2 bg-transparent flex-wrap">
        {stateCards.map((card) => {
          return <Card key={card.id} {...card} handleClick={handleClick} />;
        })}
      </div>

      {open && (
        <div
          onClick={handleClose}
          className="fixed top-0 left-0 w-full h-full bg-blue-500 bg-opacity-60 flex justify-center items-center text-center"
        >
          <div className="bg-orange-500 font-bold p-8 rounded-lg shadow-xl shadow-blue-800">
            <h1 className="text-3xl text-blue-800 font-extrabold mb-4">
              Jogo finalizado!
            </h1>
            <p className="pt-4 mb-8 text-xl text-blue-800">
              Jogadas: <span className="text-white p-1">{moves}</span>
            </p>
            <div className="flex justify-center align-middle content-center">
              <button
                className="bg-blue-600 font-bold shadow-blue-500 shadow-md text-white px-5 py-3 rounded-xl hover:bg-blue-900 hover:shadow-xl hover:shadow-blue-500"
                onClick={handleClose}
              >
                Jogar novamente
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
