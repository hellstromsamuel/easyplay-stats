import React from "react";
import { ICard } from "@/shared/interfaces/ICard";
import { Card } from "../Card/Card";

export const CardsGrid = ({ cards }: { cards: ICard[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {cards.map((card) => (
        <Card key={card.value} {...card} />
      ))}
    </div>
  );
};
