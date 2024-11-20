import React from "react";
import "./FrontPage.scss";
import { CardProps } from "@/components/ui/Card/Card";
import { CardsList } from "@/components/features/CardsList/CardsList";

interface FrontPageProps {
  pageTitle: string;
  cards: CardProps[];
}

export const FrontPage: React.FC<FrontPageProps> = ({ pageTitle, cards }) => {
  return (
    <article className="front-page">
      <h1>Front page</h1>
      <section>
        <h2>{pageTitle}</h2>
        <CardsList cards={cards} />
      </section>
    </article>
  );
};
