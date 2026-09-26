import { Check, Clock3, Eye, Flame, Star, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFitLog } from '../context/FitLogContext';

export default function PlanCard({ workout, saved = false }) {
  const { removeFromPlan, toggleDone, removeSaved, addToPlan } = useFitLog();
  return (
    <article className={`plan-card ${workout.done ? 'is-done' : ''}`}>
      <img src={workout.image} alt={workout.name} />
      <div className="plan-info">
        <div className="tag-row compact">{workout.muscleGroups.map((g) => <span className="tag" key={g}>{g}</span>)}</div>
        <h3>{workout.name}</h3>
        <p>{workout.equipment}</p>
        <div className="stats">
          <span><Clock3 size={14} /> {workout.duration} min</span>
          <span><Flame size={14} /> {workout.caloriesBurned} kcal</span>
          <span><Star size={14} /> {workout.rating}</span>
        </div>
      </div>
      <div className="plan-actions">
        <Link className="small-btn" to={`/workout/${workout.id}`}><Eye size={15} /> View Details</Link>
        {!saved && <button className={`small-btn ${workout.done ? 'done' : ''}`} onClick={() => toggleDone(workout.id)}><Check size={15} /> {workout.done ? 'Done' : 'Mark as Done'}</button>}
        {saved ? <button className="icon-btn" onClick={() => removeSaved(workout.id)} aria-label="Remove saved workout"><X size={18} /></button> : <button className="icon-btn" onClick={() => removeFromPlan(workout.id)} aria-label="Remove workout"><X size={18} /></button>}
      </div>
      {saved && <button className="save-to-plan" onClick={() => addToPlan(workout)}>+ Add to plan</button>}
    </article>
  );
}
