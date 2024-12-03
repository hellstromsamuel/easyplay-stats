import { ICard } from "../interfaces/ICard";

export const CardMock1: ICard = {
  stat: 200,
  title: "Klubber",
  value: "clubs",
};

export const CardMock2: ICard = {
  stat: 19000,
  title: "Aktiviteter i live-kalender",
  value: "live_events",
};

export const CardMocks = [CardMock1, CardMock2];
