import React from "react";
import { ICard } from "@/shared/interfaces/ICard";

export const Card = ({ stat, title }: ICard) => {
  return (
    <div className="border flex flex-col gap-2 p-8 shadow-lg rounded-3xl text-center bg-white">
      <h2>{stat}</h2>
      <p>{title}</p>
    </div>
  );
};
