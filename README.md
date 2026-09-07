# World on the go...

A React + TypeScript app for browsing all 250 countries and tracking the ones you've visited.

**Live site:** [world-on-the-go-by-srabon.netlify.app](https://world-on-the-go-by-srabon.netlify.app/)

## Features

- Browse all countries with flag, official name, continent, capital, currency, and population
- Mark countries as visited and see them collected in a running list
- Live count of total vs. visited countries

## Tech stack

- React + TypeScript
- Vite
- Data from the [Programming Hero Countries API](https://openapi.programming-hero.com/api/all)
- Deployed on Netlify

## Running locally

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build
```

Outputs to `dist/`, which Netlify picks up automatically via the configured build command (`npm run build`) and publish directory (`dist`).
