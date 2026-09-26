import { ArrowDownRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getWorkouts } from '../services/api';
import WorkoutCard from '../components/WorkoutCard';
import Loading from '../components/Loading';

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getWorkouts()
      .then(setWorkouts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">WORKOUT LIBRARY</span>

            <h1>
              TRAIN WITH INTENT.
              <br />
              <em>LOG EVERY SET.</em>
            </h1>

            <p>
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <a href="#library" className="primary-btn">
              Browse Workouts
              <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="hero-visual">
            <img
              src="../src/assets/images/banner.png"
              alt="FitLog workout banner"
            />
          </div>
        </div>
      </section>

      {/* Workout Library */}
      <section id="library" className="library section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">12 MOVES</span>

            <h2>THE LIBRARY</h2>

            <p>
              Twelve lifts covering every major muscle group.
            </p>
          </div>
        </div>

        {loading && <Loading />}

        {error && (
          <div className="error-state">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="workout-grid">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}