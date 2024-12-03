import Header from "@/components/Header/Header";
import SearchAndCards from "@/components/SearchAndCards/SearchAndCards";
import { CardMocks } from "@/shared/mocks/Card.mocks";

export default function Home() {
  const cards = CardMocks;
  return (
    <main className="min-w-screen min-h-screen pt-24 flex flex-col justify-center">
      <Header />
      <SearchAndCards cards={cards} />
    </main>
  );
}
