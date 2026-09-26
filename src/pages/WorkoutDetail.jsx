import { Bookmark, Check, Clock3, Flame, Plus, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWorkoutById } from '../services/api';
import { useFitLog } from '../context/FitLogContext';
import Loading from '../components/Loading';

export default function WorkoutDetail() {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addToPlan, saveForLater } = useFitLog();

  useEffect(() => {
    getWorkoutById(id).then(setWorkout).catch((err) => setError(err.message)).finally(() => setLoading(false));
  }, [id]);

  if (loading) return <main className="page container"><Loading label="Loading workout…" /></main>;
  if (error || !workout) return <main className="page container"><div className="error-state">Workout not found. <Link to="/">Return home</Link></div></main>;

  return (
    <main className="detail-page section container">
      <Link className="back-link" to="/">← Back to library</Link>
      <div className="detail-grid">
        <div className="detail-media"><img src={workout.image} alt={workout.name} /></div>
        <div className="detail-content">
          <div className="tag-row">{workout.muscleGroups.map((g) => <span className="tag" key={g}>{g}</span>)}</div>
          <h1>{workout.name}</h1>
          <p className="detail-description">{workout.description}</p>
          <section className="spec-panel">
            <h2>KEY SPECS</h2>
            <div className="spec-grid">
              <Spec label="Equipment" value={workout.equipment} />
              <Spec label="Difficulty" value={workout.difficulty} />
              <Spec label="Sets" value={workout.sets} />
              <Spec label="Reps" value={workout.reps} />
              <Spec label="Duration" value={`${workout.duration} min`} />
              <Spec label="Calories" value={`${workout.caloriesBurned} kcal`} />
              <Spec label="Rating" value={workout.rating} />
            </div>
          </section>
          <section className="instructions">
            <h2>INSTRUCTIONS</h2>
            <ol>{workout.instructions.map((instruction, index) => <li key={instruction}><span>{index + 1}</span><p>{instruction}</p></li>)}</ol>
          </section>
          <div className="detail-actions">
            <button className="primary-btn" onClick={() => addToPlan(workout)}><Plus size={17} /> Add to today's plan</button>
            <button className="secondary-btn" onClick={() => saveForLater(workout)}><Bookmark size={17} /> Save for later</button>
          </div>
        </div>
      </div>
    </main>
  );
}

function Spec({ label, value }) {
  return <div className="spec"><span>{label}</span><strong>{value}</strong></div>;
}
