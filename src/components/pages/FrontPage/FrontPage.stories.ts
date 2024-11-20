import type { Meta, StoryObj } from "@storybook/react";
import { FrontPage } from "./FrontPage";

const meta = {
  title: "Pages/FrontPage",
  component: FrontPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FrontPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageTitle: "Test title",
    cards: [
      {
        title: "Test card",
        content:
          "Test content here please. Is going to be quite longer than the title.",
        variant: "bordered",
      },
    ],
  },
};
