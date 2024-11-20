import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { CardMock } from "@/shared/mocks/Card.mocks";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unstyled: Story = {
  args: {
    ...CardMock,
  },
};

export const Shadow: Story = {
  args: {
    ...CardMock,
    variant: "shadow",
  },
};

export const Bordered: Story = {
  args: {
    ...CardMock,
    variant: "bordered",
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    ...CardMock,
    backgroundColor: "lightgray",
  },
};
