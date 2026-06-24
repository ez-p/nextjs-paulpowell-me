# paulpowell.me

Professional portfolio site built with [Next.js](https://nextjs.org/), React, and Tailwind CSS. Includes an AI chat widget powered by the OpenAI API.

## Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm (included with Node.js)

## Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/ez-p/nextjs-paulpowell-me.git
cd nextjs-paulpowell-me
npm install
```

## Environment variables

The chat feature requires an OpenAI API key. Create a `.env.local` file in the project root:

```bash
OPENAI_API_KEY=your_api_key_here
```

Next.js loads variables from `.env.local` automatically during development and production builds. The rest of the site works without this variable; the chat widget will return an error if the key is missing.

## Run locally

Start the development server with hot reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build and run for production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The app serves on [http://localhost:3000](http://localhost:3000) by default.

## Other scripts

```bash
npm run lint   # Run ESLint
```

## Deployment

Deployed to Vercel and available at:

- https://www.paulpowell.me/
- https://nextjs-paulpowell-me.vercel.app/

Set `OPENAI_API_KEY` in the Vercel project environment variables for the chat feature to work in production.
