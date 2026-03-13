# GameScout 🎮

A modern, responsive game discovery web app built with React and TypeScript. Browse thousands of games, filter by genre and platform, search by name, and dive deep into game details — all powered by the RAWG Video Games Database API.

## 🚀 Live Demo
[View Live](https://gamescout-alpha.vercel.app/)

## 📸 Preview
> Browse and discover games with a clean dark/light UI, platform icons, critic scores, trailers, and screenshots.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** + **TypeScript** | Core framework |
| **Chakra UI** | Component library & theming |
| **TanStack Query** | Data fetching & caching |
| **Zustand** | Global state management |
| **React Router DOM** | Client-side routing |
| **Axios** | HTTP requests |
| **React Infinite Scroll** | Infinite pagination |
| **React Icons** | Platform & UI icons |
| **Vite** | Build tool |
| **Vercel Analytics** | Usage tracking |

## ✨ Features

- 🔍 **Search** — Find any game instantly by name
- 🎯 **Filter by Genre** — Browse Action, RPG, Strategy, and more from the sidebar
- 🖥️ **Filter by Platform** — Filter games by PC, PlayStation, Xbox, Nintendo, and more
- 📊 **Sort Games** — Sort by relevance, date added, name, release date, popularity, or rating
- ♾️ **Infinite Scroll** — Seamlessly loads more games as you scroll
- 🎬 **Game Trailers** — Watch official trailers directly on the detail page
- 📷 **Screenshots** — Browse in-game screenshots for each title
- ⭐ **Critic Scores** — Metacritic scores displayed on every game card
- 📄 **Game Details** — Full description, publishers, genres, platforms, and more
- 🌙 **Dark / Light Mode** — Toggle between themes
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🔲 **Skeleton Loading** — Smooth loading states with skeleton cards

## 🏃 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/maeez/GameScout.git
cd gamescout
```

2. **Install dependencies**
```bash
npm install
```

3. **Get a RAWG API key**
   - Create an account at [rawg.io](https://rawg.io/apidocs)
   - Copy your API key

4. **Add your API key**
   - Open `src/services/api-client.ts`
   - Replace the key value with your own:
```ts
params: {
  key: 'YOUR_API_KEY_HERE',
}
```

5. **Start the development server**
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── GameCard      # Individual game card with score & platforms
│   ├── GameGrid      # Infinite scroll game grid
│   ├── GenreList     # Sidebar genre filter
│   ├── GameTrailer   # Embedded game trailer
│   ├── GameScreenshots # Screenshot gallery
│   └── ...
├── pages/            # Page components
│   ├── HomePage      # Main browse page
│   ├── GameDetailPage # Game detail view
│   └── ErrorPage     # Error boundary page
├── hooks/            # Custom React Query hooks
├── services/         # Axios API client
├── entities/         # TypeScript interfaces
├── data/             # Static genre & platform data
└── store.ts          # Zustand global state
```

