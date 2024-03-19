import { CardProps } from "../components/Card";

const keyGenarator = ():string => {
 return (Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15))
}

export const  duplicateArray = <T>(array: T[]) => {
    return [...array, ...array];
}

export const sortArray = <T>(array: T[]) => {
    return array.sort(() => Math.random() - 0.5);
}

export const regenerateCard = (cards: CardProps[]): CardProps[] => {
    return cards.map((card) => ({ ...card, id: keyGenarator() }));
}

export const arrayAdjusted = (cards: CardProps[]): CardProps[] => {

return sortArray(regenerateCard(duplicateArray(cards)));
}