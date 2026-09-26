import { Clock3, Flame, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WorkoutCard({ workout }) {
  return (
    <Link to={`/workout/${workout.id}`} className="workout-card">
      <div className="card-image-wrap">
        <img src={workout.image} alt={workout.name} />
        <div className="tag-row">{workout.muscleGroups.map((group) => <span className="tag" key={group}>{group}</span>)}</div>
      </div>
      <div className="card-body">
        <h3>{workout.name}</h3>
        <p className="equipment">{workout.equipment}</p>
        <div className="stats">
          <span><Clock3 size={14} /> {workout.duration} min</span>
          <span><Flame size={14} /> {workout.caloriesBurned} kcal</span>
          <span><Star size={14} /> {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}
