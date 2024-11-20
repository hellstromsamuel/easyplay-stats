import React from "react";

import "./CardsList.scss";
import classNames from "classnames";
import { Card, CardProps } from "@/components/ui/Card/Card";

export interface CardsListProps {
  cards: CardProps[];
  flexDirection?: "row" | "column";
  maxWidth?: string;
}

export const CardsList = ({
  cards,
  flexDirection,
  maxWidth,
}: CardsListProps) => {
  const _classNames = classNames("cards-list", {
    "cards-list--flex-rows": flexDirection === "row",
  });
  return (
    <div
      className={_classNames}
      style={{
        maxWidth: maxWidth,
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.title + index} {...card} />
      ))}
    </div>
  );
};
