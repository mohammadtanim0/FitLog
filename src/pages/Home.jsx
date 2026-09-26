import { ArrowDownRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { getWorkouts } from '../services/api';
import WorkoutCard from '../components/WorkoutCard';
import SortDropdown from '../components/SortDropdown';
import Loading from '../components/Loading';

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sort, setSort] = useState('duration');

  useEffect(() => {
    getWorkouts().then(setWorkouts).catch((err) => setError(err.message)).finally(() => setLoading(false));
  }, []);

  const sorted = useMemo(() => [...workouts].sort((a, b) => a[sort === 'calories' ? 'caloriesBurned' : sort] - b[sort === 'calories' ? 'caloriesBurned' : sort]), [workouts, sort]);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">WORKOUT LIBRARY</span>
            <h1>TRAIN WITH INTENT.<br /><em>LOG EVERY SET.</em></h1>
            <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
            <a href="#library" className="primary-btn">Browse Workouts <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-visual"><img src={workouts[0]?.image || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'} alt="Workout" /></div>
        </div>
      </section>

      <section id="library" className="library section container">
        <div className="section-heading">
          <div><span className="eyebrow">12 MOVES</span><h2>THE LIBRARY</h2><p>Twelve lifts covering every major muscle group.</p></div>
          {!loading && !error && <SortDropdown value={sort} onChange={setSort} />}
        </div>
        {loading && <Loading />}
        {error && <div className="error-state">{error}</div>}
        {!loading && !error && <div className="workout-grid">{sorted.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}</div>}
      </section>
    </main>
  );
}
