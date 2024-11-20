import React from "react";

import "./CardsList.scss";
import classNames from "classnames";
import { Card, CardProps } from "@/components/ui/Card/Card";

export interface CardsListProps {
  cards: CardProps[];
  flexDirection?: "row" | "column";
}

export const CardsList = ({ cards, flexDirection }: CardsListProps) => {
  const _classNames = classNames("cards-list", {
    "cards-list--flex-rows": flexDirection === "row",
  });
  return (
    <div className={_classNames}>
      {cards.map((card, index) => (
        <Card key={card.title + index} {...card} />
      ))}
    </div>
  );
};
