import type { Meta, StoryObj } from "@storybook/react";
import { CardMock1, CardMock2 } from "@/shared/mocks/Card.mocks";
import { CardsGrid } from "./CardsGrid";

const meta = {
  title: "UI/CardsGrid",
  component: CardsGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: [CardMock1, CardMock2],
  },
};
