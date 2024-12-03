import React from "react";
import { ICollectionStat } from "@/shared/interfaces/ICollectionStat";

export const Card = ({ stat, title }: ICollectionStat) => {
  return (
    <div className="border flex flex-col gap-2 p-8 shadow-lg rounded-3xl text-center bg-white">
      <h2>{stat}</h2>
      <p>{title}</p>
    </div>
  );
};
