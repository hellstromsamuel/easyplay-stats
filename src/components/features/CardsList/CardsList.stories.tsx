import type { Meta, StoryObj } from "@storybook/react";
import { CardsList } from "./CardsList";
import { Bordered as BorderedCard } from "@/components/ui/Card/Card.stories";

const meta = {
  title: "Features/CardsList",
  component: CardsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const With3Cards: Story = {
  args: {
    cards: [
      {
        ...BorderedCard.args,
      },
      {
        ...BorderedCard.args,
      },
      {
        ...BorderedCard.args,
      },
    ],
  },
};
