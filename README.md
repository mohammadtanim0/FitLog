# FitLog — Workout Library

FitLog is a responsive, dark-and-clean workout library and daily training planner built with React and Vite. Users can browse workouts from a REST API, open detailed workout pages, add up to five lifts to today's plan, save workouts for later, sort the library, mark planned workouts as done, and persist their selections with localStorage.

## Live API
- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

## Technologies
- React
- Vite
- React Router
- JavaScript (ES6+)
- Lucide React icons
- CSS3 / responsive CSS
- Browser localStorage
- REST API

## Key Features
1. Responsive mobile, tablet, and desktop layout.
2. API-powered 12-workout library with responsive cards.
3. Workout detail pages with specs and instructions.
4. Today's Plan with a five-workout limit and live metrics.
5. Saved workouts with persistent localStorage state.
6. Mark as Done and remove actions with toast notifications.
7. Duration, calories, and rating sorting.
8. Loading states, error handling, and a 404 page.
9. Deployment-safe SPA routing through `vercel.json`.
10. Reusable React components and context-based state management.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Suggested Git commits

```text
git add . && git commit -m "initial FitLog project setup"
git add . && git commit -m "added API service and loading state"
git add . && git commit -m "built responsive navbar and hero"
git add . && git commit -m "added workout library cards and sorting"
git add . && git commit -m "built workout details page"
git add . && git commit -m "added today's plan and saved state"
git add . && git commit -m "added toast notifications and plan actions"
git add . && git commit -m "added responsive styling and 404 page"
git add . && git commit -m "added deployment config and README"
```
