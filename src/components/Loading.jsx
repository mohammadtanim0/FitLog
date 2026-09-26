export default function Loading({ label = 'Loading workouts…' }) {
  return <div className="loading-state"><span className="spinner" />{label}</div>;
}
