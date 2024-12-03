"use client";

import { ICollectionStat } from "@/shared/interfaces/ICollectionStat";
import { CardsGrid } from "../CardsGrid/CardsGrid";
import { useMemo, useState } from "react";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  cards: ICollectionStat[];
}

function SearchAndCards({ cards }: Props) {
  const [search, setSearch] = useState("");

  const filteredCards = useMemo(() => {
    if (!search) return cards;
    return cards.filter((card) => card.title.includes(search));
  }, [search]);

  return (
    <div className="p-6 md:p-8 flex flex-col items-center gap-6 md:gap-8">
      <SearchInput value={search} setValue={setSearch} />
      {filteredCards.length === 0 && (
        <p className="py-4 text-xl">Fant ingen stats med tittel '{search}'</p>
      )}
      <CardsGrid cards={filteredCards} />
    </div>
  );
}

export default SearchAndCards;
