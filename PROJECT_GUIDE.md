# 🎯 Darts Tracker — Project Guide

A full-stack web application for tracking darts games, managing players, organizing tournaments, and analyzing statistics.

---

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React 18, TypeScript, Vite          |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB (Mongoose ODM)              |
| Routing    | React Router DOM 6                  |
| Linting    | ESLint, Prettier                    |

---

## Project Structure

```
├── client/                  # React + TypeScript frontend
│   ├── src/
│   │   ├── main.tsx         # Entry point (BrowserRouter)
│   │   ├── App.tsx          # Route definitions & layout
│   │   ├── components/
│   │   │   └── Navbar.tsx   # Navigation bar
│   │   ├── pages/
│   │   │   ├── HomePage.tsx         # Landing page
│   │   │   ├── PlayersPage.tsx      # Player management
│   │   │   ├── ScoringPage.tsx      # Game scoring interface
│   │   │   ├── TournamentPage.tsx   # Tournament management
│   │   │   ├── StatsPage.tsx        # Statistics & analytics
│   │   │   └── GameHistoryPage.tsx  # Game history viewer
│   │   └── utils/
│   │       └── gameHistory.js       # Local storage helpers
│   └── vite.config.ts       # Vite config (port 3005)
│
├── server/                  # Express.js backend
│   ├── server.js            # Server entry point (port 5000)
│   ├── config/
│   │   └── database.js      # MongoDB connection
│   └── routes/
│       ├── games.js         # Game CRUD endpoints
│       └── players.js       # Player CRUD endpoints
│
├── index.html               # Legacy calculator app
├── script.js
├── styles.css
└── eslint.config.js
```

---

## Getting Started

### Prerequisites

- **Node.js** 20.11.0 (see `.nvmrc`)
- **MongoDB** running locally or via connection string

### Installation

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd client && npm install

# Install backend dependencies
cd ../server && npm install
```

### Environment Variables

Create a `.env` file in `server/` if needed:

| Variable      | Default                                  | Description              |
| ------------- | ---------------------------------------- | ------------------------ |
| `PORT`        | `5000`                                   | Backend server port      |
| `MONGODB_URI` | `mongodb://localhost:27017/darts-game`   | MongoDB connection string |

### Running the App

```bash
# Start the backend (with hot-reload)
cd server
npm run dev

# Start the frontend (in a separate terminal)
cd client
npm run dev
```

- **Frontend:** http://localhost:3005
- **Backend:** http://localhost:5000

---

## Features & Pages

| Route        | Page             | Description                                                      |
| ------------ | ---------------- | ---------------------------------------------------------------- |
| `/`          | Home             | Landing page with feature cards and quick-start buttons          |
| `/players`   | Players          | Add, list, and view player stats                                 |
| `/scoring`   | Scoring          | Real-time scoring for 501, Cricket, Around the Clock, 301        |
| `/tournament`| Tournament       | Create & manage Single/Double Elimination and Round Robin events |
| `/stats`     | Statistics       | Performance analytics, accuracy charts, and achievements         |
| `/history`   | Game History     | Browse past games stored in local storage                        |

---

## API Endpoints

Base URL: `http://localhost:5000/api`

### Health Check

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | `/api/test`  | Server health check |

### Games (`/api/games`)

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/games`     | Get all games     |
| POST   | `/api/games`     | Create a game     |
| GET    | `/api/games/:id` | Get game by ID    |
| PUT    | `/api/games/:id` | Update game by ID |
| DELETE | `/api/games/:id` | Delete game by ID |

### Players (`/api/players`)

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| GET    | `/api/players`     | Get all players     |
| POST   | `/api/players`     | Create a player     |
| GET    | `/api/players/:id` | Get player by ID    |
| PUT    | `/api/players/:id` | Update player by ID |
| DELETE | `/api/players/:id` | Delete player by ID |

> **Note:** API endpoints are currently stubbed with placeholder responses.

---

## Available Scripts

### Frontend (`client/`)

| Script          | Command            | Description                    |
| --------------- | ------------------ | ------------------------------ |
| `npm run dev`   | `vite`             | Start dev server on port 3005  |
| `npm run build` | `tsc && vite build`| Type-check and build           |
| `npm run lint`  | `eslint .`         | Run linter                     |
| `npm run preview`| `vite preview`    | Preview production build       |

### Backend (`server/`)

| Script          | Command              | Description                 |
| --------------- | -------------------- | --------------------------- |
| `npm start`     | `node server.js`     | Start server                |
| `npm run dev`   | `nodemon server.js`  | Start with hot-reload       |

---

## Code Style

- **Quotes:** Single quotes
- **Semicolons:** Required
- **Indentation:** 2 spaces
- **Trailing commas:** None
- **Print width:** 80 characters
- **Arrow parens:** Avoid when possible

Configured via `.prettierrc`, `eslint.config.js`, and `.editorconfig`.

---

## Database

- **Engine:** MongoDB
- **ODM:** Mongoose 7.5
- **Default URI:** `mongodb://localhost:27017/darts-game`
- **Connection config:** `server/config/database.js`
- **Models/Schemas:** Not yet defined — endpoints are stubbed
