import React from "react";
import { ICollectionStat } from "@/shared/interfaces/ICollectionStat";

export const Card = ({ stat, title }: ICollectionStat) => {
  return (
    <div className="bg-[#00be87] text-white flex flex-col gap-2 px-4 py-6 rounded-3xl text-center">
      <h2>{stat}</h2>
      <p>{title}</p>
    </div>
  );
};
