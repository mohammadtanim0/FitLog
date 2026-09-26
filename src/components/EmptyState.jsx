import { Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyState({ saved = false }) {
  return (
    <div className="empty-state">
      <Dumbbell size={34} />
      <h3>NOTHING HERE YET</h3>
      <p>{saved ? 'Save a workout from the library and it will appear here.' : 'Browse the library and add a lift to get today moving.'}</p>
      <Link className="primary-btn" to="/">Go to workouts</Link>
    </div>
  );
}
