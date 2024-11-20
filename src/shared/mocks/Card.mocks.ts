import { ICard } from "../interfaces/ICard";

export const CardMock: ICard = {
  title: "Test title",
  content:
    "Test content here please. Is going to be quite longer than the title.",
};

export const CardMockLongContent: ICard = {
  title: "Test title long content",
  content:
    "Nullam nec turpis et arcu egestas commodo. Integer sit amet metus non tortor tincidunt interdum. Donec et metus mollis, ultricies est at, ultricies nulla. Morbi non libero magna. Praesent imperdiet magna ac ipsum cursus, ut fermentum turpis tincidunt.",
};
