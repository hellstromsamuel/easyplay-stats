import React from "react";
import { ICollectionStat } from "@/shared/interfaces/ICollectionStat";
import { Card } from "../Card/Card";

export const CardsGrid = ({ cards }: { cards: ICollectionStat[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {cards.map((card) => (
        <Card key={card.value} {...card} />
      ))}
    </div>
  );
};
