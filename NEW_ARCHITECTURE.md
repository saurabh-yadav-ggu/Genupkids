# Numerical Games Module Architecture

**Status:** ✅ Setup Complete | Ready for Game Integration

---

## 📋 Overview

This document outlines the new modular architecture for the **Numerical Games** section of the GenUpKid platform. The system uses **React Router v6** for client-side routing and a component-based structure for code reusability and maintainability.

---

## 🏗️ New Folder Structure

```
genupkid-main/src/

├── assets/                    # Shared images, icons, etc.
├── components/                # Shared reusable components
│   ├── GameCard.jsx          # NEW: Game card component
│   ├── ActivityCards.jsx
│   ├── Header.jsx
│   └── ...
├── data/                       # NEW: Config & constants
│   └── games.js              # Game list configuration
├── games/                      # NEW: Game implementations
│   ├── dice/
│   │   ├── DiceGame.jsx       # Main component (placeholder)
│   │   ├── DICE_GAME_EXAMPLE.jsx  # Integration example
│   │   ├── components/        # (Copy from dice-math-game)
│   │   ├── hooks/             # (Copy from dice-math-game)
│   │   ├── utils/             # (Copy from dice-math-game)
│   │   ├── constants/         # (Copy from dice-math-game)
│   │   ├── types/             # (Copy from dice-math-game)
│   │   └── styles/            # (Copy from dice-math-game)
│   ├── climb/
│   │   ├── MathClimbGame.jsx  # Placeholder (to be integrated)
│   │   └── ...
│   ├── race/
│   │   ├── MathRaceGame.jsx   # Placeholder (to be integrated)
│   │   └── ...
│   └── tug/
│       ├── MathTugOfWarGame.jsx # Placeholder (to be integrated)
│       └── ...
├── pages/                      # NEW: Page-level components
│   └── NumericalGamesDashboard.jsx  # Game selection page
├── router/                     # NEW: Routing configuration
│   └── AppRouter.jsx          # Main router setup
├── styles/                     # Global styles
├── App.jsx                     # Updated for routing
└── main.jsx                    # Updated entry point
```

---

## 🛣️ Routing Structure

```
/ 
├── Home Page (Category Selection)
│   └── Shows: Numerical, Alphabetical, Thinking, Matching
│
└── /games/numerical
    ├── Numerical Games Dashboard
    │   └── Shows all 4 math games as cards
    │
    ├── /games/numerical/dice     → DiceGame component
    ├── /games/numerical/climb    → MathClimbGame component
    ├── /games/numerical/race     → MathRaceGame component
    └── /games/numerical/tug      → MathTugOfWarGame component
```

---

## 📁 Key Files Created

### 1. **`src/data/games.js`**
Configuration file with game metadata.

```javascript
export const numericalGames = [
  {
    id: 'dice',
    title: 'Dice Math Game',
    description: '...',
    route: '/games/numerical/dice',
    badge: 'NEW',
    image: 'url',
    color: 'bg-primary/5',
    tilt: 'rotate-[-1deg]'
  },
  // ... more games
];
```

### 2. **`src/components/GameCard.jsx`**
Reusable card component for displaying games.

**Props:**
- `title` - Game title
- `description` - Game description  
- `image` - Image URL
- `route` - Navigation route
- `badge` (optional) - Badge text
- `color` (optional) - Background color class
- `tilt` (optional) - Rotation class

### 3. **`src/pages/NumericalGamesDashboard.jsx`**
Landing page for numerical games. Features:
- Game grid layout
- Sidebar navigation
- Mobile support
- Progress section

### 4. **`src/router/AppRouter.jsx`**
Central routing configuration using React Router v6.

**Routes:**
- `GET /` → Home page
- `GET /games/numerical` → Dashboard
- `GET /games/numerical/:game` → Individual game

Includes:
- Code splitting with `lazy()` and `Suspense`
- Loading fallback UI
- TODO comments for other categories

### 5. **`src/App.jsx`** (Updated)
Converted from state-based navigation to router-based:
- Removed `useState` for view management
- Uses `useNavigate()` for programmatic navigation
- Calls actions on button clicks

### 6. **`src/main.jsx`** (Updated)
Changed entry point from `<App />` to `<AppRouter />`.

---

## 🔌 Integration Guide

### For Dice Game (and others):

1. **Copy source files:**
   ```bash
   cp -r ../dice-math-game/src/components src/games/dice/
   cp -r ../dice-math-game/src/hooks src/games/dice/
   cp -r ../dice-math-game/src/utils src/games/dice/
   cp -r ../dice-math-game/src/styles src/games/dice/
   ```

2. **Update DiceGame.jsx** with provided example code
   - See `src/games/dice/DICE_GAME_EXAMPLE.jsx` for reference

3. **Test the integration:**
   ```bash
   npm run dev
   # Navigate to http://localhost:5173/games/numerical
   ```

4. **Repeat for:**
   - `climb/MathClimbGame.jsx`
   - `race/MathRaceGame.jsx`
   - `tug/MathTugOfWarGame.jsx`

---

## 📦 Package Dependencies

**Already installed:**
- ✅ react@19.2.5
- ✅ react-dom@19.2.5
- ✅ react-router-dom@6.22.0 (NEW)
- ✅ tailwindcss@4.2.2
- ✅ vite@8.0.4

---

## 🎮 Component Props Reference

### GameCard

```jsx
<GameCard
  title="Dice Math Game"
  description="Roll dice and solve math!"
  image="https://..."
  route="/games/numerical/dice"
  badge="NEW"          // optional
  color="bg-primary/5" // optional
  tilt="rotate-[-1deg]" // optional
/>
```

### NumericalGamesDashboard

```jsx
<NumericalGamesDashboard />
// No props required - uses data from games.js
```

---

## 🔄 Navigation Flow

```
Home Page (/)
    ↓ [Click "Play Now"]
NumericalGamesDashboard (/games/numerical)
    ↓ [Click game card]
Individual Game (/games/numerical/:game)
    ↓ [Click "Back Button"]
NumericalGamesDashboard (/games/numerical)
    ↓ [Click "Back to Home"]
Home Page (/)
```

---

## ✨ Features & Best Practices

✅ **Code Splitting** - Games load on demand with `lazy()`  
✅ **Type Safety** - Structure ready for TypeScript  
✅ **Responsive Design** - Mobile-first with Tailwind  
✅ **Accessibility** - Material Icons, semantic HTML  
✅ **Reusability** - GameCard component used for all games  
✅ **Maintainability** - Clear folder organization  
✅ **Scalability** - Easy to add new game categories  

---

## 🧪 Testing Checklist

- [ ] Install dependencies: `npm install`
- [ ] Start dev server: `npm run dev`
- [ ] Home page loads correctly
- [ ] Click "Play Now" → navigates to `/games/numerical`
- [ ] Numerical dashboard shows all 4 game cards
- [ ] Click game card → navigates to `/games/numerical/:game`
- [ ] Placeholder game page loads
- [ ] Back button works from game page
- [ ] Mobile navigation works
- [ ] No console errors

---

## 🚀 Next Steps

1. **Integrate Dice Game** - Follow example in `DICE_GAME_EXAMPLE.jsx`
2. **Integrate Climb Game** - Same pattern
3. **Integrate Race Game** - Same pattern
4. **Integrate Tug Game** - Same pattern
5. **Create category dashboards** - Alphabetical, Thinking, Matching
6. **Test all routes** - Ensure navigation works end-to-end
7. **Optimize** - Bundle analysis, lazy loading verification

---

## 📚 References

- [React Router v6 Documentation](https://reactrouter.com/)
- [Code Splitting with React.lazy()](https://react.dev/reference/react/lazy)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Created:** April 11, 2026  
**Framework:** React 19 + Vite  
**Routing:** React Router v6  
