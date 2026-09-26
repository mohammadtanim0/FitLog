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
