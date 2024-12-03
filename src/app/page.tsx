import { getStatsFromApi } from "@/api/getStatsFromApi";
import Header from "@/components/Header/Header";
import SearchAndCards from "@/components/SearchAndCards/SearchAndCards";

export default async function Home() {
  const stats = await getStatsFromApi();

  const baseUrl = process.env.EASYPLAY_API_BASE_URL;
  const endpoint = `${baseUrl}/stats`;

  return (
    <main className="min-w-screen min-h-screen pt-24 flex flex-col justify-center">
      <Header />
      <SearchAndCards cards={stats} endpoint={endpoint} />
    </main>
  );
}
