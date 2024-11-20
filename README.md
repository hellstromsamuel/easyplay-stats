# Next.js Storybook template

This is a template for a Next.js App Router project with Storybook

## Setup

- Clone this project, or
- Create new Next.js project and add Storybook

```bash
npx create-next-app@latest
npx storybook@latest init
```

## Run project locally

Development server

```bash
npm run dev
```

Storybook

```bash
npm run storybook
```

## Folder structure

```bash
src/
├── app/ # Next.js routes and app-specific code
├── components/ # React components
│   ├── features/ # Feature-specific components
│   ├── pages/ # Page-level components
│   └── ui/ # Reusable UI components
├── shared/ # Shared utilities and types
│   ├── interfaces/ #  TypeScript interface definitions
│   └── mocks/ # Mock data for testing and development
└── storybook/ # Storybook configuration and examples
```

## Deployment

- You can deploy your Storybook with Chromatic
- [Deploy Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/deploy/)

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
