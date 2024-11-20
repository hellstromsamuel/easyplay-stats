import { CardMock } from "@/components/ui/Card/Card.mocks";
import { CardProps } from "@/components/ui/Card/Card";
import { FrontPage } from "../components/pages/FrontPage/FrontPage";

export default function Home() {
  const cards: CardProps[] = Array.from({ length: 3 }, () => {
    return {
      ...CardMock,
      variant: "bordered",
    };
  });
  return (
    <div>
      <main>
        <FrontPage pageTitle="Test title" cards={cards} />
      </main>
    </div>
  );
}
