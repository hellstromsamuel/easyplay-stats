import React from "react";

import "./Card.scss";
import classNames from "classnames";
import { ICard } from "@/shared/interfaces/ICard";

export interface CardProps extends ICard {
  variant?: "unstyled" | "shadow" | "bordered";
  backgroundColor?: string;
}

export const Card = ({
  title,
  content,
  variant = "unstyled",
  backgroundColor,
}: CardProps) => {
  const _classNames = classNames("card", {
    "card--shadow": variant === "shadow",
    "card--bordered": variant === "bordered",
  });
  return (
    <div className={_classNames} style={{ backgroundColor }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
