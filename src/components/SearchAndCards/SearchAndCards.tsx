"use client";

import { ICollectionStat } from "@/shared/interfaces/ICollectionStat";
import { CardsGrid } from "../CardsGrid/CardsGrid";
import { useMemo, useState } from "react";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  cards: ICollectionStat[];
  endpoint: string;
}

function SearchAndCards({ cards, endpoint }: Props) {
  const [search, setSearch] = useState("");

  const filteredCards = useMemo(() => {
    if (!search) return cards;
    return cards.filter((card) =>
      card.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, cards]);

  return (
    <div className="mt-20 p-6 md:p-8 flex flex-col items-center gap-6 md:gap-8 w-full mx-auto max-w-7xl">
      <div className="grid gap-4 w-full">
        <p className="w-full text-left px-4">{endpoint}</p>
        <SearchInput value={search} setValue={setSearch} />
      </div>
      {filteredCards.length === 0 && <p>Ikke funnet</p>}
      <CardsGrid cards={filteredCards} />
    </div>
  );
}

export default SearchAndCards;
